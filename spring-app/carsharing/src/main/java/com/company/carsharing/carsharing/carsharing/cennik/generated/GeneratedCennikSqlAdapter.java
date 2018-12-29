package com.company.carsharing.carsharing.carsharing.cennik.generated;

import com.company.carsharing.carsharing.carsharing.cennik.Cennik;
import com.company.carsharing.carsharing.carsharing.cennik.CennikImpl;
import com.speedment.common.annotation.GeneratedCode;
import com.speedment.runtime.config.identifier.TableIdentifier;
import com.speedment.runtime.core.component.SqlAdapter;
import com.speedment.runtime.core.db.SqlFunction;

import java.sql.ResultSet;
import java.sql.SQLException;

import static com.speedment.common.injector.State.RESOLVED;

/**
 * The generated Sql Adapter for a {@link
 * com.company.carsharing.carsharing.carsharing.cennik.Cennik} entity.
 * <p>
 * This file has been automatically generated by Speedment. Any changes made to
 * it will be overwritten.
 * 
 * @author Speedment
 */
@GeneratedCode("Speedment")
public abstract class GeneratedCennikSqlAdapter implements SqlAdapter<Cennik> {
    
    private final TableIdentifier<Cennik> tableIdentifier;
    
    protected GeneratedCennikSqlAdapter() {
        this.tableIdentifier = TableIdentifier.of("carsharing", "carsharing", "cennik");
    }
    
    protected Cennik apply(ResultSet resultSet, int offset) throws SQLException {
        return createEntity()
            .setOdKiedy(       resultSet.getDate(1 + offset))
            .setDoKiedy(       resultSet.getDate(2 + offset))
            .setCenaKilometra( resultSet.getDouble(3 + offset))
            .setCenaMinuty(    resultSet.getDouble(4 + offset))
            ;
    }
    
    protected CennikImpl createEntity() {
        return new CennikImpl();
    }
    
    @Override
    public TableIdentifier<Cennik> identifier() {
        return tableIdentifier;
    }
    
    @Override
    public SqlFunction<ResultSet, Cennik> entityMapper() {
        return entityMapper(0);
    }
    
    @Override
    public SqlFunction<ResultSet, Cennik> entityMapper(int offset) {
        return rs -> apply(rs, offset);
    }
}