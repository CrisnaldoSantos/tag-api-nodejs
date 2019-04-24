const schoolStructure = require('../model/SchoolStructure')

//cria um novo registro
exports.actionCreate = (request,response,next)=>{
    const register_type = request.body.register_type;
    const school_inep_id_fk = request.body.school_inep_id_fk;
    const operation_location_building = request.body.operation_location_building;
    const operation_location_temple = request.body.operation_location_temple;
    const operation_location_businness_room = request.body.operation_location_businness_room;
    const operation_location_instructor_house = request.body.operation_location_instructor_house;
    const operation_location_other_school_room = request.body.operation_location_other_school_room;
    const operation_location_barracks = request.body.operation_location_barracks;
    const operation_location_socioeducative_unity = request.body.operation_location_socioeducative_unity;
    const operation_location_prison_unity = request.body.operation_location_prison_unity;
    const operation_location_other = request.body.operation_location_other;
    const building_occupation_situation = request.body.building_occupation_situation;
    const shared_building_with_school = request.body.shared_building_with_school;
    const shared_school_inep_id_1 = request.body.shared_school_inep_id_1;
    const shared_school_inep_id_2 = request.body.shared_school_inep_id_2;
    const shared_school_inep_id_3 = request.body.shared_school_inep_id_3;
    const shared_school_inep_id_4 = request.body.shared_school_inep_id_4;
    const shared_school_inep_id_5 = request.body.shared_school_inep_id_5;
    const shared_school_inep_id_6 = request.body.shared_school_inep_id_6;
    const consumed_water_type = request.body.consumed_water_type;
    const water_supply_public = request.body.water_supply_public;
    const water_supply_artesian_well = request.body.water_supply_artesian_well;
    const water_supply_well = request.body.water_supply_well;
    const water_supply_river = request.body.water_supply_river;
    const water_supply_inexistent = request.body.water_supply_inexistent;
    const energy_supply_public = request.body.energy_supply_public;
    const energy_supply_generator = request.body.energy_supply_generator;
    const energy_supply_other = request.body.energy_supply_other;
    const energy_supply_inexistent = request.body.energy_supply_inexistent;
    const sewage_public = request.body.sewage_public;
    const sewage_fossa = request.body.sewage_fossa;
    const sewage_inexistent = request.body.sewage_inexistent;
    const garbage_destination_collect = request.body.garbage_destination_collect;
    const garbage_destination_burn = request.body.garbage_destination_burn;
    const garbage_destination_throw_away = request.body.garbage_destination_throw_away;
    const garbage_destination_recycle = request.body.garbage_destination_recycle;
    const garbage_destination_bury = request.body.garbage_destination_bury;
    const garbage_destination_other = request.body.garbage_destination_other;
    const dependencies_principal_room = request.body.dependencies_principal_room;
    const dependencies_instructors_room = request.body.dependencies_instructors_room;
    const dependencies_secretary_room = request.body.dependencies_secretary_room;
    const dependencies_info_lab = request.body.dependencies_info_lab;
    const dependencies_science_lab = request.body.dependencies_science_lab;
    const dependencies_aee_room = request.body.dependencies_aee_room;
    const dependencies_indoor_sports_court = request.body.dependencies_indoor_sports_court;
    const dependencies_outdoor_sports_court = request.body.dependencies_outdoor_sports_court;
    const dependencies_kitchen = request.body.dependencies_kitchen;
    const dependencies_library = request.body.dependencies_library;
    const dependencies_reading_room = request.body.dependencies_reading_room;
    const dependencies_playground = request.body.dependencies_playground;
    const dependencies_nursery = request.body.dependencies_nursery;
    const dependencies_outside_bathroom = request.body.dependencies_outside_bathroom;
    const dependencies_inside_bathroom = request.body.dependencies_inside_bathroom;
    const dependencies_child_bathroom = request.body.dependencies_child_bathroom;
    const dependencies_prysical_disability_bathroom = request.body.dependencies_prysical_disability_bathroom;
    const dependencies_physical_disability_support = request.body.dependencies_physical_disability_support;
    const dependencies_bathroom_with_shower = request.body.dependencies_bathroom_with_shower;
    const dependencies_refectory = request.body.dependencies_refectory;
    const dependencies_storeroom = request.body.dependencies_storeroom;
    const dependencies_warehouse = request.body.dependencies_warehouse;
    const dependencies_auditorium = request.body.dependencies_auditorium;
    const dependencies_covered_patio = request.body.dependencies_covered_patio;
    const dependencies_uncovered_patio = request.body.dependencies_uncovered_patio;
    const dependencies_student_accomodation = request.body.dependencies_student_accomodation;
    const dependencies_instructor_accomodation = request.body.dependencies_instructor_accomodation;
    const dependencies_green_area = request.body.dependencies_green_area;
    const dependencies_laundry = request.body.dependencies_laundry;
    const dependencies_none = request.body.dependencies_none;
    const classroom_count = request.body.classroom_count;
    const used_classroom_count = request.body.used_classroom_count;
    const equipments_tv = request.body.equipments_tv;
    const equipments_vcr = request.body.equipments_vcr;
    const equipments_dvd = request.body.equipments_dvd;
    const equipments_satellite_dish = request.body.equipments_satellite_dish;
    const equipments_copier = request.body.equipments_copier;
    const equipments_overhead_projector = request.body.equipments_overhead_projector;
    const equipments_printer = request.body.equipments_printer;
    const equipments_stereo_system = request.body.equipments_stereo_system;
    const equipments_data_show = request.body.equipments_data_show;
    const equipments_fax = request.body.equipments_fax;
    const equipments_camera = request.body.equipments_camera;
    const equipments_computer = request.body.equipments_computer;
    const equipments_multifunctional_printer = request.body.equipments_multifunctional_printer;
    const administrative_computers_count = request.body.administrative_computers_count;
    const student_computers_count = request.body.student_computers_count;
    const internet_access = request.body.internet_access;
    const bandwidth = request.body.bandwidth;
    const employees_count = request.body.employees_count;
    const feeding = request.body.feeding;
    const aee = request.body.aee;
    const complementary_activities = request.body.complementary_activities;
    const modalities_regular = request.body.modalities_regular;
    const modalities_especial = request.body.modalities_especial;
    const modalities_eja = request.body.modalities_eja;
    const modalities_professional = request.body.modalities_professional;
    const basic_education_cycle_organized = request.body.basic_education_cycle_organized;
    const different_location = request.body.different_location;
    const sociocultural_didactic_material_none = request.body.sociocultural_didactic_material_none;
    const sociocultural_didactic_material_quilombola = request.body.sociocultural_didactic_material_quilombola;
    const sociocultural_didactic_material_native = request.body.sociocultural_didactic_material_native;
    const native_education = request.body.native_education;
    const native_education_language_native = request.body.native_education_language_native;
    const native_education_language_portuguese = request.body.native_education_language_portuguese;
    const edcenso_native_languages_fk = request.body.edcenso_native_languages_fk;
    const brazil_literate = request.body.brazil_literate;
    const open_weekend = request.body.open_weekend;
    const pedagogical_formation_by_alternance = request.body.pedagogical_formation_by_alternance;

    schoolStructure.create({
        register_type:register_type,school_inep_id_fk:school_inep_id_fk,
        operation_location_building:operation_location_building,
        operation_location_temple: operation_location_temple,
        operation_location_businness_room:operation_location_businness_room,
        operation_location_instructor_house:operation_location_instructor_house,
        operation_location_other_school_room : operation_location_other_school_room,
        operation_location_barracks : operation_location_barracks,
        operation_location_socioeducative_unity : operation_location_socioeducative_unity,
        operation_location_prison_unity : operation_location_prison_unity,
        operation_location_other : operation_location_other,
        building_occupation_situation : building_occupation_situation,
        shared_building_with_school : shared_building_with_school,
        shared_school_inep_id_1 : shared_school_inep_id_1,
        shared_school_inep_id_2 : shared_school_inep_id_2,
        shared_school_inep_id_3 : shared_school_inep_id_3,
        shared_school_inep_id_4 : shared_school_inep_id_4,
        shared_school_inep_id_5 : shared_school_inep_id_5,
        shared_school_inep_id_6 : shared_school_inep_id_6,
        consumed_water_type : consumed_water_type,
        water_supply_public : water_supply_public,
        water_supply_artesian_well : water_supply_artesian_well,
        water_supply_well : water_supply_well,
        water_supply_river : water_supply_river,
        water_supply_inexistent : water_supply_inexistent,
        energy_supply_public : energy_supply_public,
        energy_supply_generator : energy_supply_generator,
        energy_supply_other : energy_supply_other,
        energy_supply_inexistent : energy_supply_inexistent,
        sewage_public : sewage_public,
        sewage_fossa : sewage_fossa,
        sewage_inexistent : sewage_inexistent,
        garbage_destination_collect : garbage_destination_collect,
        garbage_destination_burn : garbage_destination_burn,
        garbage_destination_throw_away : garbage_destination_throw_away,
        garbage_destination_recycle : garbage_destination_recycle,
        garbage_destination_bury : garbage_destination_bury,
        garbage_destination_other : garbage_destination_other,
        dependencies_principal_room : dependencies_principal_room,
        dependencies_instructors_room : dependencies_instructors_room,
        dependencies_secretary_room : dependencies_secretary_room,
        dependencies_info_lab : dependencies_info_lab,
        dependencies_science_lab : dependencies_science_lab,
        dependencies_aee_room : dependencies_aee_room,
        dependencies_indoor_sports_court : dependencies_indoor_sports_court,
        dependencies_outdoor_sports_court : dependencies_outdoor_sports_court,
        dependencies_kitchen : dependencies_kitchen,
        dependencies_library : dependencies_library,
        dependencies_reading_room : dependencies_reading_room,
        dependencies_playground : dependencies_playground,
        dependencies_nursery : dependencies_nursery,
        dependencies_outside_bathroom : dependencies_outside_bathroom,
        dependencies_inside_bathroom : dependencies_inside_bathroom,
        dependencies_child_bathroom : dependencies_child_bathroom,
        dependencies_prysical_disability_bathroom : dependencies_prysical_disability_bathroom,
        dependencies_physical_disability_support : dependencies_physical_disability_support,
        dependencies_bathroom_with_shower : dependencies_bathroom_with_shower,
        dependencies_refectory : dependencies_refectory,
        dependencies_storeroom : dependencies_storeroom,
        dependencies_warehouse : dependencies_warehouse,
        dependencies_auditorium : dependencies_auditorium,
        dependencies_covered_patio : dependencies_covered_patio,
        dependencies_uncovered_patio : dependencies_uncovered_patio,
        dependencies_student_accomodation : dependencies_student_accomodation,
        dependencies_instructor_accomodation : dependencies_instructor_accomodation,
        dependencies_green_area : dependencies_green_area,
        dependencies_laundry : dependencies_laundry,
        dependencies_none : dependencies_none,
        classroom_count : classroom_count,
        used_classroom_count : used_classroom_count,
        equipments_tv : equipments_tv,
        equipments_vcr : equipments_vcr,
        equipments_dvd : equipments_dvd,
        equipments_satellite_dish : equipments_satellite_dish,
        equipments_copier = equipments_copier,
        equipments_overhead_projector = equipments_overhead_projector,
        equipments_printer : equipments_printer,
        equipments_stereo_system : equipments_stereo_system,
        equipments_data_show : equipments_data_show,
        equipments_fax : equipments_fax,
        equipments_camera : equipments_camera,
        equipments_computer : equipments_computer,
        equipments_multifunctional_printer : equipments_multifunctional_printer,
        administrative_computers_count : administrative_computers_count,
        student_computers_count : student_computers_count,
        internet_access : internet_access,
        bandwidth : bandwidth,
        employees_count : employees_count,
        feeding : feeding,
        aee : aee,
        complementary_activities : complementary_activities,
        modalities_regular : modalities_regular,
        modalities_especial : modalities_especial,
        modalities_eja : modalities_eja,
        modalities_professional : modalities_professional,
        basic_education_cycle_organized : basic_education_cycle_organized,
        different_location : different_location,
        sociocultural_didactic_material_none : sociocultural_didactic_material_none,
        sociocultural_didactic_material_quilombola : sociocultural_didactic_material_quilombola,
        sociocultural_didactic_material_native : sociocultural_didactic_material_native,
        native_education : native_education,
        native_education_language_native : native_education_language_native,
        native_education_language_portuguese : native_education_language_portuguese,
        edcenso_native_languages_fk : edcenso_native_languages_fk,
        brazil_literate : brazil_literate,
        open_weekend : open_weekend,
        pedagogical_formation_by_alternance :pedagogical_formation_by_alternance
    }).then(()=>{
        response.status(201).send();
    }).catch(error=>next(error));

};

