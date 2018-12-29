package com.company.carsharing.carsharing.carsharing.tankowanie.generated;

import com.company.carsharing.carsharing.carsharing.tankowanie.Tankowanie;
import com.speedment.common.annotation.GeneratedCode;
import com.speedment.runtime.config.identifier.TableIdentifier;
import com.speedment.runtime.core.manager.Manager;
import com.speedment.runtime.field.Field;

import java.util.List;

import static java.util.Arrays.asList;
import static java.util.Collections.unmodifiableList;

/**
 * The generated base interface for the manager of every {@link
 * com.company.carsharing.carsharing.carsharing.tankowanie.Tankowanie} entity.
 * <p>
 * This file has been automatically generated by Speedment. Any changes made to
 * it will be overwritten.
 * 
 * @author Speedment
 */
@GeneratedCode("Speedment")
public interface GeneratedTankowanieManager extends Manager<Tankowanie> {
    
    TableIdentifier<Tankowanie> IDENTIFIER = TableIdentifier.of("carsharing", "carsharing", "tankowanie");
    List<Field<Tankowanie>> FIELDS = unmodifiableList(asList(
        Tankowanie.ID,
        Tankowanie.SIEC_STACJI,
        Tankowanie.ILE_LITROW,
        Tankowanie.KWOTA,
        Tankowanie.PRZEJAZD_DATA_ROZPOCZECIA,
        Tankowanie.PRZEJAZD_UZYTKOWNIK_MAIL,
        Tankowanie.PRZEJAZD_NR_REJESTRACYJNY
    ));
    
    @Override
    default Class<Tankowanie> getEntityClass() {
        return Tankowanie.class;
    }
}