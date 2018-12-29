package com.company.carsharing.carsharing.carsharing.parking.generated;

import com.company.carsharing.carsharing.carsharing.parking.Parking;
import com.company.carsharing.carsharing.carsharing.parking.ParkingManager;
import com.company.carsharing.carsharing.carsharing.parking.generated.GeneratedParking.Identifier;
import com.speedment.common.annotation.GeneratedCode;
import com.speedment.common.json.Json;
import com.speedment.enterprise.plugins.json.JsonCollectors;
import com.speedment.enterprise.plugins.json.JsonComponent;
import com.speedment.enterprise.plugins.json.JsonEncoder;
import com.speedment.enterprise.plugins.spring.runtime.AbstractFilter;
import com.speedment.enterprise.plugins.spring.runtime.AbstractSort;
import com.speedment.enterprise.plugins.spring.runtime.ControllerUtil;
import com.speedment.runtime.field.Field;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Comparator;
import java.util.EnumSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.function.Predicate;
import java.util.stream.Stream;
import javax.annotation.PostConstruct;

import static java.util.stream.Collectors.toList;

/**
 * The default REST controller logic for Parking entities.
 * <p>
 * This file has been automatically generated by Speedment. Any changes made to
 * it will be overwritten.
 * 
 * @author Speedment
 */
@GeneratedCode("Speedment")
@CrossOrigin(origins = "*", maxAge = 3600)
public abstract class GeneratedParkingController {
    
    protected @Autowired JsonComponent jsonComponent;
    protected @Autowired ParkingManager manager;
    protected JsonEncoder<Parking> encoder;
    
    @PostConstruct
    void createParkingEncoder() {
        encoder = jsonComponent.<Parking>emptyEncoder()
            .put("lokalizacja", Parking.LOKALIZACJA)
            .put("liczbaMiejsc", Parking.LICZBA_MIEJSC)
            .build();
    }
    
    @GetMapping(path = "/parking", produces = "application/json")
    public String get(
            @RequestParam(name = "filter", defaultValue = "[]") String filters,
            @RequestParam(name = "sort", defaultValue = "[]") String sorters,
            @RequestParam(value = "start", defaultValue = "0") long start,
            @RequestParam(value = "limit", defaultValue = "25") long limit) {
        
        return getHelper(
            ControllerUtil.parseFilters(filters, ParkingFilter::new).collect(toList()),
            ControllerUtil.parseSorts(sorters, ParkingSort::new).collect(toList()),
            start,
            limit
        );
    }
    
    protected final Set<Identifier> parseColumns(String jsonColumnList) {
        try {
            @SuppressWarnings("unchecked")
            final List<String> parsed = (List<String>) Json.fromJson(jsonColumnList);
            final Set<GeneratedParking.Identifier> result = EnumSet.noneOf(GeneratedParking.Identifier.class);
            parsed.stream().map(this::parseColumn).forEach(result::add);
            return result;
        } catch (final ClassCastException ex) {
            throw new IllegalArgumentException("Error in parsed JSON.");
        }
    }
    
    protected final Identifier parseColumn(String jsonColumn) {
        switch (jsonColumn) {
            case "lokalizacja":  return GeneratedParking.Identifier.LOKALIZACJA;
            case "liczbaMiejsc": return GeneratedParking.Identifier.LICZBA_MIEJSC;
            default: throw new IllegalArgumentException(
                "Unknown column '" + jsonColumn + "'."
            );
        }
    }
    
    protected final Field<Parking> fieldOf(Identifier columnId) {
        switch (columnId) {
            case LOKALIZACJA:   return Parking.LOKALIZACJA;
            case LICZBA_MIEJSC: return Parking.LICZBA_MIEJSC;
            default: throw new IllegalArgumentException(
                "Unknown column '" + columnId + "'."
            );
        }
    }
    
    protected String getHelper(
            List<Predicate<Parking>> predicates,
            List<Comparator<Parking>> sorters,
            long start,
            long limit) {
        Stream<Parking> stream = manager.stream();
        
        for (final Predicate<Parking> predicate : predicates) {
            stream = stream.filter(predicate);
        }
        
        if (!sorters.isEmpty()) {
            final Optional<Comparator<Parking>> comparator = sorters.stream()
                .reduce(Comparator::thenComparing);
            
            stream = stream.sorted(comparator.get());
        }
        
        return stream
            .skip(start)
            .limit(limit)
            .collect(JsonCollectors.toList(encoder));
    }
    
    /**
     * How to filter the results from the controller. This class is designed to
     * be deserialized automatically from JSON.
     */
    public final static class ParkingFilter extends AbstractFilter<Parking> {
        
        public ParkingFilter(
                String operator,
                String property,
                String value) {
            super(operator, property, value);
        }
        
        @Override
        public Predicate<Parking> toPredicate() {
            switch (property()) {
                case "lokalizacja" : {
                    final String v = value();
                    switch (operator()) {
                        case "eq"   : return Parking.LOKALIZACJA.equal(v);
                        case "ne"   : return Parking.LOKALIZACJA.notEqual(v);
                        case "lt"   : return Parking.LOKALIZACJA.lessThan(v);
                        case "le"   : return Parking.LOKALIZACJA.lessOrEqual(v);
                        case "gt"   : return Parking.LOKALIZACJA.greaterThan(v);
                        case "ge"   : return Parking.LOKALIZACJA.greaterOrEqual(v);
                        case "like" : return Parking.LOKALIZACJA.contains(v);
                        default : throw new IllegalArgumentException(
                            "'" + operator() + "' is not a valid operator for " +
                            "Parking.lokalizacja."
                        );
                    }
                }
                case "liczbaMiejsc" : {
                    final int v = Integer.parseInt(value());
                    switch (operator()) {
                        case "eq"   : return Parking.LICZBA_MIEJSC.equal(v);
                        case "ne"   : return Parking.LICZBA_MIEJSC.notEqual(v);
                        case "lt"   : return Parking.LICZBA_MIEJSC.lessThan(v);
                        case "le"   : return Parking.LICZBA_MIEJSC.lessOrEqual(v);
                        case "gt"   : return Parking.LICZBA_MIEJSC.greaterThan(v);
                        case "ge"   : return Parking.LICZBA_MIEJSC.greaterOrEqual(v);
                        case "like" : // Fallthrough
                        default : throw new IllegalArgumentException(
                            "'" + operator() + "' is not a valid operator for " +
                            "Parking.liczbaMiejsc."
                        );
                    }
                }
                default : throw new IllegalArgumentException(
                    "'" + property() + "' is not a valid Parking property."
                );
            }
        }
    }
    
    /**
     * How to sort the results from the controller. This class is designed to be
     * deserialized automatically from JSON.
     */
    public final static class ParkingSort extends AbstractSort<Parking> {
        
        public ParkingSort(String property, String direction) {
            super(property, direction);
        }
        
        @Override
        public Comparator<Parking> toComparator() {
            final Comparator<Parking> comparator;
            switch (property()) {
                case "lokalizacja"  : comparator = Parking.LOKALIZACJA.comparator();   break;
                case "liczbaMiejsc" : comparator = Parking.LICZBA_MIEJSC.comparator(); break;
                default : throw new IllegalArgumentException(
                    "'" + property() + "' is not a valid Parking property."
                );
            }
            
            switch (direction()) {
                case "ASC"  : return comparator;
                case "DESC" : return comparator.reversed();
                default : throw new IllegalArgumentException(
                    "'" + direction() + "' is not a valid sort direction. " +
                    "Use either 'ASC' or 'DESC', or leave out."
                );
            }
        }
    }
}