//Lista todos com parâmetro de paginação
exports.searchAll = (request, response, next) => {
    let limite = parseInt(request.query.limite || 0);
    let pagina = parseInt(request.query.pagina || 0);
  
    if (!Number.isInteger(limite) || !Number.isInteger(pagina)) {
      response.status(status.BAD_REQUEST).send();
    }
  
    const ITENS_POR_PAGINA = 10;
  
    limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
    pagina = pagina <= 0 ? 0 : pagina * limite;
  
    schoolStructure.findAll({ limit: limite, offset: pagina })
      .then(SchoolStructure => {
        response.send(SchoolStructure);
      })
      .catch(error => next(error));
  };

//Busca um único registro a partir de um inep_id
exports.search = (request, response, next) => {
    const school_inep_id_fk = request.params.inep_id;
  
    schoolStructure.findById(school_inep_id_fk)
      .then(SchoolStructure => {
        if (SchoolStructure) {
          response.status(status.OK).send(spoiler);
        } else {
          response.status(status.NOT_FOUND).send();
        }
      })
      .catch(error => next(error));
  };

  //Atualiza um registro com base no inep_id
  exports.update = (request, response, next) => {
    const school_inep_id_fk = request.params.inep_id;
    
    const register_type = request.body.register_type;
    const operation_location_building = request.body.operation_location_building;
    const operation_location_temple = request.body.operation_location_temple;
    const operation_location_businness_room = request.body.operation_location_businness_room;
    const operation_location_instructor_house = request.body.operation_location_instructor_house;
    const operation_location_other_school_room = request.body.operation_location_other_school_room;
    const operation_location_barracks = request.body.operation_location_barracks;
    const operation_location_socioeducative_unity = request.body.operation_location_socioeducative_unity;
    const operation_location_prison_unity = request.body.operation_location_prison_unity;
    const operation_location_other = request.body.operation_location_other;
    const building_occupation_situation = request.body.building_occupation_situation;
    const shared_building_with_school = request.body.shared_building_with_school;
    const shared_school_inep_id_1 = request.body.shared_school_inep_id_1;
    const shared_school_inep_id_2 = request.body.shared_school_inep_id_2;
    const shared_school_inep_id_3 = request.body.shared_school_inep_id_3;
    const shared_school_inep_id_4 = request.body.shared_school_inep_id_4;
    const shared_school_inep_id_5 = request.body.shared_school_inep_id_5;
    const shared_school_inep_id_6 = request.body.shared_school_inep_id_6;
    const consumed_water_type = request.body.consumed_water_type;
    const water_supply_public = request.body.water_supply_public;
    const water_supply_artesian_well = request.body.water_supply_artesian_well;
    const water_supply_well = request.body.water_supply_well;
    const water_supply_river = request.body.water_supply_river;
    const water_supply_inexistent = request.body.water_supply_inexistent;
    const energy_supply_public = request.body.energy_supply_public;
    const energy_supply_generator = request.body.energy_supply_generator;
    const energy_supply_other = request.body.energy_supply_other;
    const energy_supply_inexistent = request.body.energy_supply_inexistent;
    const sewage_public = request.body.sewage_public;
    const sewage_fossa = request.body.sewage_fossa;
    const sewage_inexistent = request.body.sewage_inexistent;
    const garbage_destination_collect = request.body.garbage_destination_collect;
    const garbage_destination_burn = request.body.garbage_destination_burn;
    const garbage_destination_throw_away = request.body.garbage_destination_throw_away;
    const garbage_destination_recycle = request.body.garbage_destination_recycle;
    const garbage_destination_bury = request.body.garbage_destination_bury;
    const garbage_destination_other = request.body.garbage_destination_other;
    const dependencies_principal_room = request.body.dependencies_principal_room;
    const dependencies_instructors_room = request.body.dependencies_instructors_room;
    const dependencies_secretary_room = request.body.dependencies_secretary_room;
    const dependencies_info_lab = request.body.dependencies_info_lab;
    const dependencies_science_lab = request.body.dependencies_science_lab;
    const dependencies_aee_room = request.body.dependencies_aee_room;
    const dependencies_indoor_sports_court = request.body.dependencies_indoor_sports_court;
    const dependencies_outdoor_sports_court = request.body.dependencies_outdoor_sports_court;
    const dependencies_kitchen = request.body.dependencies_kitchen;
    const dependencies_library = request.body.dependencies_library;
    const dependencies_reading_room = request.body.dependencies_reading_room;
    const dependencies_playground = request.body.dependencies_playground;
    const dependencies_nursery = request.body.dependencies_nursery;
    const dependencies_outside_bathroom = request.body.dependencies_outside_bathroom;
    const dependencies_inside_bathroom = request.body.dependencies_inside_bathroom;
    const dependencies_child_bathroom = request.body.dependencies_child_bathroom;
    const dependencies_prysical_disability_bathroom = request.body.dependencies_prysical_disability_bathroom;
    const dependencies_physical_disability_support = request.body.dependencies_physical_disability_support;
    const dependencies_bathroom_with_shower = request.body.dependencies_bathroom_with_shower;
    const dependencies_refectory = request.body.dependencies_refectory;
    const dependencies_storeroom = request.body.dependencies_storeroom;
    const dependencies_warehouse = request.body.dependencies_warehouse;
    const dependencies_auditorium = request.body.dependencies_auditorium;
    const dependencies_covered_patio = request.body.dependencies_covered_patio;
    const dependencies_uncovered_patio = request.body.dependencies_uncovered_patio;
    const dependencies_student_accomodation = request.body.dependencies_student_accomodation;
    const dependencies_instructor_accomodation = request.body.dependencies_instructor_accomodation;
    const dependencies_green_area = request.body.dependencies_green_area;
    const dependencies_laundry = request.body.dependencies_laundry;
    const dependencies_none = request.body.dependencies_none;
    const classroom_count = request.body.classroom_count;
    const used_classroom_count = request.body.used_classroom_count;
    const equipments_tv = request.body.equipments_tv;
    const equipments_vcr = request.body.equipments_vcr;
    const equipments_dvd = request.body.equipments_dvd;
    const equipments_satellite_dish = request.body.equipments_satellite_dish;
    const equipments_copier = request.body.equipments_copier;
    const equipments_overhead_projector = request.body.equipments_overhead_projector;
    const equipments_printer = request.body.equipments_printer;
    const equipments_stereo_system = request.body.equipments_stereo_system;
    const equipments_data_show = request.body.equipments_data_show;
    const equipments_fax = request.body.equipments_fax;
    const equipments_camera = request.body.equipments_camera;
    const equipments_computer = request.body.equipments_computer;
    const equipments_multifunctional_printer = request.body.equipments_multifunctional_printer;
    const administrative_computers_count = request.body.administrative_computers_count;
    const student_computers_count = request.body.student_computers_count;
    const internet_access = request.body.internet_access;
    const bandwidth = request.body.bandwidth;
    const employees_count = request.body.employees_count;
    const feeding = request.body.feeding;
    const aee = request.body.aee;
    const complementary_activities = request.body.complementary_activities;
    const modalities_regular = request.body.modalities_regular;
    const modalities_especial = request.body.modalities_especial;
    const modalities_eja = request.body.modalities_eja;
    const modalities_professional = request.body.modalities_professional;
    const basic_education_cycle_organized = request.body.basic_education_cycle_organized;
    const different_location = request.body.different_location;
    const sociocultural_didactic_material_none = request.body.sociocultural_didactic_material_none;
    const sociocultural_didactic_material_quilombola = request.body.sociocultural_didactic_material_quilombola;
    const sociocultural_didactic_material_native = request.body.sociocultural_didactic_material_native;
    const native_education = request.body.native_education;
    const native_education_language_native = request.body.native_education_language_native;
    const native_education_language_portuguese = request.body.native_education_language_portuguese;
    const edcenso_native_languages_fk = request.body.edcenso_native_languages_fk;
    const brazil_literate = request.body.brazil_literate;
    const open_weekend = request.body.open_weekend;
    const pedagogical_formation_by_alternance = request.body.pedagogical_formation_by_alternance;
    
    schoolStructure.findById(school_inep_id_fk)
      .then(SchoolStructure => {
        if (SchoolStructure) {
            schoolStructure.update(
            {
                register_type:register_type,
                operation_location_building:operation_location_building,
                operation_location_temple: operation_location_temple,
                operation_location_businness_room:operation_location_businness_room,
                operation_location_instructor_house:operation_location_instructor_house,
                operation_location_other_school_room : operation_location_other_school_room,
                operation_location_barracks : operation_location_barracks,
                operation_location_socioeducative_unity : operation_location_socioeducative_unity,
                operation_location_prison_unity : operation_location_prison_unity,
                operation_location_other : operation_location_other,
                building_occupation_situation : building_occupation_situation,
                shared_building_with_school : shared_building_with_school,
                shared_school_inep_id_1 : shared_school_inep_id_1,
                shared_school_inep_id_2 : shared_school_inep_id_2,
                shared_school_inep_id_3 : shared_school_inep_id_3,
                shared_school_inep_id_4 : shared_school_inep_id_4,
                shared_school_inep_id_5 : shared_school_inep_id_5,
                shared_school_inep_id_6 : shared_school_inep_id_6,
                consumed_water_type : consumed_water_type,
                water_supply_public : water_supply_public,
                water_supply_artesian_well : water_supply_artesian_well,
                water_supply_well : water_supply_well,
                water_supply_river : water_supply_river,
                water_supply_inexistent : water_supply_inexistent,
                energy_supply_public : energy_supply_public,
                energy_supply_generator : energy_supply_generator,
                energy_supply_other : energy_supply_other,
                energy_supply_inexistent : energy_supply_inexistent,
                sewage_public : sewage_public,
                sewage_fossa : sewage_fossa,
                sewage_inexistent : sewage_inexistent,
                garbage_destination_collect : garbage_destination_collect,
                garbage_destination_burn : garbage_destination_burn,
                garbage_destination_throw_away : garbage_destination_throw_away,
                garbage_destination_recycle : garbage_destination_recycle,
                garbage_destination_bury : garbage_destination_bury,
                garbage_destination_other : garbage_destination_other,
                dependencies_principal_room : dependencies_principal_room,
                dependencies_instructors_room : dependencies_instructors_room,
                dependencies_secretary_room : dependencies_secretary_room,
                dependencies_info_lab : dependencies_info_lab,
                dependencies_science_lab : dependencies_science_lab,
                dependencies_aee_room : dependencies_aee_room,
                dependencies_indoor_sports_court : dependencies_indoor_sports_court,
                dependencies_outdoor_sports_court : dependencies_outdoor_sports_court,
                dependencies_kitchen : dependencies_kitchen,
                dependencies_library : dependencies_library,
                dependencies_reading_room : dependencies_reading_room,
                dependencies_playground : dependencies_playground,
                dependencies_nursery : dependencies_nursery,
                dependencies_outside_bathroom : dependencies_outside_bathroom,
                dependencies_inside_bathroom : dependencies_inside_bathroom,
                dependencies_child_bathroom : dependencies_child_bathroom,
                dependencies_prysical_disability_bathroom : dependencies_prysical_disability_bathroom,
                dependencies_physical_disability_support : dependencies_physical_disability_support,
                dependencies_bathroom_with_shower : dependencies_bathroom_with_shower,
                dependencies_refectory : dependencies_refectory,
                dependencies_storeroom : dependencies_storeroom,
                dependencies_warehouse : dependencies_warehouse,
                dependencies_auditorium : dependencies_auditorium,
                dependencies_covered_patio : dependencies_covered_patio,
                dependencies_uncovered_patio : dependencies_uncovered_patio,
                dependencies_student_accomodation : dependencies_student_accomodation,
                dependencies_instructor_accomodation : dependencies_instructor_accomodation,
                dependencies_green_area : dependencies_green_area,
                dependencies_laundry : dependencies_laundry,
                dependencies_none : dependencies_none,
                classroom_count : classroom_count,
                used_classroom_count : used_classroom_count,
                equipments_tv : equipments_tv,
                equipments_vcr : equipments_vcr,
                equipments_dvd : equipments_dvd,
                equipments_satellite_dish : equipments_satellite_dish,
                equipments_copier = equipments_copier,
                equipments_overhead_projector = equipments_overhead_projector,
                equipments_printer : equipments_printer,
                equipments_stereo_system : equipments_stereo_system,
                equipments_data_show : equipments_data_show,
                equipments_fax : equipments_fax,
                equipments_camera : equipments_camera,
                equipments_computer : equipments_computer,
                equipments_multifunctional_printer : equipments_multifunctional_printer,
                administrative_computers_count : administrative_computers_count,
                student_computers_count : student_computers_count,
                internet_access : internet_access,
                bandwidth : bandwidth,
                employees_count : employees_count,
                feeding : feeding,
                aee : aee,
                complementary_activities : complementary_activities,
                modalities_regular : modalities_regular,
                modalities_especial : modalities_especial,
                modalities_eja : modalities_eja,
                modalities_professional : modalities_professional,
                basic_education_cycle_organized : basic_education_cycle_organized,
                different_location : different_location,
                sociocultural_didactic_material_none : sociocultural_didactic_material_none,
                sociocultural_didactic_material_quilombola : sociocultural_didactic_material_quilombola,
                sociocultural_didactic_material_native : sociocultural_didactic_material_native,
                native_education : native_education,
                native_education_language_native : native_education_language_native,
                native_education_language_portuguese : native_education_language_portuguese,
                edcenso_native_languages_fk : edcenso_native_languages_fk,
                brazil_literate : brazil_literate,
                open_weekend : open_weekend,
                pedagogical_formation_by_alternance :pedagogical_formation_by_alternance
            },
            { where: { inep_id: inep_id } }
          )
            .then(() => {
              response.status(status.OK).send();
            })
            .catch(error => next(error));
        } else {
          response.status(status.NOT_FOUND).send();
        }
      })
      .catch(error => next(error));
  };

//Exclui um registro com base no inep_id
  exports.delete = (request, response, next) => {
    const school_inep_id_fk = request.params.inep_id;
  
    schoolStructure.findById(id)
      .then(SchoolStructure => {
        if (SchoolStructure) {
        schoolStructure.destroy({
            where: { school_inep_id_fk: school_inep_id_fk }
          })
            .then(() => {
              response.status(status.OK).send();
            })
            .catch(error => next(error));
        } else {
          response.status(status.NOT_FOUND).send();
        }
      })
      .catch(error => next(error));
  };