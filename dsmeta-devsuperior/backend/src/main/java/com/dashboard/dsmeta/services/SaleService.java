package com.dashboard.dsmeta.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.dashboard.dsmeta.entities.Sale;
import com.dashboard.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository saleRepository;
	
	public Page<Sale> selectAllSales(Pageable pageable) {
		return saleRepository.findAll(pageable);
	}

}
