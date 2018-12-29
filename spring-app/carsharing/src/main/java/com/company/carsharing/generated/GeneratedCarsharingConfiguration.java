package com.company.carsharing.generated;

import com.company.carsharing.CarsharingApplication;
import com.company.carsharing.CarsharingApplicationBuilder;
import com.company.carsharing.carsharing.carsharing.baza.BazaManager;
import com.company.carsharing.carsharing.carsharing.cennik.CennikManager;
import com.company.carsharing.carsharing.carsharing.doladowanie_konta.DoladowanieKontaManager;
import com.company.carsharing.carsharing.carsharing.kolizja.KolizjaManager;
import com.company.carsharing.carsharing.carsharing.parking.ParkingManager;
import com.company.carsharing.carsharing.carsharing.pracer_techniczne.PracerTechniczneManager;
import com.company.carsharing.carsharing.carsharing.pracownik.PracownikManager;
import com.company.carsharing.carsharing.carsharing.przejazd.PrzejazdManager;
import com.company.carsharing.carsharing.carsharing.samochod.SamochodManager;
import com.company.carsharing.carsharing.carsharing.tankowanie.TankowanieManager;
import com.company.carsharing.carsharing.carsharing.uzytkownik.UzytkownikManager;
import com.speedment.common.annotation.GeneratedCode;
import com.speedment.enterprise.plugins.json.JsonBundle;
import com.speedment.enterprise.plugins.json.JsonComponent;
import com.speedment.runtime.core.ApplicationBuilder;
import com.speedment.runtime.core.component.ProjectComponent;
import com.speedment.runtime.join.JoinComponent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;

/**
 * The spring configuration file
 * <p>
 * This file has been automatically generated by Speedment. Any changes made to
 * it will be overwritten.
 * 
 * @author Speedment
 */
@GeneratedCode("Speedment")
public class GeneratedCarsharingConfiguration {
    
    protected final static String URL_PROPERTY = "spring.speedment.url";
    protected final static String HOST_PROPERTY = "spring.speedment.host";
    protected final static String PORT_PROPERTY = "spring.speedment.port";
    protected final static String USERNAME_PROPERTY = "spring.speedment.username";
    protected final static String PASSWORD_PROPERTY = "spring.speedment.password";
    protected final static String LOGGING_PROPERTY = "spring.speedment.logging";
    protected @Autowired Environment env;
    
    @Bean
    public CarsharingApplication getApplication() {
        return getApplicationBuilder().build();
    }
    
    public CarsharingApplicationBuilder getApplicationBuilder() {
        final CarsharingApplicationBuilder builder =
            new CarsharingApplicationBuilder()
                .withBundle(JsonBundle.class);
        
        if (env.containsProperty(URL_PROPERTY)) {
            builder.withConnectionUrl(env.getProperty(URL_PROPERTY));
        }
        
        if (env.containsProperty(HOST_PROPERTY)) {
            builder.withIpAddress(env.getProperty(HOST_PROPERTY));
        }
        
        if (env.containsProperty(PORT_PROPERTY)) {
            builder.withPort(Integer.parseInt(env.getProperty(PORT_PROPERTY)));
        }
        
        if (env.containsProperty(USERNAME_PROPERTY)) {
            builder.withUsername(env.getProperty(USERNAME_PROPERTY));
        }
        
        if (env.containsProperty(PASSWORD_PROPERTY)) {
            builder.withPassword(env.getProperty(PASSWORD_PROPERTY));
        }
        
        if (env.containsProperty(LOGGING_PROPERTY)
        &&  Boolean.valueOf(env.getProperty(LOGGING_PROPERTY))) {
            builder
                .withLogging(ApplicationBuilder.LogType.STREAM)
                .withLogging(ApplicationBuilder.LogType.APPLICATION_BUILDER)
                .withLogging(ApplicationBuilder.LogType.CONNECTION)
                .withLogging(ApplicationBuilder.LogType.STREAM_OPTIMIZER);
        }
        
        return builder;
    }
    
    @Bean
    public ProjectComponent getProjectComponent(CarsharingApplication app) {
        return app.getOrThrow(ProjectComponent.class);
    }
    
    @Bean
    public JsonComponent getJsonComponent(CarsharingApplication app) {
        return app.getOrThrow(JsonComponent.class);
    }
    
    @Bean
    public JoinComponent getJoinComponent(CarsharingApplication app) {
        return app.getOrThrow(JoinComponent.class);
    }
    
    @Bean
    public BazaManager getBazaManager(CarsharingApplication app) {
        return app.getOrThrow(BazaManager.class);
    }
    
    @Bean
    public CennikManager getCennikManager(CarsharingApplication app) {
        return app.getOrThrow(CennikManager.class);
    }
    
    @Bean
    public DoladowanieKontaManager getDoladowanieKontaManager(CarsharingApplication app) {
        return app.getOrThrow(DoladowanieKontaManager.class);
    }
    
    @Bean
    public KolizjaManager getKolizjaManager(CarsharingApplication app) {
        return app.getOrThrow(KolizjaManager.class);
    }
    
    @Bean
    public ParkingManager getParkingManager(CarsharingApplication app) {
        return app.getOrThrow(ParkingManager.class);
    }
    
    @Bean
    public PracerTechniczneManager getPracerTechniczneManager(CarsharingApplication app) {
        return app.getOrThrow(PracerTechniczneManager.class);
    }
    
    @Bean
    public PracownikManager getPracownikManager(CarsharingApplication app) {
        return app.getOrThrow(PracownikManager.class);
    }
    
    @Bean
    public PrzejazdManager getPrzejazdManager(CarsharingApplication app) {
        return app.getOrThrow(PrzejazdManager.class);
    }
    
    @Bean
    public SamochodManager getSamochodManager(CarsharingApplication app) {
        return app.getOrThrow(SamochodManager.class);
    }
    
    @Bean
    public TankowanieManager getTankowanieManager(CarsharingApplication app) {
        return app.getOrThrow(TankowanieManager.class);
    }
    
    @Bean
    public UzytkownikManager getUzytkownikManager(CarsharingApplication app) {
        return app.getOrThrow(UzytkownikManager.class);
    }
}