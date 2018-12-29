package com.company.carsharing.carsharing.carsharing.tankowanie.generated;

import com.company.carsharing.carsharing.carsharing.tankowanie.Tankowanie;
import com.speedment.common.annotation.GeneratedCode;

import java.sql.Date;
import java.util.Objects;
import java.util.StringJoiner;

/**
 * The generated base implementation of the {@link
 * com.company.carsharing.carsharing.carsharing.tankowanie.Tankowanie}-interface.
 * <p>
 * This file has been automatically generated by Speedment. Any changes made to
 * it will be overwritten.
 * 
 * @author Speedment
 */
@GeneratedCode("Speedment")
public abstract class GeneratedTankowanieImpl implements Tankowanie {
    
    private int id;
    private String siecStacji;
    private double ileLitrow;
    private double kwota;
    private Date przejazdDataRozpoczecia;
    private String przejazdUzytkownikMail;
    private String przejazdNrRejestracyjny;
    
    protected GeneratedTankowanieImpl() {}
    
    @Override
    public int getId() {
        return id;
    }
    
    @Override
    public String getSiecStacji() {
        return siecStacji;
    }
    
    @Override
    public double getIleLitrow() {
        return ileLitrow;
    }
    
    @Override
    public double getKwota() {
        return kwota;
    }
    
    @Override
    public Date getPrzejazdDataRozpoczecia() {
        return przejazdDataRozpoczecia;
    }
    
    @Override
    public String getPrzejazdUzytkownikMail() {
        return przejazdUzytkownikMail;
    }
    
    @Override
    public String getPrzejazdNrRejestracyjny() {
        return przejazdNrRejestracyjny;
    }
    
    @Override
    public Tankowanie setId(int id) {
        this.id = id;
        return this;
    }
    
    @Override
    public Tankowanie setSiecStacji(String siecStacji) {
        this.siecStacji = siecStacji;
        return this;
    }
    
    @Override
    public Tankowanie setIleLitrow(double ileLitrow) {
        this.ileLitrow = ileLitrow;
        return this;
    }
    
    @Override
    public Tankowanie setKwota(double kwota) {
        this.kwota = kwota;
        return this;
    }
    
    @Override
    public Tankowanie setPrzejazdDataRozpoczecia(Date przejazdDataRozpoczecia) {
        this.przejazdDataRozpoczecia = przejazdDataRozpoczecia;
        return this;
    }
    
    @Override
    public Tankowanie setPrzejazdUzytkownikMail(String przejazdUzytkownikMail) {
        this.przejazdUzytkownikMail = przejazdUzytkownikMail;
        return this;
    }
    
    @Override
    public Tankowanie setPrzejazdNrRejestracyjny(String przejazdNrRejestracyjny) {
        this.przejazdNrRejestracyjny = przejazdNrRejestracyjny;
        return this;
    }
    
    @Override
    public String toString() {
        final StringJoiner sj = new StringJoiner(", ", "{ ", " }");
        sj.add("id = "                      + Objects.toString(getId()));
        sj.add("siecStacji = "              + Objects.toString(getSiecStacji()));
        sj.add("ileLitrow = "               + Objects.toString(getIleLitrow()));
        sj.add("kwota = "                   + Objects.toString(getKwota()));
        sj.add("przejazdDataRozpoczecia = " + Objects.toString(getPrzejazdDataRozpoczecia()));
        sj.add("przejazdUzytkownikMail = "  + Objects.toString(getPrzejazdUzytkownikMail()));
        sj.add("przejazdNrRejestracyjny = " + Objects.toString(getPrzejazdNrRejestracyjny()));
        return "TankowanieImpl " + sj.toString();
    }
    
    @Override
    public boolean equals(Object that) {
        if (this == that) { return true; }
        if (!(that instanceof Tankowanie)) { return false; }
        final Tankowanie thatTankowanie = (Tankowanie)that;
        if (this.getId() != thatTankowanie.getId()) { return false; }
        if (!Objects.equals(this.getSiecStacji(), thatTankowanie.getSiecStacji())) { return false; }
        if (this.getIleLitrow() != thatTankowanie.getIleLitrow()) { return false; }
        if (this.getKwota() != thatTankowanie.getKwota()) { return false; }
        if (!Objects.equals(this.getPrzejazdDataRozpoczecia(), thatTankowanie.getPrzejazdDataRozpoczecia())) { return false; }
        if (!Objects.equals(this.getPrzejazdUzytkownikMail(), thatTankowanie.getPrzejazdUzytkownikMail())) { return false; }
        if (!Objects.equals(this.getPrzejazdNrRejestracyjny(), thatTankowanie.getPrzejazdNrRejestracyjny())) { return false; }
        return true;
    }
    
    @Override
    public int hashCode() {
        int hash = 7;
        hash = 31 * hash + Integer.hashCode(getId());
        hash = 31 * hash + Objects.hashCode(getSiecStacji());
        hash = 31 * hash + Double.hashCode(getIleLitrow());
        hash = 31 * hash + Double.hashCode(getKwota());
        hash = 31 * hash + Objects.hashCode(getPrzejazdDataRozpoczecia());
        hash = 31 * hash + Objects.hashCode(getPrzejazdUzytkownikMail());
        hash = 31 * hash + Objects.hashCode(getPrzejazdNrRejestracyjny());
        return hash;
    }
}