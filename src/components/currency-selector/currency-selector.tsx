import React, { useState } from "react";

import Button from "@mui/material/Button/Button";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";

import { CurrencyData, mockCurrency } from "../../mock-data/mock-data";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogActions from "@mui/material/DialogActions";

interface PopUpMenuProps {
  open: boolean
  toggleOpen: () => void
  setCurrency: (countryName: string) => void
}

const PopUpMenu = ({ open, toggleOpen, setCurrency }: PopUpMenuProps) => {

  return (
    <Dialog disableEscapeKeyDown open={open} onClose={toggleOpen}>
      <DialogTitle>Choose Currency</DialogTitle>
      <DialogContent>
        {mockCurrency.map(currency => (
          <Button onClick={() => setCurrency(currency.countryName)}>{currency.countryName}</Button>
        ))}
      </DialogContent>
    </Dialog>
  )
}

interface CurrencySelectorProps {
  currencyData: CurrencyData
}

export const CurrencySelector = ({ currencyData }: CurrencySelectorProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencyData[0]);
  const [openPopUp, setOpenPopUp] = useState(false);

  const togglePopUp = () => {
    setOpenPopUp(!openPopUp);
    console.log('update')
  }

  return(
    <div>
      <Button variant='text' className="header-item" onClick={togglePopUp}>
        {selectedCurrency.moneyIcon}
        {selectedCurrency.countryName}
      </Button>
      <PopUpMenu toggleOpen={togglePopUp} open={openPopUp} 
        setCurrency={(countryName: string) => 
          { setSelectedCurrency(currencyData.filter(currency => currency.countryName == countryName)[0]) 
            togglePopUp()
        }}
      />
    </div>
  )
}