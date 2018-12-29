package com.company.carsharing.carsharing.carsharing.samochod.generated;

import com.company.carsharing.carsharing.carsharing.samochod.Samochod;
import com.company.carsharing.carsharing.carsharing.samochod.SamochodImpl;
import com.speedment.common.annotation.GeneratedCode;
import com.speedment.runtime.config.identifier.TableIdentifier;
import com.speedment.runtime.core.component.SqlAdapter;
import com.speedment.runtime.core.db.SqlFunction;

import java.sql.ResultSet;
import java.sql.SQLException;

import static com.speedment.common.injector.State.RESOLVED;

/**
 * The generated Sql Adapter for a {@link
 * com.company.carsharing.carsharing.carsharing.samochod.Samochod} entity.
 * <p>
 * This file has been automatically generated by Speedment. Any changes made to
 * it will be overwritten.
 * 
 * @author Speedment
 */
@GeneratedCode("Speedment")
public abstract class GeneratedSamochodSqlAdapter implements SqlAdapter<Samochod> {
    
    private final TableIdentifier<Samochod> tableIdentifier;
    
    protected GeneratedSamochodSqlAdapter() {
        this.tableIdentifier = TableIdentifier.of("carsharing", "carsharing", "samochod");
    }
    
    protected Samochod apply(ResultSet resultSet, int offset) throws SQLException {
        return createEntity()
            .setNrRejestracyjny(    resultSet.getString(1 + offset))
            .setDostepny(           resultSet.getBoolean(2 + offset))
            .setModel(              resultSet.getString(3 + offset))
            .setMarka(              resultSet.getString(4 + offset))
            .setPrzebieg(           resultSet.getDouble(5 + offset))
            .setLokalizacjaPozaP(   resultSet.getString(6 + offset))
            .setBazaLokalizacja(    resultSet.getString(7 + offset))
            .setParkingLokalizacja( resultSet.getString(8 + offset))
            ;
    }
    
    protected SamochodImpl createEntity() {
        return new SamochodImpl();
    }
    
    @Override
    public TableIdentifier<Samochod> identifier() {
        return tableIdentifier;
    }
    
    @Override
    public SqlFunction<ResultSet, Samochod> entityMapper() {
        return entityMapper(0);
    }
    
    @Override
    public SqlFunction<ResultSet, Samochod> entityMapper(int offset) {
        return rs -> apply(rs, offset);
    }
}