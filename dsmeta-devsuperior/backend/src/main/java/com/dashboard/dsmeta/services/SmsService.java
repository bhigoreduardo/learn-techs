package com.dashboard.dsmeta.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.dashboard.dsmeta.entities.Sale;
import com.dashboard.dsmeta.repositories.SaleRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {

	@Value(value = "${twilio.sid}")
	private String twilioSid;

	@Value(value = "${twilio.key}")
	private String twilioKey;

	@Value(value = "${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value(value = "${twilio.phone.to}")
	private String twilioPhoneTo;

	@Autowired
	private SaleRepository saleRepository;

	public void sendSms(Long id) {

		Sale sale = saleRepository.findById(id).get();

		String date = sale.getDate().getMonthValue() + "/" + sale.getDate().getYear();

		String msg = "O vendedor: " + sale.getSellerName() + " no período: " + date + " teve o faturamento de R$ "
				+ String.format("%.2f", sale.getAmount());

		Twilio.init(twilioSid, twilioKey);

		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);
		PhoneNumber to = new PhoneNumber(twilioPhoneTo);

		Message message = Message.creator(to, from, msg).create();

	}

}
