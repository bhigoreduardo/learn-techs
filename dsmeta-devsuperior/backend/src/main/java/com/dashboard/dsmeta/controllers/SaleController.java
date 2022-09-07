package com.dashboard.dsmeta.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dashboard.dsmeta.entities.Sale;
import com.dashboard.dsmeta.services.SaleService;
import com.dashboard.dsmeta.services.SmsService;

@RestController
@RequestMapping(value="/sales")
public class SaleController {
	
	@Autowired
	private SaleService saleService;
	
	@Autowired
	private SmsService smsService;
	
	@GetMapping
	public Page<Sale> selectAllSales(
			@RequestParam(value="minDate", defaultValue="") String minDate,
			@RequestParam(value="maxDate", defaultValue="") String maxDate,
			Pageable pageable) {
		return saleService.selectAllSales(minDate, maxDate, pageable);
	}
	
	@GetMapping("/sms")
	public void sendSms() {
		smsService.sendSms();
	}

}
