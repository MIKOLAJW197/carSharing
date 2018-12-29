package com.company.carsharing.carsharing.carsharing.tankowanie.generated;

import com.company.carsharing.carsharing.carsharing.tankowanie.Tankowanie;
import com.company.carsharing.carsharing.carsharing.tankowanie.TankowanieManager;
import com.speedment.common.annotation.GeneratedCode;
import com.speedment.runtime.config.identifier.TableIdentifier;
import com.speedment.runtime.core.manager.AbstractManager;
import com.speedment.runtime.field.Field;

import java.util.stream.Stream;

/**
 * The generated base implementation for the manager of every {@link
 * com.company.carsharing.carsharing.carsharing.tankowanie.Tankowanie} entity.
 * <p>
 * This file has been automatically generated by Speedment. Any changes made to
 * it will be overwritten.
 * 
 * @author Speedment
 */
@GeneratedCode("Speedment")
public abstract class GeneratedTankowanieManagerImpl 
extends AbstractManager<Tankowanie> 
implements GeneratedTankowanieManager {
    
    private final TableIdentifier<Tankowanie> tableIdentifier;
    
    protected GeneratedTankowanieManagerImpl() {
        this.tableIdentifier = TableIdentifier.of("carsharing", "carsharing", "tankowanie");
    }
    
    @Override
    public TableIdentifier<Tankowanie> getTableIdentifier() {
        return tableIdentifier;
    }
    
    @Override
    public Stream<Field<Tankowanie>> fields() {
        return TankowanieManager.FIELDS.stream();
    }
    
    @Override
    public Stream<Field<Tankowanie>> primaryKeyFields() {
        return Stream.of(
            Tankowanie.ID
        );
    }
}