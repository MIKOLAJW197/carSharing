package com.company.carsharing.carsharing.carsharing.kolizja.generated;

import com.company.carsharing.carsharing.carsharing.kolizja.Kolizja;
import com.speedment.common.annotation.GeneratedCode;
import com.speedment.runtime.config.identifier.TableIdentifier;
import com.speedment.runtime.core.manager.Manager;
import com.speedment.runtime.field.Field;

import java.util.List;

import static java.util.Arrays.asList;
import static java.util.Collections.unmodifiableList;

/**
 * The generated base interface for the manager of every {@link
 * com.company.carsharing.carsharing.carsharing.kolizja.Kolizja} entity.
 * <p>
 * This file has been automatically generated by Speedment. Any changes made to
 * it will be overwritten.
 * 
 * @author Speedment
 */
@GeneratedCode("Speedment")
public interface GeneratedKolizjaManager extends Manager<Kolizja> {
    
    TableIdentifier<Kolizja> IDENTIFIER = TableIdentifier.of("carsharing", "carsharing", "kolizja");
    List<Field<Kolizja>> FIELDS = unmodifiableList(asList(
        Kolizja.ID,
        Kolizja.LOKALIZACJA,
        Kolizja.DATA,
        Kolizja.PRZEJAZD_DATA_ROZPOCZECIA,
        Kolizja.PRZEJAZD_UZYTKOWNIK_MAIL,
        Kolizja.PRZEJAZD_NR_REJESTRACYJNY,
        Kolizja.PRACOWNIK_PESEL,
        Kolizja.PRACOWNIK_LOKALIZACJA
    ));
    
    @Override
    default Class<Kolizja> getEntityClass() {
        return Kolizja.class;
    }
}