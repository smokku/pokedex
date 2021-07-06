/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilityAggregateModel, PokemonV2AbilityAggregateModelType } from "./PokemonV2AbilityAggregateModel"
import { PokemonV2AbilityAggregateModelSelector } from "./PokemonV2AbilityAggregateModel.base"
import { PokemonV2AbilityModel, PokemonV2AbilityModelType } from "./PokemonV2AbilityModel"
import { PokemonV2AbilityModelSelector } from "./PokemonV2AbilityModel.base"
import { PokemonV2AbilitychangeAggregateModel, PokemonV2AbilitychangeAggregateModelType } from "./PokemonV2AbilitychangeAggregateModel"
import { PokemonV2AbilitychangeAggregateModelSelector } from "./PokemonV2AbilitychangeAggregateModel.base"
import { PokemonV2AbilitychangeModel, PokemonV2AbilitychangeModelType } from "./PokemonV2AbilitychangeModel"
import { PokemonV2AbilitychangeModelSelector } from "./PokemonV2AbilitychangeModel.base"
import { PokemonV2AbilitychangeeffecttextAggregateModel, PokemonV2AbilitychangeeffecttextAggregateModelType } from "./PokemonV2AbilitychangeeffecttextAggregateModel"
import { PokemonV2AbilitychangeeffecttextAggregateModelSelector } from "./PokemonV2AbilitychangeeffecttextAggregateModel.base"
import { PokemonV2AbilitychangeeffecttextModel, PokemonV2AbilitychangeeffecttextModelType } from "./PokemonV2AbilitychangeeffecttextModel"
import { PokemonV2AbilitychangeeffecttextModelSelector } from "./PokemonV2AbilitychangeeffecttextModel.base"
import { PokemonV2AbilityeffecttextAggregateModel, PokemonV2AbilityeffecttextAggregateModelType } from "./PokemonV2AbilityeffecttextAggregateModel"
import { PokemonV2AbilityeffecttextAggregateModelSelector } from "./PokemonV2AbilityeffecttextAggregateModel.base"
import { PokemonV2AbilityeffecttextModel, PokemonV2AbilityeffecttextModelType } from "./PokemonV2AbilityeffecttextModel"
import { PokemonV2AbilityeffecttextModelSelector } from "./PokemonV2AbilityeffecttextModel.base"
import { PokemonV2AbilityflavortextAggregateModel, PokemonV2AbilityflavortextAggregateModelType } from "./PokemonV2AbilityflavortextAggregateModel"
import { PokemonV2AbilityflavortextAggregateModelSelector } from "./PokemonV2AbilityflavortextAggregateModel.base"
import { PokemonV2AbilityflavortextModel, PokemonV2AbilityflavortextModelType } from "./PokemonV2AbilityflavortextModel"
import { PokemonV2AbilityflavortextModelSelector } from "./PokemonV2AbilityflavortextModel.base"
import { PokemonV2AbilitynameAggregateModel, PokemonV2AbilitynameAggregateModelType } from "./PokemonV2AbilitynameAggregateModel"
import { PokemonV2AbilitynameAggregateModelSelector } from "./PokemonV2AbilitynameAggregateModel.base"
import { PokemonV2AbilitynameModel, PokemonV2AbilitynameModelType } from "./PokemonV2AbilitynameModel"
import { PokemonV2AbilitynameModelSelector } from "./PokemonV2AbilitynameModel.base"
import { PokemonV2BerryAggregateModel, PokemonV2BerryAggregateModelType } from "./PokemonV2BerryAggregateModel"
import { PokemonV2BerryAggregateModelSelector } from "./PokemonV2BerryAggregateModel.base"
import { PokemonV2BerryModel, PokemonV2BerryModelType } from "./PokemonV2BerryModel"
import { PokemonV2BerryModelSelector } from "./PokemonV2BerryModel.base"
import { PokemonV2BerryfirmnessAggregateModel, PokemonV2BerryfirmnessAggregateModelType } from "./PokemonV2BerryfirmnessAggregateModel"
import { PokemonV2BerryfirmnessAggregateModelSelector } from "./PokemonV2BerryfirmnessAggregateModel.base"
import { PokemonV2BerryfirmnessModel, PokemonV2BerryfirmnessModelType } from "./PokemonV2BerryfirmnessModel"
import { PokemonV2BerryfirmnessModelSelector } from "./PokemonV2BerryfirmnessModel.base"
import { PokemonV2BerryfirmnessnameAggregateModel, PokemonV2BerryfirmnessnameAggregateModelType } from "./PokemonV2BerryfirmnessnameAggregateModel"
import { PokemonV2BerryfirmnessnameAggregateModelSelector } from "./PokemonV2BerryfirmnessnameAggregateModel.base"
import { PokemonV2BerryfirmnessnameModel, PokemonV2BerryfirmnessnameModelType } from "./PokemonV2BerryfirmnessnameModel"
import { PokemonV2BerryfirmnessnameModelSelector } from "./PokemonV2BerryfirmnessnameModel.base"
import { PokemonV2BerryflavorAggregateModel, PokemonV2BerryflavorAggregateModelType } from "./PokemonV2BerryflavorAggregateModel"
import { PokemonV2BerryflavorAggregateModelSelector } from "./PokemonV2BerryflavorAggregateModel.base"
import { PokemonV2BerryflavorModel, PokemonV2BerryflavorModelType } from "./PokemonV2BerryflavorModel"
import { PokemonV2BerryflavorModelSelector } from "./PokemonV2BerryflavorModel.base"
import { PokemonV2BerryflavormapAggregateModel, PokemonV2BerryflavormapAggregateModelType } from "./PokemonV2BerryflavormapAggregateModel"
import { PokemonV2BerryflavormapAggregateModelSelector } from "./PokemonV2BerryflavormapAggregateModel.base"
import { PokemonV2BerryflavormapModel, PokemonV2BerryflavormapModelType } from "./PokemonV2BerryflavormapModel"
import { PokemonV2BerryflavormapModelSelector } from "./PokemonV2BerryflavormapModel.base"
import { PokemonV2BerryflavornameAggregateModel, PokemonV2BerryflavornameAggregateModelType } from "./PokemonV2BerryflavornameAggregateModel"
import { PokemonV2BerryflavornameAggregateModelSelector } from "./PokemonV2BerryflavornameAggregateModel.base"
import { PokemonV2BerryflavornameModel, PokemonV2BerryflavornameModelType } from "./PokemonV2BerryflavornameModel"
import { PokemonV2BerryflavornameModelSelector } from "./PokemonV2BerryflavornameModel.base"
import { PokemonV2CharacteristicAggregateModel, PokemonV2CharacteristicAggregateModelType } from "./PokemonV2CharacteristicAggregateModel"
import { PokemonV2CharacteristicAggregateModelSelector } from "./PokemonV2CharacteristicAggregateModel.base"
import { PokemonV2CharacteristicModel, PokemonV2CharacteristicModelType } from "./PokemonV2CharacteristicModel"
import { PokemonV2CharacteristicModelSelector } from "./PokemonV2CharacteristicModel.base"
import { PokemonV2CharacteristicdescriptionAggregateModel, PokemonV2CharacteristicdescriptionAggregateModelType } from "./PokemonV2CharacteristicdescriptionAggregateModel"
import { PokemonV2CharacteristicdescriptionAggregateModelSelector } from "./PokemonV2CharacteristicdescriptionAggregateModel.base"
import { PokemonV2CharacteristicdescriptionModel, PokemonV2CharacteristicdescriptionModelType } from "./PokemonV2CharacteristicdescriptionModel"
import { PokemonV2CharacteristicdescriptionModelSelector } from "./PokemonV2CharacteristicdescriptionModel.base"
import { PokemonV2ContestcomboAggregateModel, PokemonV2ContestcomboAggregateModelType } from "./PokemonV2ContestcomboAggregateModel"
import { PokemonV2ContestcomboAggregateModelSelector } from "./PokemonV2ContestcomboAggregateModel.base"
import { PokemonV2ContestcomboModel, PokemonV2ContestcomboModelType } from "./PokemonV2ContestcomboModel"
import { PokemonV2ContestcomboModelSelector } from "./PokemonV2ContestcomboModel.base"
import { PokemonV2ContesteffectAggregateModel, PokemonV2ContesteffectAggregateModelType } from "./PokemonV2ContesteffectAggregateModel"
import { PokemonV2ContesteffectAggregateModelSelector } from "./PokemonV2ContesteffectAggregateModel.base"
import { PokemonV2ContesteffectModel, PokemonV2ContesteffectModelType } from "./PokemonV2ContesteffectModel"
import { PokemonV2ContesteffectModelSelector } from "./PokemonV2ContesteffectModel.base"
import { PokemonV2ContesteffecteffecttextAggregateModel, PokemonV2ContesteffecteffecttextAggregateModelType } from "./PokemonV2ContesteffecteffecttextAggregateModel"
import { PokemonV2ContesteffecteffecttextAggregateModelSelector } from "./PokemonV2ContesteffecteffecttextAggregateModel.base"
import { PokemonV2ContesteffecteffecttextModel, PokemonV2ContesteffecteffecttextModelType } from "./PokemonV2ContesteffecteffecttextModel"
import { PokemonV2ContesteffecteffecttextModelSelector } from "./PokemonV2ContesteffecteffecttextModel.base"
import { PokemonV2ContesteffectflavortextAggregateModel, PokemonV2ContesteffectflavortextAggregateModelType } from "./PokemonV2ContesteffectflavortextAggregateModel"
import { PokemonV2ContesteffectflavortextAggregateModelSelector } from "./PokemonV2ContesteffectflavortextAggregateModel.base"
import { PokemonV2ContesteffectflavortextModel, PokemonV2ContesteffectflavortextModelType } from "./PokemonV2ContesteffectflavortextModel"
import { PokemonV2ContesteffectflavortextModelSelector } from "./PokemonV2ContesteffectflavortextModel.base"
import { PokemonV2ContesttypeAggregateModel, PokemonV2ContesttypeAggregateModelType } from "./PokemonV2ContesttypeAggregateModel"
import { PokemonV2ContesttypeAggregateModelSelector } from "./PokemonV2ContesttypeAggregateModel.base"
import { PokemonV2ContesttypeModel, PokemonV2ContesttypeModelType } from "./PokemonV2ContesttypeModel"
import { PokemonV2ContesttypeModelSelector } from "./PokemonV2ContesttypeModel.base"
import { PokemonV2ContesttypenameAggregateModel, PokemonV2ContesttypenameAggregateModelType } from "./PokemonV2ContesttypenameAggregateModel"
import { PokemonV2ContesttypenameAggregateModelSelector } from "./PokemonV2ContesttypenameAggregateModel.base"
import { PokemonV2ContesttypenameModel, PokemonV2ContesttypenameModelType } from "./PokemonV2ContesttypenameModel"
import { PokemonV2ContesttypenameModelSelector } from "./PokemonV2ContesttypenameModel.base"
import { PokemonV2EgggroupAggregateModel, PokemonV2EgggroupAggregateModelType } from "./PokemonV2EgggroupAggregateModel"
import { PokemonV2EgggroupAggregateModelSelector } from "./PokemonV2EgggroupAggregateModel.base"
import { PokemonV2EgggroupModel, PokemonV2EgggroupModelType } from "./PokemonV2EgggroupModel"
import { PokemonV2EgggroupModelSelector } from "./PokemonV2EgggroupModel.base"
import { PokemonV2EgggroupnameAggregateModel, PokemonV2EgggroupnameAggregateModelType } from "./PokemonV2EgggroupnameAggregateModel"
import { PokemonV2EgggroupnameAggregateModelSelector } from "./PokemonV2EgggroupnameAggregateModel.base"
import { PokemonV2EgggroupnameModel, PokemonV2EgggroupnameModelType } from "./PokemonV2EgggroupnameModel"
import { PokemonV2EgggroupnameModelSelector } from "./PokemonV2EgggroupnameModel.base"
import { PokemonV2EncounterAggregateModel, PokemonV2EncounterAggregateModelType } from "./PokemonV2EncounterAggregateModel"
import { PokemonV2EncounterAggregateModelSelector } from "./PokemonV2EncounterAggregateModel.base"
import { PokemonV2EncounterModel, PokemonV2EncounterModelType } from "./PokemonV2EncounterModel"
import { PokemonV2EncounterModelSelector } from "./PokemonV2EncounterModel.base"
import { PokemonV2EncounterconditionAggregateModel, PokemonV2EncounterconditionAggregateModelType } from "./PokemonV2EncounterconditionAggregateModel"
import { PokemonV2EncounterconditionAggregateModelSelector } from "./PokemonV2EncounterconditionAggregateModel.base"
import { PokemonV2EncounterconditionModel, PokemonV2EncounterconditionModelType } from "./PokemonV2EncounterconditionModel"
import { PokemonV2EncounterconditionModelSelector } from "./PokemonV2EncounterconditionModel.base"
import { PokemonV2EncounterconditionnameAggregateModel, PokemonV2EncounterconditionnameAggregateModelType } from "./PokemonV2EncounterconditionnameAggregateModel"
import { PokemonV2EncounterconditionnameAggregateModelSelector } from "./PokemonV2EncounterconditionnameAggregateModel.base"
import { PokemonV2EncounterconditionnameModel, PokemonV2EncounterconditionnameModelType } from "./PokemonV2EncounterconditionnameModel"
import { PokemonV2EncounterconditionnameModelSelector } from "./PokemonV2EncounterconditionnameModel.base"
import { PokemonV2EncounterconditionvalueAggregateModel, PokemonV2EncounterconditionvalueAggregateModelType } from "./PokemonV2EncounterconditionvalueAggregateModel"
import { PokemonV2EncounterconditionvalueAggregateModelSelector } from "./PokemonV2EncounterconditionvalueAggregateModel.base"
import { PokemonV2EncounterconditionvalueModel, PokemonV2EncounterconditionvalueModelType } from "./PokemonV2EncounterconditionvalueModel"
import { PokemonV2EncounterconditionvalueModelSelector } from "./PokemonV2EncounterconditionvalueModel.base"
import { PokemonV2EncounterconditionvaluemapAggregateModel, PokemonV2EncounterconditionvaluemapAggregateModelType } from "./PokemonV2EncounterconditionvaluemapAggregateModel"
import { PokemonV2EncounterconditionvaluemapAggregateModelSelector } from "./PokemonV2EncounterconditionvaluemapAggregateModel.base"
import { PokemonV2EncounterconditionvaluemapModel, PokemonV2EncounterconditionvaluemapModelType } from "./PokemonV2EncounterconditionvaluemapModel"
import { PokemonV2EncounterconditionvaluemapModelSelector } from "./PokemonV2EncounterconditionvaluemapModel.base"
import { PokemonV2EncounterconditionvaluenameAggregateModel, PokemonV2EncounterconditionvaluenameAggregateModelType } from "./PokemonV2EncounterconditionvaluenameAggregateModel"
import { PokemonV2EncounterconditionvaluenameAggregateModelSelector } from "./PokemonV2EncounterconditionvaluenameAggregateModel.base"
import { PokemonV2EncounterconditionvaluenameModel, PokemonV2EncounterconditionvaluenameModelType } from "./PokemonV2EncounterconditionvaluenameModel"
import { PokemonV2EncounterconditionvaluenameModelSelector } from "./PokemonV2EncounterconditionvaluenameModel.base"
import { PokemonV2EncountermethodAggregateModel, PokemonV2EncountermethodAggregateModelType } from "./PokemonV2EncountermethodAggregateModel"
import { PokemonV2EncountermethodAggregateModelSelector } from "./PokemonV2EncountermethodAggregateModel.base"
import { PokemonV2EncountermethodModel, PokemonV2EncountermethodModelType } from "./PokemonV2EncountermethodModel"
import { PokemonV2EncountermethodModelSelector } from "./PokemonV2EncountermethodModel.base"
import { PokemonV2EncountermethodnameAggregateModel, PokemonV2EncountermethodnameAggregateModelType } from "./PokemonV2EncountermethodnameAggregateModel"
import { PokemonV2EncountermethodnameAggregateModelSelector } from "./PokemonV2EncountermethodnameAggregateModel.base"
import { PokemonV2EncountermethodnameModel, PokemonV2EncountermethodnameModelType } from "./PokemonV2EncountermethodnameModel"
import { PokemonV2EncountermethodnameModelSelector } from "./PokemonV2EncountermethodnameModel.base"
import { PokemonV2EncounterslotAggregateModel, PokemonV2EncounterslotAggregateModelType } from "./PokemonV2EncounterslotAggregateModel"
import { PokemonV2EncounterslotAggregateModelSelector } from "./PokemonV2EncounterslotAggregateModel.base"
import { PokemonV2EncounterslotModel, PokemonV2EncounterslotModelType } from "./PokemonV2EncounterslotModel"
import { PokemonV2EncounterslotModelSelector } from "./PokemonV2EncounterslotModel.base"
import { PokemonV2EvolutionchainAggregateModel, PokemonV2EvolutionchainAggregateModelType } from "./PokemonV2EvolutionchainAggregateModel"
import { PokemonV2EvolutionchainAggregateModelSelector } from "./PokemonV2EvolutionchainAggregateModel.base"
import { PokemonV2EvolutionchainModel, PokemonV2EvolutionchainModelType } from "./PokemonV2EvolutionchainModel"
import { PokemonV2EvolutionchainModelSelector } from "./PokemonV2EvolutionchainModel.base"
import { PokemonV2EvolutiontriggerAggregateModel, PokemonV2EvolutiontriggerAggregateModelType } from "./PokemonV2EvolutiontriggerAggregateModel"
import { PokemonV2EvolutiontriggerAggregateModelSelector } from "./PokemonV2EvolutiontriggerAggregateModel.base"
import { PokemonV2EvolutiontriggerModel, PokemonV2EvolutiontriggerModelType } from "./PokemonV2EvolutiontriggerModel"
import { PokemonV2EvolutiontriggerModelSelector } from "./PokemonV2EvolutiontriggerModel.base"
import { PokemonV2EvolutiontriggernameAggregateModel, PokemonV2EvolutiontriggernameAggregateModelType } from "./PokemonV2EvolutiontriggernameAggregateModel"
import { PokemonV2EvolutiontriggernameAggregateModelSelector } from "./PokemonV2EvolutiontriggernameAggregateModel.base"
import { PokemonV2EvolutiontriggernameModel, PokemonV2EvolutiontriggernameModelType } from "./PokemonV2EvolutiontriggernameModel"
import { PokemonV2EvolutiontriggernameModelSelector } from "./PokemonV2EvolutiontriggernameModel.base"
import { PokemonV2ExperienceAggregateModel, PokemonV2ExperienceAggregateModelType } from "./PokemonV2ExperienceAggregateModel"
import { PokemonV2ExperienceAggregateModelSelector } from "./PokemonV2ExperienceAggregateModel.base"
import { PokemonV2ExperienceModel, PokemonV2ExperienceModelType } from "./PokemonV2ExperienceModel"
import { PokemonV2ExperienceModelSelector } from "./PokemonV2ExperienceModel.base"
import { PokemonV2GenderAggregateModel, PokemonV2GenderAggregateModelType } from "./PokemonV2GenderAggregateModel"
import { PokemonV2GenderAggregateModelSelector } from "./PokemonV2GenderAggregateModel.base"
import { PokemonV2GenderModel, PokemonV2GenderModelType } from "./PokemonV2GenderModel"
import { PokemonV2GenderModelSelector } from "./PokemonV2GenderModel.base"
import { PokemonV2GenerationAggregateModel, PokemonV2GenerationAggregateModelType } from "./PokemonV2GenerationAggregateModel"
import { PokemonV2GenerationAggregateModelSelector } from "./PokemonV2GenerationAggregateModel.base"
import { PokemonV2GenerationModel, PokemonV2GenerationModelType } from "./PokemonV2GenerationModel"
import { PokemonV2GenerationModelSelector } from "./PokemonV2GenerationModel.base"
import { PokemonV2GenerationnameAggregateModel, PokemonV2GenerationnameAggregateModelType } from "./PokemonV2GenerationnameAggregateModel"
import { PokemonV2GenerationnameAggregateModelSelector } from "./PokemonV2GenerationnameAggregateModel.base"
import { PokemonV2GenerationnameModel, PokemonV2GenerationnameModelType } from "./PokemonV2GenerationnameModel"
import { PokemonV2GenerationnameModelSelector } from "./PokemonV2GenerationnameModel.base"
import { PokemonV2GrowthrateAggregateModel, PokemonV2GrowthrateAggregateModelType } from "./PokemonV2GrowthrateAggregateModel"
import { PokemonV2GrowthrateAggregateModelSelector } from "./PokemonV2GrowthrateAggregateModel.base"
import { PokemonV2GrowthrateModel, PokemonV2GrowthrateModelType } from "./PokemonV2GrowthrateModel"
import { PokemonV2GrowthrateModelSelector } from "./PokemonV2GrowthrateModel.base"
import { PokemonV2GrowthratedescriptionAggregateModel, PokemonV2GrowthratedescriptionAggregateModelType } from "./PokemonV2GrowthratedescriptionAggregateModel"
import { PokemonV2GrowthratedescriptionAggregateModelSelector } from "./PokemonV2GrowthratedescriptionAggregateModel.base"
import { PokemonV2GrowthratedescriptionModel, PokemonV2GrowthratedescriptionModelType } from "./PokemonV2GrowthratedescriptionModel"
import { PokemonV2GrowthratedescriptionModelSelector } from "./PokemonV2GrowthratedescriptionModel.base"
import { PokemonV2ItemAggregateModel, PokemonV2ItemAggregateModelType } from "./PokemonV2ItemAggregateModel"
import { PokemonV2ItemAggregateModelSelector } from "./PokemonV2ItemAggregateModel.base"
import { PokemonV2ItemModel, PokemonV2ItemModelType } from "./PokemonV2ItemModel"
import { PokemonV2ItemModelSelector } from "./PokemonV2ItemModel.base"
import { PokemonV2ItemattributeAggregateModel, PokemonV2ItemattributeAggregateModelType } from "./PokemonV2ItemattributeAggregateModel"
import { PokemonV2ItemattributeAggregateModelSelector } from "./PokemonV2ItemattributeAggregateModel.base"
import { PokemonV2ItemattributeModel, PokemonV2ItemattributeModelType } from "./PokemonV2ItemattributeModel"
import { PokemonV2ItemattributeModelSelector } from "./PokemonV2ItemattributeModel.base"
import { PokemonV2ItemattributedescriptionAggregateModel, PokemonV2ItemattributedescriptionAggregateModelType } from "./PokemonV2ItemattributedescriptionAggregateModel"
import { PokemonV2ItemattributedescriptionAggregateModelSelector } from "./PokemonV2ItemattributedescriptionAggregateModel.base"
import { PokemonV2ItemattributedescriptionModel, PokemonV2ItemattributedescriptionModelType } from "./PokemonV2ItemattributedescriptionModel"
import { PokemonV2ItemattributedescriptionModelSelector } from "./PokemonV2ItemattributedescriptionModel.base"
import { PokemonV2ItemattributemapAggregateModel, PokemonV2ItemattributemapAggregateModelType } from "./PokemonV2ItemattributemapAggregateModel"
import { PokemonV2ItemattributemapAggregateModelSelector } from "./PokemonV2ItemattributemapAggregateModel.base"
import { PokemonV2ItemattributemapModel, PokemonV2ItemattributemapModelType } from "./PokemonV2ItemattributemapModel"
import { PokemonV2ItemattributemapModelSelector } from "./PokemonV2ItemattributemapModel.base"
import { PokemonV2ItemattributenameAggregateModel, PokemonV2ItemattributenameAggregateModelType } from "./PokemonV2ItemattributenameAggregateModel"
import { PokemonV2ItemattributenameAggregateModelSelector } from "./PokemonV2ItemattributenameAggregateModel.base"
import { PokemonV2ItemattributenameModel, PokemonV2ItemattributenameModelType } from "./PokemonV2ItemattributenameModel"
import { PokemonV2ItemattributenameModelSelector } from "./PokemonV2ItemattributenameModel.base"
import { PokemonV2ItemcategoryAggregateModel, PokemonV2ItemcategoryAggregateModelType } from "./PokemonV2ItemcategoryAggregateModel"
import { PokemonV2ItemcategoryAggregateModelSelector } from "./PokemonV2ItemcategoryAggregateModel.base"
import { PokemonV2ItemcategoryModel, PokemonV2ItemcategoryModelType } from "./PokemonV2ItemcategoryModel"
import { PokemonV2ItemcategoryModelSelector } from "./PokemonV2ItemcategoryModel.base"
import { PokemonV2ItemcategorynameAggregateModel, PokemonV2ItemcategorynameAggregateModelType } from "./PokemonV2ItemcategorynameAggregateModel"
import { PokemonV2ItemcategorynameAggregateModelSelector } from "./PokemonV2ItemcategorynameAggregateModel.base"
import { PokemonV2ItemcategorynameModel, PokemonV2ItemcategorynameModelType } from "./PokemonV2ItemcategorynameModel"
import { PokemonV2ItemcategorynameModelSelector } from "./PokemonV2ItemcategorynameModel.base"
import { PokemonV2ItemeffecttextAggregateModel, PokemonV2ItemeffecttextAggregateModelType } from "./PokemonV2ItemeffecttextAggregateModel"
import { PokemonV2ItemeffecttextAggregateModelSelector } from "./PokemonV2ItemeffecttextAggregateModel.base"
import { PokemonV2ItemeffecttextModel, PokemonV2ItemeffecttextModelType } from "./PokemonV2ItemeffecttextModel"
import { PokemonV2ItemeffecttextModelSelector } from "./PokemonV2ItemeffecttextModel.base"
import { PokemonV2ItemflavortextAggregateModel, PokemonV2ItemflavortextAggregateModelType } from "./PokemonV2ItemflavortextAggregateModel"
import { PokemonV2ItemflavortextAggregateModelSelector } from "./PokemonV2ItemflavortextAggregateModel.base"
import { PokemonV2ItemflavortextModel, PokemonV2ItemflavortextModelType } from "./PokemonV2ItemflavortextModel"
import { PokemonV2ItemflavortextModelSelector } from "./PokemonV2ItemflavortextModel.base"
import { PokemonV2ItemflingeffectAggregateModel, PokemonV2ItemflingeffectAggregateModelType } from "./PokemonV2ItemflingeffectAggregateModel"
import { PokemonV2ItemflingeffectAggregateModelSelector } from "./PokemonV2ItemflingeffectAggregateModel.base"
import { PokemonV2ItemflingeffectModel, PokemonV2ItemflingeffectModelType } from "./PokemonV2ItemflingeffectModel"
import { PokemonV2ItemflingeffectModelSelector } from "./PokemonV2ItemflingeffectModel.base"
import { PokemonV2ItemflingeffecteffecttextAggregateModel, PokemonV2ItemflingeffecteffecttextAggregateModelType } from "./PokemonV2ItemflingeffecteffecttextAggregateModel"
import { PokemonV2ItemflingeffecteffecttextAggregateModelSelector } from "./PokemonV2ItemflingeffecteffecttextAggregateModel.base"
import { PokemonV2ItemflingeffecteffecttextModel, PokemonV2ItemflingeffecteffecttextModelType } from "./PokemonV2ItemflingeffecteffecttextModel"
import { PokemonV2ItemflingeffecteffecttextModelSelector } from "./PokemonV2ItemflingeffecteffecttextModel.base"
import { PokemonV2ItemgameindexAggregateModel, PokemonV2ItemgameindexAggregateModelType } from "./PokemonV2ItemgameindexAggregateModel"
import { PokemonV2ItemgameindexAggregateModelSelector } from "./PokemonV2ItemgameindexAggregateModel.base"
import { PokemonV2ItemgameindexModel, PokemonV2ItemgameindexModelType } from "./PokemonV2ItemgameindexModel"
import { PokemonV2ItemgameindexModelSelector } from "./PokemonV2ItemgameindexModel.base"
import { PokemonV2ItemnameAggregateModel, PokemonV2ItemnameAggregateModelType } from "./PokemonV2ItemnameAggregateModel"
import { PokemonV2ItemnameAggregateModelSelector } from "./PokemonV2ItemnameAggregateModel.base"
import { PokemonV2ItemnameModel, PokemonV2ItemnameModelType } from "./PokemonV2ItemnameModel"
import { PokemonV2ItemnameModelSelector } from "./PokemonV2ItemnameModel.base"
import { PokemonV2ItempocketAggregateModel, PokemonV2ItempocketAggregateModelType } from "./PokemonV2ItempocketAggregateModel"
import { PokemonV2ItempocketAggregateModelSelector } from "./PokemonV2ItempocketAggregateModel.base"
import { PokemonV2ItempocketModel, PokemonV2ItempocketModelType } from "./PokemonV2ItempocketModel"
import { PokemonV2ItempocketModelSelector } from "./PokemonV2ItempocketModel.base"
import { PokemonV2ItempocketnameAggregateModel, PokemonV2ItempocketnameAggregateModelType } from "./PokemonV2ItempocketnameAggregateModel"
import { PokemonV2ItempocketnameAggregateModelSelector } from "./PokemonV2ItempocketnameAggregateModel.base"
import { PokemonV2ItempocketnameModel, PokemonV2ItempocketnameModelType } from "./PokemonV2ItempocketnameModel"
import { PokemonV2ItempocketnameModelSelector } from "./PokemonV2ItempocketnameModel.base"
import { PokemonV2ItemspritesAggregateModel, PokemonV2ItemspritesAggregateModelType } from "./PokemonV2ItemspritesAggregateModel"
import { PokemonV2ItemspritesAggregateModelSelector } from "./PokemonV2ItemspritesAggregateModel.base"
import { PokemonV2ItemspritesModel, PokemonV2ItemspritesModelType } from "./PokemonV2ItemspritesModel"
import { PokemonV2ItemspritesModelSelector } from "./PokemonV2ItemspritesModel.base"
import { PokemonV2LanguageAggregateModel, PokemonV2LanguageAggregateModelType } from "./PokemonV2LanguageAggregateModel"
import { PokemonV2LanguageAggregateModelSelector } from "./PokemonV2LanguageAggregateModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2LanguagenameAggregateModel, PokemonV2LanguagenameAggregateModelType } from "./PokemonV2LanguagenameAggregateModel"
import { PokemonV2LanguagenameAggregateModelSelector } from "./PokemonV2LanguagenameAggregateModel.base"
import { PokemonV2LanguagenameModel, PokemonV2LanguagenameModelType } from "./PokemonV2LanguagenameModel"
import { PokemonV2LanguagenameModelSelector } from "./PokemonV2LanguagenameModel.base"
import { PokemonV2LocationAggregateModel, PokemonV2LocationAggregateModelType } from "./PokemonV2LocationAggregateModel"
import { PokemonV2LocationAggregateModelSelector } from "./PokemonV2LocationAggregateModel.base"
import { PokemonV2LocationModel, PokemonV2LocationModelType } from "./PokemonV2LocationModel"
import { PokemonV2LocationModelSelector } from "./PokemonV2LocationModel.base"
import { PokemonV2LocationareaAggregateModel, PokemonV2LocationareaAggregateModelType } from "./PokemonV2LocationareaAggregateModel"
import { PokemonV2LocationareaAggregateModelSelector } from "./PokemonV2LocationareaAggregateModel.base"
import { PokemonV2LocationareaModel, PokemonV2LocationareaModelType } from "./PokemonV2LocationareaModel"
import { PokemonV2LocationareaModelSelector } from "./PokemonV2LocationareaModel.base"
import { PokemonV2LocationareaencounterrateAggregateModel, PokemonV2LocationareaencounterrateAggregateModelType } from "./PokemonV2LocationareaencounterrateAggregateModel"
import { PokemonV2LocationareaencounterrateAggregateModelSelector } from "./PokemonV2LocationareaencounterrateAggregateModel.base"
import { PokemonV2LocationareaencounterrateModel, PokemonV2LocationareaencounterrateModelType } from "./PokemonV2LocationareaencounterrateModel"
import { PokemonV2LocationareaencounterrateModelSelector } from "./PokemonV2LocationareaencounterrateModel.base"
import { PokemonV2LocationareanameAggregateModel, PokemonV2LocationareanameAggregateModelType } from "./PokemonV2LocationareanameAggregateModel"
import { PokemonV2LocationareanameAggregateModelSelector } from "./PokemonV2LocationareanameAggregateModel.base"
import { PokemonV2LocationareanameModel, PokemonV2LocationareanameModelType } from "./PokemonV2LocationareanameModel"
import { PokemonV2LocationareanameModelSelector } from "./PokemonV2LocationareanameModel.base"
import { PokemonV2LocationgameindexAggregateModel, PokemonV2LocationgameindexAggregateModelType } from "./PokemonV2LocationgameindexAggregateModel"
import { PokemonV2LocationgameindexAggregateModelSelector } from "./PokemonV2LocationgameindexAggregateModel.base"
import { PokemonV2LocationgameindexModel, PokemonV2LocationgameindexModelType } from "./PokemonV2LocationgameindexModel"
import { PokemonV2LocationgameindexModelSelector } from "./PokemonV2LocationgameindexModel.base"
import { PokemonV2LocationnameAggregateModel, PokemonV2LocationnameAggregateModelType } from "./PokemonV2LocationnameAggregateModel"
import { PokemonV2LocationnameAggregateModelSelector } from "./PokemonV2LocationnameAggregateModel.base"
import { PokemonV2LocationnameModel, PokemonV2LocationnameModelType } from "./PokemonV2LocationnameModel"
import { PokemonV2LocationnameModelSelector } from "./PokemonV2LocationnameModel.base"
import { PokemonV2MachineAggregateModel, PokemonV2MachineAggregateModelType } from "./PokemonV2MachineAggregateModel"
import { PokemonV2MachineAggregateModelSelector } from "./PokemonV2MachineAggregateModel.base"
import { PokemonV2MachineModel, PokemonV2MachineModelType } from "./PokemonV2MachineModel"
import { PokemonV2MachineModelSelector } from "./PokemonV2MachineModel.base"
import { PokemonV2MoveAggregateModel, PokemonV2MoveAggregateModelType } from "./PokemonV2MoveAggregateModel"
import { PokemonV2MoveAggregateModelSelector } from "./PokemonV2MoveAggregateModel.base"
import { PokemonV2MoveModel, PokemonV2MoveModelType } from "./PokemonV2MoveModel"
import { PokemonV2MoveModelSelector } from "./PokemonV2MoveModel.base"
import { PokemonV2MoveattributeAggregateModel, PokemonV2MoveattributeAggregateModelType } from "./PokemonV2MoveattributeAggregateModel"
import { PokemonV2MoveattributeAggregateModelSelector } from "./PokemonV2MoveattributeAggregateModel.base"
import { PokemonV2MoveattributeModel, PokemonV2MoveattributeModelType } from "./PokemonV2MoveattributeModel"
import { PokemonV2MoveattributeModelSelector } from "./PokemonV2MoveattributeModel.base"
import { PokemonV2MoveattributedescriptionAggregateModel, PokemonV2MoveattributedescriptionAggregateModelType } from "./PokemonV2MoveattributedescriptionAggregateModel"
import { PokemonV2MoveattributedescriptionAggregateModelSelector } from "./PokemonV2MoveattributedescriptionAggregateModel.base"
import { PokemonV2MoveattributedescriptionModel, PokemonV2MoveattributedescriptionModelType } from "./PokemonV2MoveattributedescriptionModel"
import { PokemonV2MoveattributedescriptionModelSelector } from "./PokemonV2MoveattributedescriptionModel.base"
import { PokemonV2MoveattributemapAggregateModel, PokemonV2MoveattributemapAggregateModelType } from "./PokemonV2MoveattributemapAggregateModel"
import { PokemonV2MoveattributemapAggregateModelSelector } from "./PokemonV2MoveattributemapAggregateModel.base"
import { PokemonV2MoveattributemapModel, PokemonV2MoveattributemapModelType } from "./PokemonV2MoveattributemapModel"
import { PokemonV2MoveattributemapModelSelector } from "./PokemonV2MoveattributemapModel.base"
import { PokemonV2MoveattributenameAggregateModel, PokemonV2MoveattributenameAggregateModelType } from "./PokemonV2MoveattributenameAggregateModel"
import { PokemonV2MoveattributenameAggregateModelSelector } from "./PokemonV2MoveattributenameAggregateModel.base"
import { PokemonV2MoveattributenameModel, PokemonV2MoveattributenameModelType } from "./PokemonV2MoveattributenameModel"
import { PokemonV2MoveattributenameModelSelector } from "./PokemonV2MoveattributenameModel.base"
import { PokemonV2MovebattlestyleAggregateModel, PokemonV2MovebattlestyleAggregateModelType } from "./PokemonV2MovebattlestyleAggregateModel"
import { PokemonV2MovebattlestyleAggregateModelSelector } from "./PokemonV2MovebattlestyleAggregateModel.base"
import { PokemonV2MovebattlestyleModel, PokemonV2MovebattlestyleModelType } from "./PokemonV2MovebattlestyleModel"
import { PokemonV2MovebattlestyleModelSelector } from "./PokemonV2MovebattlestyleModel.base"
import { PokemonV2MovebattlestylenameAggregateModel, PokemonV2MovebattlestylenameAggregateModelType } from "./PokemonV2MovebattlestylenameAggregateModel"
import { PokemonV2MovebattlestylenameAggregateModelSelector } from "./PokemonV2MovebattlestylenameAggregateModel.base"
import { PokemonV2MovebattlestylenameModel, PokemonV2MovebattlestylenameModelType } from "./PokemonV2MovebattlestylenameModel"
import { PokemonV2MovebattlestylenameModelSelector } from "./PokemonV2MovebattlestylenameModel.base"
import { PokemonV2MovechangeAggregateModel, PokemonV2MovechangeAggregateModelType } from "./PokemonV2MovechangeAggregateModel"
import { PokemonV2MovechangeAggregateModelSelector } from "./PokemonV2MovechangeAggregateModel.base"
import { PokemonV2MovechangeModel, PokemonV2MovechangeModelType } from "./PokemonV2MovechangeModel"
import { PokemonV2MovechangeModelSelector } from "./PokemonV2MovechangeModel.base"
import { PokemonV2MovedamageclassAggregateModel, PokemonV2MovedamageclassAggregateModelType } from "./PokemonV2MovedamageclassAggregateModel"
import { PokemonV2MovedamageclassAggregateModelSelector } from "./PokemonV2MovedamageclassAggregateModel.base"
import { PokemonV2MovedamageclassModel, PokemonV2MovedamageclassModelType } from "./PokemonV2MovedamageclassModel"
import { PokemonV2MovedamageclassModelSelector } from "./PokemonV2MovedamageclassModel.base"
import { PokemonV2MovedamageclassdescriptionAggregateModel, PokemonV2MovedamageclassdescriptionAggregateModelType } from "./PokemonV2MovedamageclassdescriptionAggregateModel"
import { PokemonV2MovedamageclassdescriptionAggregateModelSelector } from "./PokemonV2MovedamageclassdescriptionAggregateModel.base"
import { PokemonV2MovedamageclassdescriptionModel, PokemonV2MovedamageclassdescriptionModelType } from "./PokemonV2MovedamageclassdescriptionModel"
import { PokemonV2MovedamageclassdescriptionModelSelector } from "./PokemonV2MovedamageclassdescriptionModel.base"
import { PokemonV2MovedamageclassnameAggregateModel, PokemonV2MovedamageclassnameAggregateModelType } from "./PokemonV2MovedamageclassnameAggregateModel"
import { PokemonV2MovedamageclassnameAggregateModelSelector } from "./PokemonV2MovedamageclassnameAggregateModel.base"
import { PokemonV2MovedamageclassnameModel, PokemonV2MovedamageclassnameModelType } from "./PokemonV2MovedamageclassnameModel"
import { PokemonV2MovedamageclassnameModelSelector } from "./PokemonV2MovedamageclassnameModel.base"
import { PokemonV2MoveeffectAggregateModel, PokemonV2MoveeffectAggregateModelType } from "./PokemonV2MoveeffectAggregateModel"
import { PokemonV2MoveeffectAggregateModelSelector } from "./PokemonV2MoveeffectAggregateModel.base"
import { PokemonV2MoveeffectModel, PokemonV2MoveeffectModelType } from "./PokemonV2MoveeffectModel"
import { PokemonV2MoveeffectModelSelector } from "./PokemonV2MoveeffectModel.base"
import { PokemonV2MoveeffectchangeAggregateModel, PokemonV2MoveeffectchangeAggregateModelType } from "./PokemonV2MoveeffectchangeAggregateModel"
import { PokemonV2MoveeffectchangeAggregateModelSelector } from "./PokemonV2MoveeffectchangeAggregateModel.base"
import { PokemonV2MoveeffectchangeModel, PokemonV2MoveeffectchangeModelType } from "./PokemonV2MoveeffectchangeModel"
import { PokemonV2MoveeffectchangeModelSelector } from "./PokemonV2MoveeffectchangeModel.base"
import { PokemonV2MoveeffectchangeeffecttextAggregateModel, PokemonV2MoveeffectchangeeffecttextAggregateModelType } from "./PokemonV2MoveeffectchangeeffecttextAggregateModel"
import { PokemonV2MoveeffectchangeeffecttextAggregateModelSelector } from "./PokemonV2MoveeffectchangeeffecttextAggregateModel.base"
import { PokemonV2MoveeffectchangeeffecttextModel, PokemonV2MoveeffectchangeeffecttextModelType } from "./PokemonV2MoveeffectchangeeffecttextModel"
import { PokemonV2MoveeffectchangeeffecttextModelSelector } from "./PokemonV2MoveeffectchangeeffecttextModel.base"
import { PokemonV2MoveeffecteffecttextAggregateModel, PokemonV2MoveeffecteffecttextAggregateModelType } from "./PokemonV2MoveeffecteffecttextAggregateModel"
import { PokemonV2MoveeffecteffecttextAggregateModelSelector } from "./PokemonV2MoveeffecteffecttextAggregateModel.base"
import { PokemonV2MoveeffecteffecttextModel, PokemonV2MoveeffecteffecttextModelType } from "./PokemonV2MoveeffecteffecttextModel"
import { PokemonV2MoveeffecteffecttextModelSelector } from "./PokemonV2MoveeffecteffecttextModel.base"
import { PokemonV2MoveflavortextAggregateModel, PokemonV2MoveflavortextAggregateModelType } from "./PokemonV2MoveflavortextAggregateModel"
import { PokemonV2MoveflavortextAggregateModelSelector } from "./PokemonV2MoveflavortextAggregateModel.base"
import { PokemonV2MoveflavortextModel, PokemonV2MoveflavortextModelType } from "./PokemonV2MoveflavortextModel"
import { PokemonV2MoveflavortextModelSelector } from "./PokemonV2MoveflavortextModel.base"
import { PokemonV2MovelearnmethodAggregateModel, PokemonV2MovelearnmethodAggregateModelType } from "./PokemonV2MovelearnmethodAggregateModel"
import { PokemonV2MovelearnmethodAggregateModelSelector } from "./PokemonV2MovelearnmethodAggregateModel.base"
import { PokemonV2MovelearnmethodModel, PokemonV2MovelearnmethodModelType } from "./PokemonV2MovelearnmethodModel"
import { PokemonV2MovelearnmethodModelSelector } from "./PokemonV2MovelearnmethodModel.base"
import { PokemonV2MovelearnmethoddescriptionAggregateModel, PokemonV2MovelearnmethoddescriptionAggregateModelType } from "./PokemonV2MovelearnmethoddescriptionAggregateModel"
import { PokemonV2MovelearnmethoddescriptionAggregateModelSelector } from "./PokemonV2MovelearnmethoddescriptionAggregateModel.base"
import { PokemonV2MovelearnmethoddescriptionModel, PokemonV2MovelearnmethoddescriptionModelType } from "./PokemonV2MovelearnmethoddescriptionModel"
import { PokemonV2MovelearnmethoddescriptionModelSelector } from "./PokemonV2MovelearnmethoddescriptionModel.base"
import { PokemonV2MovelearnmethodnameAggregateModel, PokemonV2MovelearnmethodnameAggregateModelType } from "./PokemonV2MovelearnmethodnameAggregateModel"
import { PokemonV2MovelearnmethodnameAggregateModelSelector } from "./PokemonV2MovelearnmethodnameAggregateModel.base"
import { PokemonV2MovelearnmethodnameModel, PokemonV2MovelearnmethodnameModelType } from "./PokemonV2MovelearnmethodnameModel"
import { PokemonV2MovelearnmethodnameModelSelector } from "./PokemonV2MovelearnmethodnameModel.base"
import { PokemonV2MovemetaAggregateModel, PokemonV2MovemetaAggregateModelType } from "./PokemonV2MovemetaAggregateModel"
import { PokemonV2MovemetaAggregateModelSelector } from "./PokemonV2MovemetaAggregateModel.base"
import { PokemonV2MovemetaModel, PokemonV2MovemetaModelType } from "./PokemonV2MovemetaModel"
import { PokemonV2MovemetaModelSelector } from "./PokemonV2MovemetaModel.base"
import { PokemonV2MovemetaailmentAggregateModel, PokemonV2MovemetaailmentAggregateModelType } from "./PokemonV2MovemetaailmentAggregateModel"
import { PokemonV2MovemetaailmentAggregateModelSelector } from "./PokemonV2MovemetaailmentAggregateModel.base"
import { PokemonV2MovemetaailmentModel, PokemonV2MovemetaailmentModelType } from "./PokemonV2MovemetaailmentModel"
import { PokemonV2MovemetaailmentModelSelector } from "./PokemonV2MovemetaailmentModel.base"
import { PokemonV2MovemetaailmentnameAggregateModel, PokemonV2MovemetaailmentnameAggregateModelType } from "./PokemonV2MovemetaailmentnameAggregateModel"
import { PokemonV2MovemetaailmentnameAggregateModelSelector } from "./PokemonV2MovemetaailmentnameAggregateModel.base"
import { PokemonV2MovemetaailmentnameModel, PokemonV2MovemetaailmentnameModelType } from "./PokemonV2MovemetaailmentnameModel"
import { PokemonV2MovemetaailmentnameModelSelector } from "./PokemonV2MovemetaailmentnameModel.base"
import { PokemonV2MovemetacategoryAggregateModel, PokemonV2MovemetacategoryAggregateModelType } from "./PokemonV2MovemetacategoryAggregateModel"
import { PokemonV2MovemetacategoryAggregateModelSelector } from "./PokemonV2MovemetacategoryAggregateModel.base"
import { PokemonV2MovemetacategoryModel, PokemonV2MovemetacategoryModelType } from "./PokemonV2MovemetacategoryModel"
import { PokemonV2MovemetacategoryModelSelector } from "./PokemonV2MovemetacategoryModel.base"
import { PokemonV2MovemetacategorydescriptionAggregateModel, PokemonV2MovemetacategorydescriptionAggregateModelType } from "./PokemonV2MovemetacategorydescriptionAggregateModel"
import { PokemonV2MovemetacategorydescriptionAggregateModelSelector } from "./PokemonV2MovemetacategorydescriptionAggregateModel.base"
import { PokemonV2MovemetacategorydescriptionModel, PokemonV2MovemetacategorydescriptionModelType } from "./PokemonV2MovemetacategorydescriptionModel"
import { PokemonV2MovemetacategorydescriptionModelSelector } from "./PokemonV2MovemetacategorydescriptionModel.base"
import { PokemonV2MovemetastatchangeAggregateModel, PokemonV2MovemetastatchangeAggregateModelType } from "./PokemonV2MovemetastatchangeAggregateModel"
import { PokemonV2MovemetastatchangeAggregateModelSelector } from "./PokemonV2MovemetastatchangeAggregateModel.base"
import { PokemonV2MovemetastatchangeModel, PokemonV2MovemetastatchangeModelType } from "./PokemonV2MovemetastatchangeModel"
import { PokemonV2MovemetastatchangeModelSelector } from "./PokemonV2MovemetastatchangeModel.base"
import { PokemonV2MovenameAggregateModel, PokemonV2MovenameAggregateModelType } from "./PokemonV2MovenameAggregateModel"
import { PokemonV2MovenameAggregateModelSelector } from "./PokemonV2MovenameAggregateModel.base"
import { PokemonV2MovenameModel, PokemonV2MovenameModelType } from "./PokemonV2MovenameModel"
import { PokemonV2MovenameModelSelector } from "./PokemonV2MovenameModel.base"
import { PokemonV2MovetargetAggregateModel, PokemonV2MovetargetAggregateModelType } from "./PokemonV2MovetargetAggregateModel"
import { PokemonV2MovetargetAggregateModelSelector } from "./PokemonV2MovetargetAggregateModel.base"
import { PokemonV2MovetargetModel, PokemonV2MovetargetModelType } from "./PokemonV2MovetargetModel"
import { PokemonV2MovetargetModelSelector } from "./PokemonV2MovetargetModel.base"
import { PokemonV2MovetargetdescriptionAggregateModel, PokemonV2MovetargetdescriptionAggregateModelType } from "./PokemonV2MovetargetdescriptionAggregateModel"
import { PokemonV2MovetargetdescriptionAggregateModelSelector } from "./PokemonV2MovetargetdescriptionAggregateModel.base"
import { PokemonV2MovetargetdescriptionModel, PokemonV2MovetargetdescriptionModelType } from "./PokemonV2MovetargetdescriptionModel"
import { PokemonV2MovetargetdescriptionModelSelector } from "./PokemonV2MovetargetdescriptionModel.base"
import { PokemonV2MovetargetnameAggregateModel, PokemonV2MovetargetnameAggregateModelType } from "./PokemonV2MovetargetnameAggregateModel"
import { PokemonV2MovetargetnameAggregateModelSelector } from "./PokemonV2MovetargetnameAggregateModel.base"
import { PokemonV2MovetargetnameModel, PokemonV2MovetargetnameModelType } from "./PokemonV2MovetargetnameModel"
import { PokemonV2MovetargetnameModelSelector } from "./PokemonV2MovetargetnameModel.base"
import { PokemonV2NatureAggregateModel, PokemonV2NatureAggregateModelType } from "./PokemonV2NatureAggregateModel"
import { PokemonV2NatureAggregateModelSelector } from "./PokemonV2NatureAggregateModel.base"
import { PokemonV2NatureModel, PokemonV2NatureModelType } from "./PokemonV2NatureModel"
import { PokemonV2NatureModelSelector } from "./PokemonV2NatureModel.base"
import { PokemonV2NaturebattlestylepreferenceAggregateModel, PokemonV2NaturebattlestylepreferenceAggregateModelType } from "./PokemonV2NaturebattlestylepreferenceAggregateModel"
import { PokemonV2NaturebattlestylepreferenceAggregateModelSelector } from "./PokemonV2NaturebattlestylepreferenceAggregateModel.base"
import { PokemonV2NaturebattlestylepreferenceModel, PokemonV2NaturebattlestylepreferenceModelType } from "./PokemonV2NaturebattlestylepreferenceModel"
import { PokemonV2NaturebattlestylepreferenceModelSelector } from "./PokemonV2NaturebattlestylepreferenceModel.base"
import { PokemonV2NaturenameAggregateModel, PokemonV2NaturenameAggregateModelType } from "./PokemonV2NaturenameAggregateModel"
import { PokemonV2NaturenameAggregateModelSelector } from "./PokemonV2NaturenameAggregateModel.base"
import { PokemonV2NaturenameModel, PokemonV2NaturenameModelType } from "./PokemonV2NaturenameModel"
import { PokemonV2NaturenameModelSelector } from "./PokemonV2NaturenameModel.base"
import { PokemonV2NaturepokeathlonstatAggregateModel, PokemonV2NaturepokeathlonstatAggregateModelType } from "./PokemonV2NaturepokeathlonstatAggregateModel"
import { PokemonV2NaturepokeathlonstatAggregateModelSelector } from "./PokemonV2NaturepokeathlonstatAggregateModel.base"
import { PokemonV2NaturepokeathlonstatModel, PokemonV2NaturepokeathlonstatModelType } from "./PokemonV2NaturepokeathlonstatModel"
import { PokemonV2NaturepokeathlonstatModelSelector } from "./PokemonV2NaturepokeathlonstatModel.base"
import { PokemonV2PalparkAggregateModel, PokemonV2PalparkAggregateModelType } from "./PokemonV2PalparkAggregateModel"
import { PokemonV2PalparkAggregateModelSelector } from "./PokemonV2PalparkAggregateModel.base"
import { PokemonV2PalparkModel, PokemonV2PalparkModelType } from "./PokemonV2PalparkModel"
import { PokemonV2PalparkModelSelector } from "./PokemonV2PalparkModel.base"
import { PokemonV2PalparkareaAggregateModel, PokemonV2PalparkareaAggregateModelType } from "./PokemonV2PalparkareaAggregateModel"
import { PokemonV2PalparkareaAggregateModelSelector } from "./PokemonV2PalparkareaAggregateModel.base"
import { PokemonV2PalparkareaModel, PokemonV2PalparkareaModelType } from "./PokemonV2PalparkareaModel"
import { PokemonV2PalparkareaModelSelector } from "./PokemonV2PalparkareaModel.base"
import { PokemonV2PalparkareanameAggregateModel, PokemonV2PalparkareanameAggregateModelType } from "./PokemonV2PalparkareanameAggregateModel"
import { PokemonV2PalparkareanameAggregateModelSelector } from "./PokemonV2PalparkareanameAggregateModel.base"
import { PokemonV2PalparkareanameModel, PokemonV2PalparkareanameModelType } from "./PokemonV2PalparkareanameModel"
import { PokemonV2PalparkareanameModelSelector } from "./PokemonV2PalparkareanameModel.base"
import { PokemonV2PokeathlonstatAggregateModel, PokemonV2PokeathlonstatAggregateModelType } from "./PokemonV2PokeathlonstatAggregateModel"
import { PokemonV2PokeathlonstatAggregateModelSelector } from "./PokemonV2PokeathlonstatAggregateModel.base"
import { PokemonV2PokeathlonstatModel, PokemonV2PokeathlonstatModelType } from "./PokemonV2PokeathlonstatModel"
import { PokemonV2PokeathlonstatModelSelector } from "./PokemonV2PokeathlonstatModel.base"
import { PokemonV2PokeathlonstatnameAggregateModel, PokemonV2PokeathlonstatnameAggregateModelType } from "./PokemonV2PokeathlonstatnameAggregateModel"
import { PokemonV2PokeathlonstatnameAggregateModelSelector } from "./PokemonV2PokeathlonstatnameAggregateModel.base"
import { PokemonV2PokeathlonstatnameModel, PokemonV2PokeathlonstatnameModelType } from "./PokemonV2PokeathlonstatnameModel"
import { PokemonV2PokeathlonstatnameModelSelector } from "./PokemonV2PokeathlonstatnameModel.base"
import { PokemonV2PokedexAggregateModel, PokemonV2PokedexAggregateModelType } from "./PokemonV2PokedexAggregateModel"
import { PokemonV2PokedexAggregateModelSelector } from "./PokemonV2PokedexAggregateModel.base"
import { PokemonV2PokedexModel, PokemonV2PokedexModelType } from "./PokemonV2PokedexModel"
import { PokemonV2PokedexModelSelector } from "./PokemonV2PokedexModel.base"
import { PokemonV2PokedexdescriptionAggregateModel, PokemonV2PokedexdescriptionAggregateModelType } from "./PokemonV2PokedexdescriptionAggregateModel"
import { PokemonV2PokedexdescriptionAggregateModelSelector } from "./PokemonV2PokedexdescriptionAggregateModel.base"
import { PokemonV2PokedexdescriptionModel, PokemonV2PokedexdescriptionModelType } from "./PokemonV2PokedexdescriptionModel"
import { PokemonV2PokedexdescriptionModelSelector } from "./PokemonV2PokedexdescriptionModel.base"
import { PokemonV2PokedexnameAggregateModel, PokemonV2PokedexnameAggregateModelType } from "./PokemonV2PokedexnameAggregateModel"
import { PokemonV2PokedexnameAggregateModelSelector } from "./PokemonV2PokedexnameAggregateModel.base"
import { PokemonV2PokedexnameModel, PokemonV2PokedexnameModelType } from "./PokemonV2PokedexnameModel"
import { PokemonV2PokedexnameModelSelector } from "./PokemonV2PokedexnameModel.base"
import { PokemonV2PokedexversiongroupAggregateModel, PokemonV2PokedexversiongroupAggregateModelType } from "./PokemonV2PokedexversiongroupAggregateModel"
import { PokemonV2PokedexversiongroupAggregateModelSelector } from "./PokemonV2PokedexversiongroupAggregateModel.base"
import { PokemonV2PokedexversiongroupModel, PokemonV2PokedexversiongroupModelType } from "./PokemonV2PokedexversiongroupModel"
import { PokemonV2PokedexversiongroupModelSelector } from "./PokemonV2PokedexversiongroupModel.base"
import { PokemonV2PokemonAggregateModel, PokemonV2PokemonAggregateModelType } from "./PokemonV2PokemonAggregateModel"
import { PokemonV2PokemonAggregateModelSelector } from "./PokemonV2PokemonAggregateModel.base"
import { PokemonV2PokemonModel, PokemonV2PokemonModelType } from "./PokemonV2PokemonModel"
import { PokemonV2PokemonModelSelector } from "./PokemonV2PokemonModel.base"
import { PokemonV2PokemonabilityAggregateModel, PokemonV2PokemonabilityAggregateModelType } from "./PokemonV2PokemonabilityAggregateModel"
import { PokemonV2PokemonabilityAggregateModelSelector } from "./PokemonV2PokemonabilityAggregateModel.base"
import { PokemonV2PokemonabilityModel, PokemonV2PokemonabilityModelType } from "./PokemonV2PokemonabilityModel"
import { PokemonV2PokemonabilityModelSelector } from "./PokemonV2PokemonabilityModel.base"
import { PokemonV2PokemoncolorAggregateModel, PokemonV2PokemoncolorAggregateModelType } from "./PokemonV2PokemoncolorAggregateModel"
import { PokemonV2PokemoncolorAggregateModelSelector } from "./PokemonV2PokemoncolorAggregateModel.base"
import { PokemonV2PokemoncolorModel, PokemonV2PokemoncolorModelType } from "./PokemonV2PokemoncolorModel"
import { PokemonV2PokemoncolorModelSelector } from "./PokemonV2PokemoncolorModel.base"
import { PokemonV2PokemoncolornameAggregateModel, PokemonV2PokemoncolornameAggregateModelType } from "./PokemonV2PokemoncolornameAggregateModel"
import { PokemonV2PokemoncolornameAggregateModelSelector } from "./PokemonV2PokemoncolornameAggregateModel.base"
import { PokemonV2PokemoncolornameModel, PokemonV2PokemoncolornameModelType } from "./PokemonV2PokemoncolornameModel"
import { PokemonV2PokemoncolornameModelSelector } from "./PokemonV2PokemoncolornameModel.base"
import { PokemonV2PokemondexnumberAggregateModel, PokemonV2PokemondexnumberAggregateModelType } from "./PokemonV2PokemondexnumberAggregateModel"
import { PokemonV2PokemondexnumberAggregateModelSelector } from "./PokemonV2PokemondexnumberAggregateModel.base"
import { PokemonV2PokemondexnumberModel, PokemonV2PokemondexnumberModelType } from "./PokemonV2PokemondexnumberModel"
import { PokemonV2PokemondexnumberModelSelector } from "./PokemonV2PokemondexnumberModel.base"
import { PokemonV2PokemonegggroupAggregateModel, PokemonV2PokemonegggroupAggregateModelType } from "./PokemonV2PokemonegggroupAggregateModel"
import { PokemonV2PokemonegggroupAggregateModelSelector } from "./PokemonV2PokemonegggroupAggregateModel.base"
import { PokemonV2PokemonegggroupModel, PokemonV2PokemonegggroupModelType } from "./PokemonV2PokemonegggroupModel"
import { PokemonV2PokemonegggroupModelSelector } from "./PokemonV2PokemonegggroupModel.base"
import { PokemonV2PokemonevolutionAggregateModel, PokemonV2PokemonevolutionAggregateModelType } from "./PokemonV2PokemonevolutionAggregateModel"
import { PokemonV2PokemonevolutionAggregateModelSelector } from "./PokemonV2PokemonevolutionAggregateModel.base"
import { PokemonV2PokemonevolutionModel, PokemonV2PokemonevolutionModelType } from "./PokemonV2PokemonevolutionModel"
import { PokemonV2PokemonevolutionModelSelector } from "./PokemonV2PokemonevolutionModel.base"
import { PokemonV2PokemonformAggregateModel, PokemonV2PokemonformAggregateModelType } from "./PokemonV2PokemonformAggregateModel"
import { PokemonV2PokemonformAggregateModelSelector } from "./PokemonV2PokemonformAggregateModel.base"
import { PokemonV2PokemonformModel, PokemonV2PokemonformModelType } from "./PokemonV2PokemonformModel"
import { PokemonV2PokemonformModelSelector } from "./PokemonV2PokemonformModel.base"
import { PokemonV2PokemonformgenerationAggregateModel, PokemonV2PokemonformgenerationAggregateModelType } from "./PokemonV2PokemonformgenerationAggregateModel"
import { PokemonV2PokemonformgenerationAggregateModelSelector } from "./PokemonV2PokemonformgenerationAggregateModel.base"
import { PokemonV2PokemonformgenerationModel, PokemonV2PokemonformgenerationModelType } from "./PokemonV2PokemonformgenerationModel"
import { PokemonV2PokemonformgenerationModelSelector } from "./PokemonV2PokemonformgenerationModel.base"
import { PokemonV2PokemonformnameAggregateModel, PokemonV2PokemonformnameAggregateModelType } from "./PokemonV2PokemonformnameAggregateModel"
import { PokemonV2PokemonformnameAggregateModelSelector } from "./PokemonV2PokemonformnameAggregateModel.base"
import { PokemonV2PokemonformnameModel, PokemonV2PokemonformnameModelType } from "./PokemonV2PokemonformnameModel"
import { PokemonV2PokemonformnameModelSelector } from "./PokemonV2PokemonformnameModel.base"
import { PokemonV2PokemonformspritesAggregateModel, PokemonV2PokemonformspritesAggregateModelType } from "./PokemonV2PokemonformspritesAggregateModel"
import { PokemonV2PokemonformspritesAggregateModelSelector } from "./PokemonV2PokemonformspritesAggregateModel.base"
import { PokemonV2PokemonformspritesModel, PokemonV2PokemonformspritesModelType } from "./PokemonV2PokemonformspritesModel"
import { PokemonV2PokemonformspritesModelSelector } from "./PokemonV2PokemonformspritesModel.base"
import { PokemonV2PokemonformtypeAggregateModel, PokemonV2PokemonformtypeAggregateModelType } from "./PokemonV2PokemonformtypeAggregateModel"
import { PokemonV2PokemonformtypeAggregateModelSelector } from "./PokemonV2PokemonformtypeAggregateModel.base"
import { PokemonV2PokemonformtypeModel, PokemonV2PokemonformtypeModelType } from "./PokemonV2PokemonformtypeModel"
import { PokemonV2PokemonformtypeModelSelector } from "./PokemonV2PokemonformtypeModel.base"
import { PokemonV2PokemongameindexAggregateModel, PokemonV2PokemongameindexAggregateModelType } from "./PokemonV2PokemongameindexAggregateModel"
import { PokemonV2PokemongameindexAggregateModelSelector } from "./PokemonV2PokemongameindexAggregateModel.base"
import { PokemonV2PokemongameindexModel, PokemonV2PokemongameindexModelType } from "./PokemonV2PokemongameindexModel"
import { PokemonV2PokemongameindexModelSelector } from "./PokemonV2PokemongameindexModel.base"
import { PokemonV2PokemonhabitatAggregateModel, PokemonV2PokemonhabitatAggregateModelType } from "./PokemonV2PokemonhabitatAggregateModel"
import { PokemonV2PokemonhabitatAggregateModelSelector } from "./PokemonV2PokemonhabitatAggregateModel.base"
import { PokemonV2PokemonhabitatModel, PokemonV2PokemonhabitatModelType } from "./PokemonV2PokemonhabitatModel"
import { PokemonV2PokemonhabitatModelSelector } from "./PokemonV2PokemonhabitatModel.base"
import { PokemonV2PokemonhabitatnameAggregateModel, PokemonV2PokemonhabitatnameAggregateModelType } from "./PokemonV2PokemonhabitatnameAggregateModel"
import { PokemonV2PokemonhabitatnameAggregateModelSelector } from "./PokemonV2PokemonhabitatnameAggregateModel.base"
import { PokemonV2PokemonhabitatnameModel, PokemonV2PokemonhabitatnameModelType } from "./PokemonV2PokemonhabitatnameModel"
import { PokemonV2PokemonhabitatnameModelSelector } from "./PokemonV2PokemonhabitatnameModel.base"
import { PokemonV2PokemonitemAggregateModel, PokemonV2PokemonitemAggregateModelType } from "./PokemonV2PokemonitemAggregateModel"
import { PokemonV2PokemonitemAggregateModelSelector } from "./PokemonV2PokemonitemAggregateModel.base"
import { PokemonV2PokemonitemModel, PokemonV2PokemonitemModelType } from "./PokemonV2PokemonitemModel"
import { PokemonV2PokemonitemModelSelector } from "./PokemonV2PokemonitemModel.base"
import { PokemonV2PokemonmoveAggregateModel, PokemonV2PokemonmoveAggregateModelType } from "./PokemonV2PokemonmoveAggregateModel"
import { PokemonV2PokemonmoveAggregateModelSelector } from "./PokemonV2PokemonmoveAggregateModel.base"
import { PokemonV2PokemonmoveModel, PokemonV2PokemonmoveModelType } from "./PokemonV2PokemonmoveModel"
import { PokemonV2PokemonmoveModelSelector } from "./PokemonV2PokemonmoveModel.base"
import { PokemonV2PokemonshapeAggregateModel, PokemonV2PokemonshapeAggregateModelType } from "./PokemonV2PokemonshapeAggregateModel"
import { PokemonV2PokemonshapeAggregateModelSelector } from "./PokemonV2PokemonshapeAggregateModel.base"
import { PokemonV2PokemonshapeModel, PokemonV2PokemonshapeModelType } from "./PokemonV2PokemonshapeModel"
import { PokemonV2PokemonshapeModelSelector } from "./PokemonV2PokemonshapeModel.base"
import { PokemonV2PokemonshapenameAggregateModel, PokemonV2PokemonshapenameAggregateModelType } from "./PokemonV2PokemonshapenameAggregateModel"
import { PokemonV2PokemonshapenameAggregateModelSelector } from "./PokemonV2PokemonshapenameAggregateModel.base"
import { PokemonV2PokemonshapenameModel, PokemonV2PokemonshapenameModelType } from "./PokemonV2PokemonshapenameModel"
import { PokemonV2PokemonshapenameModelSelector } from "./PokemonV2PokemonshapenameModel.base"
import { PokemonV2PokemonspeciesAggregateModel, PokemonV2PokemonspeciesAggregateModelType } from "./PokemonV2PokemonspeciesAggregateModel"
import { PokemonV2PokemonspeciesAggregateModelSelector } from "./PokemonV2PokemonspeciesAggregateModel.base"
import { PokemonV2PokemonspeciesModel, PokemonV2PokemonspeciesModelType } from "./PokemonV2PokemonspeciesModel"
import { PokemonV2PokemonspeciesModelSelector } from "./PokemonV2PokemonspeciesModel.base"
import { PokemonV2PokemonspeciesdescriptionAggregateModel, PokemonV2PokemonspeciesdescriptionAggregateModelType } from "./PokemonV2PokemonspeciesdescriptionAggregateModel"
import { PokemonV2PokemonspeciesdescriptionAggregateModelSelector } from "./PokemonV2PokemonspeciesdescriptionAggregateModel.base"
import { PokemonV2PokemonspeciesdescriptionModel, PokemonV2PokemonspeciesdescriptionModelType } from "./PokemonV2PokemonspeciesdescriptionModel"
import { PokemonV2PokemonspeciesdescriptionModelSelector } from "./PokemonV2PokemonspeciesdescriptionModel.base"
import { PokemonV2PokemonspeciesflavortextAggregateModel, PokemonV2PokemonspeciesflavortextAggregateModelType } from "./PokemonV2PokemonspeciesflavortextAggregateModel"
import { PokemonV2PokemonspeciesflavortextAggregateModelSelector } from "./PokemonV2PokemonspeciesflavortextAggregateModel.base"
import { PokemonV2PokemonspeciesflavortextModel, PokemonV2PokemonspeciesflavortextModelType } from "./PokemonV2PokemonspeciesflavortextModel"
import { PokemonV2PokemonspeciesflavortextModelSelector } from "./PokemonV2PokemonspeciesflavortextModel.base"
import { PokemonV2PokemonspeciesnameAggregateModel, PokemonV2PokemonspeciesnameAggregateModelType } from "./PokemonV2PokemonspeciesnameAggregateModel"
import { PokemonV2PokemonspeciesnameAggregateModelSelector } from "./PokemonV2PokemonspeciesnameAggregateModel.base"
import { PokemonV2PokemonspeciesnameModel, PokemonV2PokemonspeciesnameModelType } from "./PokemonV2PokemonspeciesnameModel"
import { PokemonV2PokemonspeciesnameModelSelector } from "./PokemonV2PokemonspeciesnameModel.base"
import { PokemonV2PokemonspritesAggregateModel, PokemonV2PokemonspritesAggregateModelType } from "./PokemonV2PokemonspritesAggregateModel"
import { PokemonV2PokemonspritesAggregateModelSelector } from "./PokemonV2PokemonspritesAggregateModel.base"
import { PokemonV2PokemonspritesModel, PokemonV2PokemonspritesModelType } from "./PokemonV2PokemonspritesModel"
import { PokemonV2PokemonspritesModelSelector } from "./PokemonV2PokemonspritesModel.base"
import { PokemonV2PokemonstatAggregateModel, PokemonV2PokemonstatAggregateModelType } from "./PokemonV2PokemonstatAggregateModel"
import { PokemonV2PokemonstatAggregateModelSelector } from "./PokemonV2PokemonstatAggregateModel.base"
import { PokemonV2PokemonstatModel, PokemonV2PokemonstatModelType } from "./PokemonV2PokemonstatModel"
import { PokemonV2PokemonstatModelSelector } from "./PokemonV2PokemonstatModel.base"
import { PokemonV2PokemontypeAggregateModel, PokemonV2PokemontypeAggregateModelType } from "./PokemonV2PokemontypeAggregateModel"
import { PokemonV2PokemontypeAggregateModelSelector } from "./PokemonV2PokemontypeAggregateModel.base"
import { PokemonV2PokemontypeModel, PokemonV2PokemontypeModelType } from "./PokemonV2PokemontypeModel"
import { PokemonV2PokemontypeModelSelector } from "./PokemonV2PokemontypeModel.base"
import { PokemonV2PokemontypepastAggregateModel, PokemonV2PokemontypepastAggregateModelType } from "./PokemonV2PokemontypepastAggregateModel"
import { PokemonV2PokemontypepastAggregateModelSelector } from "./PokemonV2PokemontypepastAggregateModel.base"
import { PokemonV2PokemontypepastModel, PokemonV2PokemontypepastModelType } from "./PokemonV2PokemontypepastModel"
import { PokemonV2PokemontypepastModelSelector } from "./PokemonV2PokemontypepastModel.base"
import { PokemonV2RegionAggregateModel, PokemonV2RegionAggregateModelType } from "./PokemonV2RegionAggregateModel"
import { PokemonV2RegionAggregateModelSelector } from "./PokemonV2RegionAggregateModel.base"
import { PokemonV2RegionModel, PokemonV2RegionModelType } from "./PokemonV2RegionModel"
import { PokemonV2RegionModelSelector } from "./PokemonV2RegionModel.base"
import { PokemonV2RegionnameAggregateModel, PokemonV2RegionnameAggregateModelType } from "./PokemonV2RegionnameAggregateModel"
import { PokemonV2RegionnameAggregateModelSelector } from "./PokemonV2RegionnameAggregateModel.base"
import { PokemonV2RegionnameModel, PokemonV2RegionnameModelType } from "./PokemonV2RegionnameModel"
import { PokemonV2RegionnameModelSelector } from "./PokemonV2RegionnameModel.base"
import { PokemonV2StatAggregateModel, PokemonV2StatAggregateModelType } from "./PokemonV2StatAggregateModel"
import { PokemonV2StatAggregateModelSelector } from "./PokemonV2StatAggregateModel.base"
import { PokemonV2StatModel, PokemonV2StatModelType } from "./PokemonV2StatModel"
import { PokemonV2StatModelSelector } from "./PokemonV2StatModel.base"
import { PokemonV2StatnameAggregateModel, PokemonV2StatnameAggregateModelType } from "./PokemonV2StatnameAggregateModel"
import { PokemonV2StatnameAggregateModelSelector } from "./PokemonV2StatnameAggregateModel.base"
import { PokemonV2StatnameModel, PokemonV2StatnameModelType } from "./PokemonV2StatnameModel"
import { PokemonV2StatnameModelSelector } from "./PokemonV2StatnameModel.base"
import { PokemonV2SupercontestcomboAggregateModel, PokemonV2SupercontestcomboAggregateModelType } from "./PokemonV2SupercontestcomboAggregateModel"
import { PokemonV2SupercontestcomboAggregateModelSelector } from "./PokemonV2SupercontestcomboAggregateModel.base"
import { PokemonV2SupercontestcomboModel, PokemonV2SupercontestcomboModelType } from "./PokemonV2SupercontestcomboModel"
import { PokemonV2SupercontestcomboModelSelector } from "./PokemonV2SupercontestcomboModel.base"
import { PokemonV2SupercontesteffectAggregateModel, PokemonV2SupercontesteffectAggregateModelType } from "./PokemonV2SupercontesteffectAggregateModel"
import { PokemonV2SupercontesteffectAggregateModelSelector } from "./PokemonV2SupercontesteffectAggregateModel.base"
import { PokemonV2SupercontesteffectModel, PokemonV2SupercontesteffectModelType } from "./PokemonV2SupercontesteffectModel"
import { PokemonV2SupercontesteffectModelSelector } from "./PokemonV2SupercontesteffectModel.base"
import { PokemonV2SupercontesteffectflavortextAggregateModel, PokemonV2SupercontesteffectflavortextAggregateModelType } from "./PokemonV2SupercontesteffectflavortextAggregateModel"
import { PokemonV2SupercontesteffectflavortextAggregateModelSelector } from "./PokemonV2SupercontesteffectflavortextAggregateModel.base"
import { PokemonV2SupercontesteffectflavortextModel, PokemonV2SupercontesteffectflavortextModelType } from "./PokemonV2SupercontesteffectflavortextModel"
import { PokemonV2SupercontesteffectflavortextModelSelector } from "./PokemonV2SupercontesteffectflavortextModel.base"
import { PokemonV2TypeAggregateModel, PokemonV2TypeAggregateModelType } from "./PokemonV2TypeAggregateModel"
import { PokemonV2TypeAggregateModelSelector } from "./PokemonV2TypeAggregateModel.base"
import { PokemonV2TypeModel, PokemonV2TypeModelType } from "./PokemonV2TypeModel"
import { PokemonV2TypeModelSelector } from "./PokemonV2TypeModel.base"
import { PokemonV2TypeefficacyAggregateModel, PokemonV2TypeefficacyAggregateModelType } from "./PokemonV2TypeefficacyAggregateModel"
import { PokemonV2TypeefficacyAggregateModelSelector } from "./PokemonV2TypeefficacyAggregateModel.base"
import { PokemonV2TypeefficacyModel, PokemonV2TypeefficacyModelType } from "./PokemonV2TypeefficacyModel"
import { PokemonV2TypeefficacyModelSelector } from "./PokemonV2TypeefficacyModel.base"
import { PokemonV2TypegameindexAggregateModel, PokemonV2TypegameindexAggregateModelType } from "./PokemonV2TypegameindexAggregateModel"
import { PokemonV2TypegameindexAggregateModelSelector } from "./PokemonV2TypegameindexAggregateModel.base"
import { PokemonV2TypegameindexModel, PokemonV2TypegameindexModelType } from "./PokemonV2TypegameindexModel"
import { PokemonV2TypegameindexModelSelector } from "./PokemonV2TypegameindexModel.base"
import { PokemonV2TypenameAggregateModel, PokemonV2TypenameAggregateModelType } from "./PokemonV2TypenameAggregateModel"
import { PokemonV2TypenameAggregateModelSelector } from "./PokemonV2TypenameAggregateModel.base"
import { PokemonV2TypenameModel, PokemonV2TypenameModelType } from "./PokemonV2TypenameModel"
import { PokemonV2TypenameModelSelector } from "./PokemonV2TypenameModel.base"
import { PokemonV2VersionAggregateModel, PokemonV2VersionAggregateModelType } from "./PokemonV2VersionAggregateModel"
import { PokemonV2VersionAggregateModelSelector } from "./PokemonV2VersionAggregateModel.base"
import { PokemonV2VersionModel, PokemonV2VersionModelType } from "./PokemonV2VersionModel"
import { PokemonV2VersionModelSelector } from "./PokemonV2VersionModel.base"
import { PokemonV2VersiongroupAggregateModel, PokemonV2VersiongroupAggregateModelType } from "./PokemonV2VersiongroupAggregateModel"
import { PokemonV2VersiongroupAggregateModelSelector } from "./PokemonV2VersiongroupAggregateModel.base"
import { PokemonV2VersiongroupModel, PokemonV2VersiongroupModelType } from "./PokemonV2VersiongroupModel"
import { PokemonV2VersiongroupModelSelector } from "./PokemonV2VersiongroupModel.base"
import { PokemonV2VersiongroupmovelearnmethodAggregateModel, PokemonV2VersiongroupmovelearnmethodAggregateModelType } from "./PokemonV2VersiongroupmovelearnmethodAggregateModel"
import { PokemonV2VersiongroupmovelearnmethodAggregateModelSelector } from "./PokemonV2VersiongroupmovelearnmethodAggregateModel.base"
import { PokemonV2VersiongroupmovelearnmethodModel, PokemonV2VersiongroupmovelearnmethodModelType } from "./PokemonV2VersiongroupmovelearnmethodModel"
import { PokemonV2VersiongroupmovelearnmethodModelSelector } from "./PokemonV2VersiongroupmovelearnmethodModel.base"
import { PokemonV2VersiongroupregionAggregateModel, PokemonV2VersiongroupregionAggregateModelType } from "./PokemonV2VersiongroupregionAggregateModel"
import { PokemonV2VersiongroupregionAggregateModelSelector } from "./PokemonV2VersiongroupregionAggregateModel.base"
import { PokemonV2VersiongroupregionModel, PokemonV2VersiongroupregionModelType } from "./PokemonV2VersiongroupregionModel"
import { PokemonV2VersiongroupregionModelSelector } from "./PokemonV2VersiongroupregionModel.base"
import { PokemonV2VersionnameAggregateModel, PokemonV2VersionnameAggregateModelType } from "./PokemonV2VersionnameAggregateModel"
import { PokemonV2VersionnameAggregateModelSelector } from "./PokemonV2VersionnameAggregateModel.base"
import { PokemonV2VersionnameModel, PokemonV2VersionnameModelType } from "./PokemonV2VersionnameModel"
import { PokemonV2VersionnameModelSelector } from "./PokemonV2VersionnameModel.base"
import { RootStoreType } from "./index"


/**
 * QueryRootBase
 * auto generated base class for the model QueryRootModel.
 */
export const QueryRootModelBase = ModelBase
  .named('QueryRoot')
  .props({
    __typename: types.optional(types.literal("query_root"), "query_root"),
    /** fetch data from the table: "pokemon_v2_ability" */
    pokemon_v2_ability: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilityModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_ability" */
    pokemon_v2_ability_aggregate: types.union(types.undefined, types.late((): any => PokemonV2AbilityAggregateModel)),
    /** fetch data from the table: "pokemon_v2_ability" using primary key columns */
    pokemon_v2_ability_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityModel)),
    /** fetch data from the table: "pokemon_v2_abilitychange" */
    pokemon_v2_abilitychange: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilitychangeModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_abilitychange" */
    pokemon_v2_abilitychange_aggregate: types.union(types.undefined, types.late((): any => PokemonV2AbilitychangeAggregateModel)),
    /** fetch data from the table: "pokemon_v2_abilitychange" using primary key columns */
    pokemon_v2_abilitychange_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeModel)),
    /** fetch data from the table: "pokemon_v2_abilitychangeeffecttext" */
    pokemon_v2_abilitychangeeffecttext: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilitychangeeffecttextModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_abilitychangeeffecttext" */
    pokemon_v2_abilitychangeeffecttext_aggregate: types.union(types.undefined, types.late((): any => PokemonV2AbilitychangeeffecttextAggregateModel)),
    /** fetch data from the table: "pokemon_v2_abilitychangeeffecttext" using primary key columns */
    pokemon_v2_abilitychangeeffecttext_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeeffecttextModel)),
    /** fetch data from the table: "pokemon_v2_abilityeffecttext" */
    pokemon_v2_abilityeffecttext: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilityeffecttextModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_abilityeffecttext" */
    pokemon_v2_abilityeffecttext_aggregate: types.union(types.undefined, types.late((): any => PokemonV2AbilityeffecttextAggregateModel)),
    /** fetch data from the table: "pokemon_v2_abilityeffecttext" using primary key columns */
    pokemon_v2_abilityeffecttext_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityeffecttextModel)),
    /** fetch data from the table: "pokemon_v2_abilityflavortext" */
    pokemon_v2_abilityflavortext: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilityflavortextModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_abilityflavortext" */
    pokemon_v2_abilityflavortext_aggregate: types.union(types.undefined, types.late((): any => PokemonV2AbilityflavortextAggregateModel)),
    /** fetch data from the table: "pokemon_v2_abilityflavortext" using primary key columns */
    pokemon_v2_abilityflavortext_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityflavortextModel)),
    /** fetch data from the table: "pokemon_v2_abilityname" */
    pokemon_v2_abilityname: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilitynameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_abilityname" */
    pokemon_v2_abilityname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2AbilitynameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_abilityname" using primary key columns */
    pokemon_v2_abilityname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitynameModel)),
    /** fetch data from the table: "pokemon_v2_berry" */
    pokemon_v2_berry: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_berry" */
    pokemon_v2_berry_aggregate: types.union(types.undefined, types.late((): any => PokemonV2BerryAggregateModel)),
    /** fetch data from the table: "pokemon_v2_berry" using primary key columns */
    pokemon_v2_berry_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryModel)),
    /** fetch data from the table: "pokemon_v2_berryfirmness" */
    pokemon_v2_berryfirmness: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryfirmnessModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_berryfirmness" */
    pokemon_v2_berryfirmness_aggregate: types.union(types.undefined, types.late((): any => PokemonV2BerryfirmnessAggregateModel)),
    /** fetch data from the table: "pokemon_v2_berryfirmness" using primary key columns */
    pokemon_v2_berryfirmness_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessModel)),
    /** fetch data from the table: "pokemon_v2_berryfirmnessname" */
    pokemon_v2_berryfirmnessname: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryfirmnessnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_berryfirmnessname" */
    pokemon_v2_berryfirmnessname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2BerryfirmnessnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_berryfirmnessname" using primary key columns */
    pokemon_v2_berryfirmnessname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessnameModel)),
    /** fetch data from the table: "pokemon_v2_berryflavor" */
    pokemon_v2_berryflavor: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryflavorModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_berryflavor" */
    pokemon_v2_berryflavor_aggregate: types.union(types.undefined, types.late((): any => PokemonV2BerryflavorAggregateModel)),
    /** fetch data from the table: "pokemon_v2_berryflavor" using primary key columns */
    pokemon_v2_berryflavor_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavorModel)),
    /** fetch data from the table: "pokemon_v2_berryflavormap" */
    pokemon_v2_berryflavormap: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryflavormapModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_berryflavormap" */
    pokemon_v2_berryflavormap_aggregate: types.union(types.undefined, types.late((): any => PokemonV2BerryflavormapAggregateModel)),
    /** fetch data from the table: "pokemon_v2_berryflavormap" using primary key columns */
    pokemon_v2_berryflavormap_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavormapModel)),
    /** fetch data from the table: "pokemon_v2_berryflavorname" */
    pokemon_v2_berryflavorname: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryflavornameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_berryflavorname" */
    pokemon_v2_berryflavorname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2BerryflavornameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_berryflavorname" using primary key columns */
    pokemon_v2_berryflavorname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavornameModel)),
    /** fetch data from the table: "pokemon_v2_characteristic" */
    pokemon_v2_characteristic: types.union(types.undefined, types.array(types.late((): any => PokemonV2CharacteristicModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_characteristic" */
    pokemon_v2_characteristic_aggregate: types.union(types.undefined, types.late((): any => PokemonV2CharacteristicAggregateModel)),
    /** fetch data from the table: "pokemon_v2_characteristic" using primary key columns */
    pokemon_v2_characteristic_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicModel)),
    /** fetch data from the table: "pokemon_v2_characteristicdescription" */
    pokemon_v2_characteristicdescription: types.union(types.undefined, types.array(types.late((): any => PokemonV2CharacteristicdescriptionModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_characteristicdescription" */
    pokemon_v2_characteristicdescription_aggregate: types.union(types.undefined, types.late((): any => PokemonV2CharacteristicdescriptionAggregateModel)),
    /** fetch data from the table: "pokemon_v2_characteristicdescription" using primary key columns */
    pokemon_v2_characteristicdescription_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicdescriptionModel)),
    /** fetch data from the table: "pokemon_v2_contestcombo" */
    pokemon_v2_contestcombo: types.union(types.undefined, types.array(types.late((): any => PokemonV2ContestcomboModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_contestcombo" */
    pokemon_v2_contestcombo_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ContestcomboAggregateModel)),
    /** fetch data from the table: "pokemon_v2_contestcombo" using primary key columns */
    pokemon_v2_contestcombo_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContestcomboModel)),
    /** fetch data from the table: "pokemon_v2_contesteffect" */
    pokemon_v2_contesteffect: types.union(types.undefined, types.array(types.late((): any => PokemonV2ContesteffectModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_contesteffect" */
    pokemon_v2_contesteffect_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ContesteffectAggregateModel)),
    /** fetch data from the table: "pokemon_v2_contesteffect" using primary key columns */
    pokemon_v2_contesteffect_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectModel)),
    /** fetch data from the table: "pokemon_v2_contesteffecteffecttext" */
    pokemon_v2_contesteffecteffecttext: types.union(types.undefined, types.array(types.late((): any => PokemonV2ContesteffecteffecttextModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_contesteffecteffecttext" */
    pokemon_v2_contesteffecteffecttext_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ContesteffecteffecttextAggregateModel)),
    /** fetch data from the table: "pokemon_v2_contesteffecteffecttext" using primary key columns */
    pokemon_v2_contesteffecteffecttext_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffecteffecttextModel)),
    /** fetch data from the table: "pokemon_v2_contesteffectflavortext" */
    pokemon_v2_contesteffectflavortext: types.union(types.undefined, types.array(types.late((): any => PokemonV2ContesteffectflavortextModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_contesteffectflavortext" */
    pokemon_v2_contesteffectflavortext_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ContesteffectflavortextAggregateModel)),
    /** fetch data from the table: "pokemon_v2_contesteffectflavortext" using primary key columns */
    pokemon_v2_contesteffectflavortext_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectflavortextModel)),
    /** fetch data from the table: "pokemon_v2_contesttype" */
    pokemon_v2_contesttype: types.union(types.undefined, types.array(types.late((): any => PokemonV2ContesttypeModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_contesttype" */
    pokemon_v2_contesttype_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ContesttypeAggregateModel)),
    /** fetch data from the table: "pokemon_v2_contesttype" using primary key columns */
    pokemon_v2_contesttype_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypeModel)),
    /** fetch data from the table: "pokemon_v2_contesttypename" */
    pokemon_v2_contesttypename: types.union(types.undefined, types.array(types.late((): any => PokemonV2ContesttypenameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_contesttypename" */
    pokemon_v2_contesttypename_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ContesttypenameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_contesttypename" using primary key columns */
    pokemon_v2_contesttypename_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypenameModel)),
    /** fetch data from the table: "pokemon_v2_egggroup" */
    pokemon_v2_egggroup: types.union(types.undefined, types.array(types.late((): any => PokemonV2EgggroupModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_egggroup" */
    pokemon_v2_egggroup_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EgggroupAggregateModel)),
    /** fetch data from the table: "pokemon_v2_egggroup" using primary key columns */
    pokemon_v2_egggroup_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupModel)),
    /** fetch data from the table: "pokemon_v2_egggroupname" */
    pokemon_v2_egggroupname: types.union(types.undefined, types.array(types.late((): any => PokemonV2EgggroupnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_egggroupname" */
    pokemon_v2_egggroupname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EgggroupnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_egggroupname" using primary key columns */
    pokemon_v2_egggroupname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupnameModel)),
    /** fetch data from the table: "pokemon_v2_encounter" */
    pokemon_v2_encounter: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_encounter" */
    pokemon_v2_encounter_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncounterAggregateModel)),
    /** fetch data from the table: "pokemon_v2_encounter" using primary key columns */
    pokemon_v2_encounter_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterModel)),
    /** fetch data from the table: "pokemon_v2_encountercondition" */
    pokemon_v2_encountercondition: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterconditionModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_encountercondition" */
    pokemon_v2_encountercondition_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncounterconditionAggregateModel)),
    /** fetch data from the table: "pokemon_v2_encountercondition" using primary key columns */
    pokemon_v2_encountercondition_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionModel)),
    /** fetch data from the table: "pokemon_v2_encounterconditionname" */
    pokemon_v2_encounterconditionname: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterconditionnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_encounterconditionname" */
    pokemon_v2_encounterconditionname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncounterconditionnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_encounterconditionname" using primary key columns */
    pokemon_v2_encounterconditionname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionnameModel)),
    /** fetch data from the table: "pokemon_v2_encounterconditionvalue" */
    pokemon_v2_encounterconditionvalue: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterconditionvalueModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_encounterconditionvalue" */
    pokemon_v2_encounterconditionvalue_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncounterconditionvalueAggregateModel)),
    /** fetch data from the table: "pokemon_v2_encounterconditionvalue" using primary key columns */
    pokemon_v2_encounterconditionvalue_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvalueModel)),
    /** fetch data from the table: "pokemon_v2_encounterconditionvaluemap" */
    pokemon_v2_encounterconditionvaluemap: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterconditionvaluemapModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_encounterconditionvaluemap" */
    pokemon_v2_encounterconditionvaluemap_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncounterconditionvaluemapAggregateModel)),
    /** fetch data from the table: "pokemon_v2_encounterconditionvaluemap" using primary key columns */
    pokemon_v2_encounterconditionvaluemap_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluemapModel)),
    /** fetch data from the table: "pokemon_v2_encounterconditionvaluename" */
    pokemon_v2_encounterconditionvaluename: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterconditionvaluenameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_encounterconditionvaluename" */
    pokemon_v2_encounterconditionvaluename_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncounterconditionvaluenameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_encounterconditionvaluename" using primary key columns */
    pokemon_v2_encounterconditionvaluename_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluenameModel)),
    /** fetch data from the table: "pokemon_v2_encountermethod" */
    pokemon_v2_encountermethod: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncountermethodModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_encountermethod" */
    pokemon_v2_encountermethod_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncountermethodAggregateModel)),
    /** fetch data from the table: "pokemon_v2_encountermethod" using primary key columns */
    pokemon_v2_encountermethod_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodModel)),
    /** fetch data from the table: "pokemon_v2_encountermethodname" */
    pokemon_v2_encountermethodname: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncountermethodnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_encountermethodname" */
    pokemon_v2_encountermethodname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncountermethodnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_encountermethodname" using primary key columns */
    pokemon_v2_encountermethodname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodnameModel)),
    /** fetch data from the table: "pokemon_v2_encounterslot" */
    pokemon_v2_encounterslot: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterslotModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_encounterslot" */
    pokemon_v2_encounterslot_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncounterslotAggregateModel)),
    /** fetch data from the table: "pokemon_v2_encounterslot" using primary key columns */
    pokemon_v2_encounterslot_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterslotModel)),
    /** fetch data from the table: "pokemon_v2_evolutionchain" */
    pokemon_v2_evolutionchain: types.union(types.undefined, types.array(types.late((): any => PokemonV2EvolutionchainModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_evolutionchain" */
    pokemon_v2_evolutionchain_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EvolutionchainAggregateModel)),
    /** fetch data from the table: "pokemon_v2_evolutionchain" using primary key columns */
    pokemon_v2_evolutionchain_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutionchainModel)),
    /** fetch data from the table: "pokemon_v2_evolutiontrigger" */
    pokemon_v2_evolutiontrigger: types.union(types.undefined, types.array(types.late((): any => PokemonV2EvolutiontriggerModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_evolutiontrigger" */
    pokemon_v2_evolutiontrigger_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EvolutiontriggerAggregateModel)),
    /** fetch data from the table: "pokemon_v2_evolutiontrigger" using primary key columns */
    pokemon_v2_evolutiontrigger_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggerModel)),
    /** fetch data from the table: "pokemon_v2_evolutiontriggername" */
    pokemon_v2_evolutiontriggername: types.union(types.undefined, types.array(types.late((): any => PokemonV2EvolutiontriggernameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_evolutiontriggername" */
    pokemon_v2_evolutiontriggername_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EvolutiontriggernameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_evolutiontriggername" using primary key columns */
    pokemon_v2_evolutiontriggername_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggernameModel)),
    /** fetch data from the table: "pokemon_v2_experience" */
    pokemon_v2_experience: types.union(types.undefined, types.array(types.late((): any => PokemonV2ExperienceModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_experience" */
    pokemon_v2_experience_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ExperienceAggregateModel)),
    /** fetch data from the table: "pokemon_v2_experience" using primary key columns */
    pokemon_v2_experience_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ExperienceModel)),
    /** fetch data from the table: "pokemon_v2_gender" */
    pokemon_v2_gender: types.union(types.undefined, types.array(types.late((): any => PokemonV2GenderModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_gender" */
    pokemon_v2_gender_aggregate: types.union(types.undefined, types.late((): any => PokemonV2GenderAggregateModel)),
    /** fetch data from the table: "pokemon_v2_gender" using primary key columns */
    pokemon_v2_gender_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenderModel)),
    /** fetch data from the table: "pokemon_v2_generation" */
    pokemon_v2_generation: types.union(types.undefined, types.array(types.late((): any => PokemonV2GenerationModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_generation" */
    pokemon_v2_generation_aggregate: types.union(types.undefined, types.late((): any => PokemonV2GenerationAggregateModel)),
    /** fetch data from the table: "pokemon_v2_generation" using primary key columns */
    pokemon_v2_generation_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationModel)),
    /** fetch data from the table: "pokemon_v2_generationname" */
    pokemon_v2_generationname: types.union(types.undefined, types.array(types.late((): any => PokemonV2GenerationnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_generationname" */
    pokemon_v2_generationname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2GenerationnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_generationname" using primary key columns */
    pokemon_v2_generationname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationnameModel)),
    /** fetch data from the table: "pokemon_v2_growthrate" */
    pokemon_v2_growthrate: types.union(types.undefined, types.array(types.late((): any => PokemonV2GrowthrateModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_growthrate" */
    pokemon_v2_growthrate_aggregate: types.union(types.undefined, types.late((): any => PokemonV2GrowthrateAggregateModel)),
    /** fetch data from the table: "pokemon_v2_growthrate" using primary key columns */
    pokemon_v2_growthrate_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthrateModel)),
    /** fetch data from the table: "pokemon_v2_growthratedescription" */
    pokemon_v2_growthratedescription: types.union(types.undefined, types.array(types.late((): any => PokemonV2GrowthratedescriptionModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_growthratedescription" */
    pokemon_v2_growthratedescription_aggregate: types.union(types.undefined, types.late((): any => PokemonV2GrowthratedescriptionAggregateModel)),
    /** fetch data from the table: "pokemon_v2_growthratedescription" using primary key columns */
    pokemon_v2_growthratedescription_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthratedescriptionModel)),
    /** fetch data from the table: "pokemon_v2_item" */
    pokemon_v2_item: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_item" */
    pokemon_v2_item_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemAggregateModel)),
    /** fetch data from the table: "pokemon_v2_item" using primary key columns */
    pokemon_v2_item_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemModel)),
    /** fetch data from the table: "pokemon_v2_itemattribute" */
    pokemon_v2_itemattribute: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemattributeModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_itemattribute" */
    pokemon_v2_itemattribute_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemattributeAggregateModel)),
    /** fetch data from the table: "pokemon_v2_itemattribute" using primary key columns */
    pokemon_v2_itemattribute_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributeModel)),
    /** fetch data from the table: "pokemon_v2_itemattributedescription" */
    pokemon_v2_itemattributedescription: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemattributedescriptionModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_itemattributedescription" */
    pokemon_v2_itemattributedescription_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemattributedescriptionAggregateModel)),
    /** fetch data from the table: "pokemon_v2_itemattributedescription" using primary key columns */
    pokemon_v2_itemattributedescription_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributedescriptionModel)),
    /** fetch data from the table: "pokemon_v2_itemattributemap" */
    pokemon_v2_itemattributemap: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemattributemapModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_itemattributemap" */
    pokemon_v2_itemattributemap_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemattributemapAggregateModel)),
    /** fetch data from the table: "pokemon_v2_itemattributemap" using primary key columns */
    pokemon_v2_itemattributemap_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributemapModel)),
    /** fetch data from the table: "pokemon_v2_itemattributename" */
    pokemon_v2_itemattributename: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemattributenameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_itemattributename" */
    pokemon_v2_itemattributename_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemattributenameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_itemattributename" using primary key columns */
    pokemon_v2_itemattributename_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributenameModel)),
    /** fetch data from the table: "pokemon_v2_itemcategory" */
    pokemon_v2_itemcategory: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemcategoryModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_itemcategory" */
    pokemon_v2_itemcategory_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemcategoryAggregateModel)),
    /** fetch data from the table: "pokemon_v2_itemcategory" using primary key columns */
    pokemon_v2_itemcategory_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategoryModel)),
    /** fetch data from the table: "pokemon_v2_itemcategoryname" */
    pokemon_v2_itemcategoryname: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemcategorynameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_itemcategoryname" */
    pokemon_v2_itemcategoryname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemcategorynameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_itemcategoryname" using primary key columns */
    pokemon_v2_itemcategoryname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategorynameModel)),
    /** fetch data from the table: "pokemon_v2_itemeffecttext" */
    pokemon_v2_itemeffecttext: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemeffecttextModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_itemeffecttext" */
    pokemon_v2_itemeffecttext_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemeffecttextAggregateModel)),
    /** fetch data from the table: "pokemon_v2_itemeffecttext" using primary key columns */
    pokemon_v2_itemeffecttext_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemeffecttextModel)),
    /** fetch data from the table: "pokemon_v2_itemflavortext" */
    pokemon_v2_itemflavortext: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemflavortextModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_itemflavortext" */
    pokemon_v2_itemflavortext_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemflavortextAggregateModel)),
    /** fetch data from the table: "pokemon_v2_itemflavortext" using primary key columns */
    pokemon_v2_itemflavortext_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflavortextModel)),
    /** fetch data from the table: "pokemon_v2_itemflingeffect" */
    pokemon_v2_itemflingeffect: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemflingeffectModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_itemflingeffect" */
    pokemon_v2_itemflingeffect_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemflingeffectAggregateModel)),
    /** fetch data from the table: "pokemon_v2_itemflingeffect" using primary key columns */
    pokemon_v2_itemflingeffect_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffectModel)),
    /** fetch data from the table: "pokemon_v2_itemflingeffecteffecttext" */
    pokemon_v2_itemflingeffecteffecttext: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemflingeffecteffecttextModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_itemflingeffecteffecttext" */
    pokemon_v2_itemflingeffecteffecttext_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemflingeffecteffecttextAggregateModel)),
    /** fetch data from the table: "pokemon_v2_itemflingeffecteffecttext" using primary key columns */
    pokemon_v2_itemflingeffecteffecttext_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffecteffecttextModel)),
    /** fetch data from the table: "pokemon_v2_itemgameindex" */
    pokemon_v2_itemgameindex: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemgameindexModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_itemgameindex" */
    pokemon_v2_itemgameindex_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemgameindexAggregateModel)),
    /** fetch data from the table: "pokemon_v2_itemgameindex" using primary key columns */
    pokemon_v2_itemgameindex_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemgameindexModel)),
    /** fetch data from the table: "pokemon_v2_itemname" */
    pokemon_v2_itemname: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_itemname" */
    pokemon_v2_itemname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_itemname" using primary key columns */
    pokemon_v2_itemname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemnameModel)),
    /** fetch data from the table: "pokemon_v2_itempocket" */
    pokemon_v2_itempocket: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItempocketModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_itempocket" */
    pokemon_v2_itempocket_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItempocketAggregateModel)),
    /** fetch data from the table: "pokemon_v2_itempocket" using primary key columns */
    pokemon_v2_itempocket_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketModel)),
    /** fetch data from the table: "pokemon_v2_itempocketname" */
    pokemon_v2_itempocketname: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItempocketnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_itempocketname" */
    pokemon_v2_itempocketname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItempocketnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_itempocketname" using primary key columns */
    pokemon_v2_itempocketname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketnameModel)),
    /** An array relationship */
    pokemon_v2_itemsprites: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemspritesModel))),
    /** An aggregate relationship */
    pokemon_v2_itemsprites_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemspritesAggregateModel)),
    /** fetch data from the table: "pokemon_v2_itemsprites" using primary key columns */
    pokemon_v2_itemsprites_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemspritesModel)),
    /** fetch data from the table: "pokemon_v2_language" */
    pokemon_v2_language: types.union(types.undefined, types.array(types.late((): any => PokemonV2LanguageModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_language" */
    pokemon_v2_language_aggregate: types.union(types.undefined, types.late((): any => PokemonV2LanguageAggregateModel)),
    /** fetch data from the table: "pokemon_v2_language" using primary key columns */
    pokemon_v2_language_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** fetch data from the table: "pokemon_v2_languagename" */
    pokemon_v2_languagename: types.union(types.undefined, types.array(types.late((): any => PokemonV2LanguagenameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_languagename" */
    pokemon_v2_languagename_aggregate: types.union(types.undefined, types.late((): any => PokemonV2LanguagenameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_languagename" using primary key columns */
    pokemon_v2_languagename_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguagenameModel)),
    /** fetch data from the table: "pokemon_v2_location" */
    pokemon_v2_location: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_location" */
    pokemon_v2_location_aggregate: types.union(types.undefined, types.late((): any => PokemonV2LocationAggregateModel)),
    /** fetch data from the table: "pokemon_v2_location" using primary key columns */
    pokemon_v2_location_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationModel)),
    /** fetch data from the table: "pokemon_v2_locationarea" */
    pokemon_v2_locationarea: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationareaModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_locationarea" */
    pokemon_v2_locationarea_aggregate: types.union(types.undefined, types.late((): any => PokemonV2LocationareaAggregateModel)),
    /** fetch data from the table: "pokemon_v2_locationarea" using primary key columns */
    pokemon_v2_locationarea_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaModel)),
    /** fetch data from the table: "pokemon_v2_locationareaencounterrate" */
    pokemon_v2_locationareaencounterrate: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationareaencounterrateModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_locationareaencounterrate" */
    pokemon_v2_locationareaencounterrate_aggregate: types.union(types.undefined, types.late((): any => PokemonV2LocationareaencounterrateAggregateModel)),
    /** fetch data from the table: "pokemon_v2_locationareaencounterrate" using primary key columns */
    pokemon_v2_locationareaencounterrate_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaencounterrateModel)),
    /** fetch data from the table: "pokemon_v2_locationareaname" */
    pokemon_v2_locationareaname: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationareanameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_locationareaname" */
    pokemon_v2_locationareaname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2LocationareanameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_locationareaname" using primary key columns */
    pokemon_v2_locationareaname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareanameModel)),
    /** fetch data from the table: "pokemon_v2_locationgameindex" */
    pokemon_v2_locationgameindex: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationgameindexModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_locationgameindex" */
    pokemon_v2_locationgameindex_aggregate: types.union(types.undefined, types.late((): any => PokemonV2LocationgameindexAggregateModel)),
    /** fetch data from the table: "pokemon_v2_locationgameindex" using primary key columns */
    pokemon_v2_locationgameindex_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationgameindexModel)),
    /** fetch data from the table: "pokemon_v2_locationname" */
    pokemon_v2_locationname: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_locationname" */
    pokemon_v2_locationname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2LocationnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_locationname" using primary key columns */
    pokemon_v2_locationname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationnameModel)),
    /** fetch data from the table: "pokemon_v2_machine" */
    pokemon_v2_machine: types.union(types.undefined, types.array(types.late((): any => PokemonV2MachineModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_machine" */
    pokemon_v2_machine_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MachineAggregateModel)),
    /** fetch data from the table: "pokemon_v2_machine" using primary key columns */
    pokemon_v2_machine_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MachineModel)),
    /** fetch data from the table: "pokemon_v2_move" */
    pokemon_v2_move: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_move" */
    pokemon_v2_move_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveAggregateModel)),
    /** fetch data from the table: "pokemon_v2_move" using primary key columns */
    pokemon_v2_move_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveModel)),
    /** fetch data from the table: "pokemon_v2_moveattribute" */
    pokemon_v2_moveattribute: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveattributeModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_moveattribute" */
    pokemon_v2_moveattribute_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveattributeAggregateModel)),
    /** fetch data from the table: "pokemon_v2_moveattribute" using primary key columns */
    pokemon_v2_moveattribute_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributeModel)),
    /** fetch data from the table: "pokemon_v2_moveattributedescription" */
    pokemon_v2_moveattributedescription: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveattributedescriptionModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_moveattributedescription" */
    pokemon_v2_moveattributedescription_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveattributedescriptionAggregateModel)),
    /** fetch data from the table: "pokemon_v2_moveattributedescription" using primary key columns */
    pokemon_v2_moveattributedescription_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributedescriptionModel)),
    /** fetch data from the table: "pokemon_v2_moveattributemap" */
    pokemon_v2_moveattributemap: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveattributemapModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_moveattributemap" */
    pokemon_v2_moveattributemap_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveattributemapAggregateModel)),
    /** fetch data from the table: "pokemon_v2_moveattributemap" using primary key columns */
    pokemon_v2_moveattributemap_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributemapModel)),
    /** fetch data from the table: "pokemon_v2_moveattributename" */
    pokemon_v2_moveattributename: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveattributenameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_moveattributename" */
    pokemon_v2_moveattributename_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveattributenameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_moveattributename" using primary key columns */
    pokemon_v2_moveattributename_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributenameModel)),
    /** fetch data from the table: "pokemon_v2_movebattlestyle" */
    pokemon_v2_movebattlestyle: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovebattlestyleModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_movebattlestyle" */
    pokemon_v2_movebattlestyle_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovebattlestyleAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movebattlestyle" using primary key columns */
    pokemon_v2_movebattlestyle_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestyleModel)),
    /** fetch data from the table: "pokemon_v2_movebattlestylename" */
    pokemon_v2_movebattlestylename: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovebattlestylenameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_movebattlestylename" */
    pokemon_v2_movebattlestylename_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovebattlestylenameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movebattlestylename" using primary key columns */
    pokemon_v2_movebattlestylename_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestylenameModel)),
    /** fetch data from the table: "pokemon_v2_movechange" */
    pokemon_v2_movechange: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovechangeModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_movechange" */
    pokemon_v2_movechange_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovechangeAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movechange" using primary key columns */
    pokemon_v2_movechange_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovechangeModel)),
    /** fetch data from the table: "pokemon_v2_movedamageclass" */
    pokemon_v2_movedamageclass: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovedamageclassModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_movedamageclass" */
    pokemon_v2_movedamageclass_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovedamageclassAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movedamageclass" using primary key columns */
    pokemon_v2_movedamageclass_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassModel)),
    /** fetch data from the table: "pokemon_v2_movedamageclassdescription" */
    pokemon_v2_movedamageclassdescription: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovedamageclassdescriptionModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_movedamageclassdescription" */
    pokemon_v2_movedamageclassdescription_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovedamageclassdescriptionAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movedamageclassdescription" using primary key columns */
    pokemon_v2_movedamageclassdescription_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassdescriptionModel)),
    /** fetch data from the table: "pokemon_v2_movedamageclassname" */
    pokemon_v2_movedamageclassname: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovedamageclassnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_movedamageclassname" */
    pokemon_v2_movedamageclassname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovedamageclassnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movedamageclassname" using primary key columns */
    pokemon_v2_movedamageclassname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassnameModel)),
    /** fetch data from the table: "pokemon_v2_moveeffect" */
    pokemon_v2_moveeffect: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveeffectModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_moveeffect" */
    pokemon_v2_moveeffect_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveeffectAggregateModel)),
    /** fetch data from the table: "pokemon_v2_moveeffect" using primary key columns */
    pokemon_v2_moveeffect_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectModel)),
    /** fetch data from the table: "pokemon_v2_moveeffectchange" */
    pokemon_v2_moveeffectchange: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveeffectchangeModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_moveeffectchange" */
    pokemon_v2_moveeffectchange_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveeffectchangeAggregateModel)),
    /** fetch data from the table: "pokemon_v2_moveeffectchange" using primary key columns */
    pokemon_v2_moveeffectchange_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeModel)),
    /** fetch data from the table: "pokemon_v2_moveeffectchangeeffecttext" */
    pokemon_v2_moveeffectchangeeffecttext: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveeffectchangeeffecttextModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_moveeffectchangeeffecttext" */
    pokemon_v2_moveeffectchangeeffecttext_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveeffectchangeeffecttextAggregateModel)),
    /** fetch data from the table: "pokemon_v2_moveeffectchangeeffecttext" using primary key columns */
    pokemon_v2_moveeffectchangeeffecttext_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeeffecttextModel)),
    /** fetch data from the table: "pokemon_v2_moveeffecteffecttext" */
    pokemon_v2_moveeffecteffecttext: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveeffecteffecttextModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_moveeffecteffecttext" */
    pokemon_v2_moveeffecteffecttext_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveeffecteffecttextAggregateModel)),
    /** fetch data from the table: "pokemon_v2_moveeffecteffecttext" using primary key columns */
    pokemon_v2_moveeffecteffecttext_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffecteffecttextModel)),
    /** fetch data from the table: "pokemon_v2_moveflavortext" */
    pokemon_v2_moveflavortext: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveflavortextModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_moveflavortext" */
    pokemon_v2_moveflavortext_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveflavortextAggregateModel)),
    /** fetch data from the table: "pokemon_v2_moveflavortext" using primary key columns */
    pokemon_v2_moveflavortext_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveflavortextModel)),
    /** fetch data from the table: "pokemon_v2_movelearnmethod" */
    pokemon_v2_movelearnmethod: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovelearnmethodModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_movelearnmethod" */
    pokemon_v2_movelearnmethod_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovelearnmethodAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movelearnmethod" using primary key columns */
    pokemon_v2_movelearnmethod_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodModel)),
    /** fetch data from the table: "pokemon_v2_movelearnmethoddescription" */
    pokemon_v2_movelearnmethoddescription: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovelearnmethoddescriptionModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_movelearnmethoddescription" */
    pokemon_v2_movelearnmethoddescription_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovelearnmethoddescriptionAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movelearnmethoddescription" using primary key columns */
    pokemon_v2_movelearnmethoddescription_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethoddescriptionModel)),
    /** fetch data from the table: "pokemon_v2_movelearnmethodname" */
    pokemon_v2_movelearnmethodname: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovelearnmethodnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_movelearnmethodname" */
    pokemon_v2_movelearnmethodname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovelearnmethodnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movelearnmethodname" using primary key columns */
    pokemon_v2_movelearnmethodname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodnameModel)),
    /** An array relationship */
    pokemon_v2_movemeta: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovemetaModel))),
    /** An aggregate relationship */
    pokemon_v2_movemeta_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovemetaAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movemeta" using primary key columns */
    pokemon_v2_movemeta_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaModel)),
    /** fetch data from the table: "pokemon_v2_movemetaailment" */
    pokemon_v2_movemetaailment: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovemetaailmentModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_movemetaailment" */
    pokemon_v2_movemetaailment_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovemetaailmentAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movemetaailment" using primary key columns */
    pokemon_v2_movemetaailment_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentModel)),
    /** fetch data from the table: "pokemon_v2_movemetaailmentname" */
    pokemon_v2_movemetaailmentname: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovemetaailmentnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_movemetaailmentname" */
    pokemon_v2_movemetaailmentname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovemetaailmentnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movemetaailmentname" using primary key columns */
    pokemon_v2_movemetaailmentname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentnameModel)),
    /** fetch data from the table: "pokemon_v2_movemetacategory" */
    pokemon_v2_movemetacategory: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovemetacategoryModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_movemetacategory" */
    pokemon_v2_movemetacategory_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovemetacategoryAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movemetacategory" using primary key columns */
    pokemon_v2_movemetacategory_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategoryModel)),
    /** fetch data from the table: "pokemon_v2_movemetacategorydescription" */
    pokemon_v2_movemetacategorydescription: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovemetacategorydescriptionModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_movemetacategorydescription" */
    pokemon_v2_movemetacategorydescription_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovemetacategorydescriptionAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movemetacategorydescription" using primary key columns */
    pokemon_v2_movemetacategorydescription_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategorydescriptionModel)),
    /** fetch data from the table: "pokemon_v2_movemetastatchange" */
    pokemon_v2_movemetastatchange: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovemetastatchangeModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_movemetastatchange" */
    pokemon_v2_movemetastatchange_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovemetastatchangeAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movemetastatchange" using primary key columns */
    pokemon_v2_movemetastatchange_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetastatchangeModel)),
    /** fetch data from the table: "pokemon_v2_movename" */
    pokemon_v2_movename: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovenameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_movename" */
    pokemon_v2_movename_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovenameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movename" using primary key columns */
    pokemon_v2_movename_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovenameModel)),
    /** fetch data from the table: "pokemon_v2_movetarget" */
    pokemon_v2_movetarget: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovetargetModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_movetarget" */
    pokemon_v2_movetarget_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovetargetAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movetarget" using primary key columns */
    pokemon_v2_movetarget_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetModel)),
    /** fetch data from the table: "pokemon_v2_movetargetdescription" */
    pokemon_v2_movetargetdescription: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovetargetdescriptionModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_movetargetdescription" */
    pokemon_v2_movetargetdescription_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovetargetdescriptionAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movetargetdescription" using primary key columns */
    pokemon_v2_movetargetdescription_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetdescriptionModel)),
    /** fetch data from the table: "pokemon_v2_movetargetname" */
    pokemon_v2_movetargetname: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovetargetnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_movetargetname" */
    pokemon_v2_movetargetname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovetargetnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_movetargetname" using primary key columns */
    pokemon_v2_movetargetname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetnameModel)),
    /** fetch data from the table: "pokemon_v2_nature" */
    pokemon_v2_nature: types.union(types.undefined, types.array(types.late((): any => PokemonV2NatureModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_nature" */
    pokemon_v2_nature_aggregate: types.union(types.undefined, types.late((): any => PokemonV2NatureAggregateModel)),
    /** fetch data from the table: "pokemon_v2_nature" using primary key columns */
    pokemon_v2_nature_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2NatureModel)),
    /** fetch data from the table: "pokemon_v2_naturebattlestylepreference" */
    pokemon_v2_naturebattlestylepreference: types.union(types.undefined, types.array(types.late((): any => PokemonV2NaturebattlestylepreferenceModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_naturebattlestylepreference" */
    pokemon_v2_naturebattlestylepreference_aggregate: types.union(types.undefined, types.late((): any => PokemonV2NaturebattlestylepreferenceAggregateModel)),
    /** fetch data from the table: "pokemon_v2_naturebattlestylepreference" using primary key columns */
    pokemon_v2_naturebattlestylepreference_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturebattlestylepreferenceModel)),
    /** fetch data from the table: "pokemon_v2_naturename" */
    pokemon_v2_naturename: types.union(types.undefined, types.array(types.late((): any => PokemonV2NaturenameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_naturename" */
    pokemon_v2_naturename_aggregate: types.union(types.undefined, types.late((): any => PokemonV2NaturenameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_naturename" using primary key columns */
    pokemon_v2_naturename_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturenameModel)),
    /** fetch data from the table: "pokemon_v2_naturepokeathlonstat" */
    pokemon_v2_naturepokeathlonstat: types.union(types.undefined, types.array(types.late((): any => PokemonV2NaturepokeathlonstatModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_naturepokeathlonstat" */
    pokemon_v2_naturepokeathlonstat_aggregate: types.union(types.undefined, types.late((): any => PokemonV2NaturepokeathlonstatAggregateModel)),
    /** fetch data from the table: "pokemon_v2_naturepokeathlonstat" using primary key columns */
    pokemon_v2_naturepokeathlonstat_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturepokeathlonstatModel)),
    /** fetch data from the table: "pokemon_v2_palpark" */
    pokemon_v2_palpark: types.union(types.undefined, types.array(types.late((): any => PokemonV2PalparkModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_palpark" */
    pokemon_v2_palpark_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PalparkAggregateModel)),
    /** fetch data from the table: "pokemon_v2_palpark" using primary key columns */
    pokemon_v2_palpark_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkModel)),
    /** fetch data from the table: "pokemon_v2_palparkarea" */
    pokemon_v2_palparkarea: types.union(types.undefined, types.array(types.late((): any => PokemonV2PalparkareaModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_palparkarea" */
    pokemon_v2_palparkarea_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PalparkareaAggregateModel)),
    /** fetch data from the table: "pokemon_v2_palparkarea" using primary key columns */
    pokemon_v2_palparkarea_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareaModel)),
    /** fetch data from the table: "pokemon_v2_palparkareaname" */
    pokemon_v2_palparkareaname: types.union(types.undefined, types.array(types.late((): any => PokemonV2PalparkareanameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_palparkareaname" */
    pokemon_v2_palparkareaname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PalparkareanameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_palparkareaname" using primary key columns */
    pokemon_v2_palparkareaname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareanameModel)),
    /** fetch data from the table: "pokemon_v2_pokeathlonstat" */
    pokemon_v2_pokeathlonstat: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokeathlonstatModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokeathlonstat" */
    pokemon_v2_pokeathlonstat_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokeathlonstatAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokeathlonstat" using primary key columns */
    pokemon_v2_pokeathlonstat_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatModel)),
    /** fetch data from the table: "pokemon_v2_pokeathlonstatname" */
    pokemon_v2_pokeathlonstatname: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokeathlonstatnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokeathlonstatname" */
    pokemon_v2_pokeathlonstatname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokeathlonstatnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokeathlonstatname" using primary key columns */
    pokemon_v2_pokeathlonstatname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatnameModel)),
    /** fetch data from the table: "pokemon_v2_pokedex" */
    pokemon_v2_pokedex: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokedexModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokedex" */
    pokemon_v2_pokedex_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokedexAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokedex" using primary key columns */
    pokemon_v2_pokedex_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexModel)),
    /** fetch data from the table: "pokemon_v2_pokedexdescription" */
    pokemon_v2_pokedexdescription: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokedexdescriptionModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokedexdescription" */
    pokemon_v2_pokedexdescription_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokedexdescriptionAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokedexdescription" using primary key columns */
    pokemon_v2_pokedexdescription_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexdescriptionModel)),
    /** fetch data from the table: "pokemon_v2_pokedexname" */
    pokemon_v2_pokedexname: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokedexnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokedexname" */
    pokemon_v2_pokedexname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokedexnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokedexname" using primary key columns */
    pokemon_v2_pokedexname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexnameModel)),
    /** fetch data from the table: "pokemon_v2_pokedexversiongroup" */
    pokemon_v2_pokedexversiongroup: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokedexversiongroupModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokedexversiongroup" */
    pokemon_v2_pokedexversiongroup_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokedexversiongroupAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokedexversiongroup" using primary key columns */
    pokemon_v2_pokedexversiongroup_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexversiongroupModel)),
    /** fetch data from the table: "pokemon_v2_pokemon" */
    pokemon_v2_pokemon: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemon" */
    pokemon_v2_pokemon_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemon" using primary key columns */
    pokemon_v2_pokemon_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonModel)),
    /** fetch data from the table: "pokemon_v2_pokemonability" */
    pokemon_v2_pokemonability: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonabilityModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonability" */
    pokemon_v2_pokemonability_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonabilityAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonability" using primary key columns */
    pokemon_v2_pokemonability_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonabilityModel)),
    /** fetch data from the table: "pokemon_v2_pokemoncolor" */
    pokemon_v2_pokemoncolor: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemoncolorModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemoncolor" */
    pokemon_v2_pokemoncolor_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemoncolorAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemoncolor" using primary key columns */
    pokemon_v2_pokemoncolor_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolorModel)),
    /** fetch data from the table: "pokemon_v2_pokemoncolorname" */
    pokemon_v2_pokemoncolorname: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemoncolornameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemoncolorname" */
    pokemon_v2_pokemoncolorname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemoncolornameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemoncolorname" using primary key columns */
    pokemon_v2_pokemoncolorname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolornameModel)),
    /** fetch data from the table: "pokemon_v2_pokemondexnumber" */
    pokemon_v2_pokemondexnumber: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemondexnumberModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemondexnumber" */
    pokemon_v2_pokemondexnumber_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemondexnumberAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemondexnumber" using primary key columns */
    pokemon_v2_pokemondexnumber_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemondexnumberModel)),
    /** fetch data from the table: "pokemon_v2_pokemonegggroup" */
    pokemon_v2_pokemonegggroup: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonegggroupModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonegggroup" */
    pokemon_v2_pokemonegggroup_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonegggroupAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonegggroup" using primary key columns */
    pokemon_v2_pokemonegggroup_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonegggroupModel)),
    /** fetch data from the table: "pokemon_v2_pokemonevolution" */
    pokemon_v2_pokemonevolution: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonevolutionModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonevolution" */
    pokemon_v2_pokemonevolution_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonevolutionAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonevolution" using primary key columns */
    pokemon_v2_pokemonevolution_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonevolutionModel)),
    /** fetch data from the table: "pokemon_v2_pokemonform" */
    pokemon_v2_pokemonform: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonformModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonform" */
    pokemon_v2_pokemonform_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonformAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonform" using primary key columns */
    pokemon_v2_pokemonform_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformModel)),
    /** fetch data from the table: "pokemon_v2_pokemonformgeneration" */
    pokemon_v2_pokemonformgeneration: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonformgenerationModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonformgeneration" */
    pokemon_v2_pokemonformgeneration_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonformgenerationAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonformgeneration" using primary key columns */
    pokemon_v2_pokemonformgeneration_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformgenerationModel)),
    /** fetch data from the table: "pokemon_v2_pokemonformname" */
    pokemon_v2_pokemonformname: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonformnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonformname" */
    pokemon_v2_pokemonformname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonformnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonformname" using primary key columns */
    pokemon_v2_pokemonformname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformnameModel)),
    /** An array relationship */
    pokemon_v2_pokemonformsprites: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonformspritesModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonformsprites_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonformspritesAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonformsprites" using primary key columns */
    pokemon_v2_pokemonformsprites_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformspritesModel)),
    /** fetch data from the table: "pokemon_v2_pokemonformtype" */
    pokemon_v2_pokemonformtype: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonformtypeModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonformtype" */
    pokemon_v2_pokemonformtype_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonformtypeAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonformtype" using primary key columns */
    pokemon_v2_pokemonformtype_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformtypeModel)),
    /** fetch data from the table: "pokemon_v2_pokemongameindex" */
    pokemon_v2_pokemongameindex: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemongameindexModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemongameindex" */
    pokemon_v2_pokemongameindex_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemongameindexAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemongameindex" using primary key columns */
    pokemon_v2_pokemongameindex_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemongameindexModel)),
    /** fetch data from the table: "pokemon_v2_pokemonhabitat" */
    pokemon_v2_pokemonhabitat: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonhabitatModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonhabitat" */
    pokemon_v2_pokemonhabitat_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonhabitatAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonhabitat" using primary key columns */
    pokemon_v2_pokemonhabitat_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatModel)),
    /** fetch data from the table: "pokemon_v2_pokemonhabitatname" */
    pokemon_v2_pokemonhabitatname: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonhabitatnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonhabitatname" */
    pokemon_v2_pokemonhabitatname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonhabitatnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonhabitatname" using primary key columns */
    pokemon_v2_pokemonhabitatname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatnameModel)),
    /** fetch data from the table: "pokemon_v2_pokemonitem" */
    pokemon_v2_pokemonitem: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonitemModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonitem" */
    pokemon_v2_pokemonitem_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonitemAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonitem" using primary key columns */
    pokemon_v2_pokemonitem_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonitemModel)),
    /** fetch data from the table: "pokemon_v2_pokemonmove" */
    pokemon_v2_pokemonmove: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonmoveModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonmove" */
    pokemon_v2_pokemonmove_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonmoveAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonmove" using primary key columns */
    pokemon_v2_pokemonmove_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonmoveModel)),
    /** fetch data from the table: "pokemon_v2_pokemonshape" */
    pokemon_v2_pokemonshape: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonshapeModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonshape" */
    pokemon_v2_pokemonshape_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonshapeAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonshape" using primary key columns */
    pokemon_v2_pokemonshape_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapeModel)),
    /** fetch data from the table: "pokemon_v2_pokemonshapename" */
    pokemon_v2_pokemonshapename: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonshapenameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonshapename" */
    pokemon_v2_pokemonshapename_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonshapenameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonshapename" using primary key columns */
    pokemon_v2_pokemonshapename_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapenameModel)),
    /** An array relationship */
    pokemon_v2_pokemonspecies: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonspecies_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonspeciesAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonspecies" using primary key columns */
    pokemon_v2_pokemonspecies_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesModel)),
    /** fetch data from the table: "pokemon_v2_pokemonspeciesdescription" */
    pokemon_v2_pokemonspeciesdescription: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesdescriptionModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonspeciesdescription" */
    pokemon_v2_pokemonspeciesdescription_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonspeciesdescriptionAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonspeciesdescription" using primary key columns */
    pokemon_v2_pokemonspeciesdescription_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesdescriptionModel)),
    /** fetch data from the table: "pokemon_v2_pokemonspeciesflavortext" */
    pokemon_v2_pokemonspeciesflavortext: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesflavortextModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonspeciesflavortext" */
    pokemon_v2_pokemonspeciesflavortext_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonspeciesflavortextAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonspeciesflavortext" using primary key columns */
    pokemon_v2_pokemonspeciesflavortext_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesflavortextModel)),
    /** fetch data from the table: "pokemon_v2_pokemonspeciesname" */
    pokemon_v2_pokemonspeciesname: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonspeciesname" */
    pokemon_v2_pokemonspeciesname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonspeciesnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonspeciesname" using primary key columns */
    pokemon_v2_pokemonspeciesname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesnameModel)),
    /** An array relationship */
    pokemon_v2_pokemonsprites: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspritesModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonsprites_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonspritesAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonsprites" using primary key columns */
    pokemon_v2_pokemonsprites_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspritesModel)),
    /** fetch data from the table: "pokemon_v2_pokemonstat" */
    pokemon_v2_pokemonstat: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonstatModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonstat" */
    pokemon_v2_pokemonstat_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonstatAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemonstat" using primary key columns */
    pokemon_v2_pokemonstat_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonstatModel)),
    /** fetch data from the table: "pokemon_v2_pokemontype" */
    pokemon_v2_pokemontype: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemontypeModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemontype" */
    pokemon_v2_pokemontype_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemontypeAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemontype" using primary key columns */
    pokemon_v2_pokemontype_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypeModel)),
    /** fetch data from the table: "pokemon_v2_pokemontypepast" */
    pokemon_v2_pokemontypepast: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemontypepastModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemontypepast" */
    pokemon_v2_pokemontypepast_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemontypepastAggregateModel)),
    /** fetch data from the table: "pokemon_v2_pokemontypepast" using primary key columns */
    pokemon_v2_pokemontypepast_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypepastModel)),
    /** fetch data from the table: "pokemon_v2_region" */
    pokemon_v2_region: types.union(types.undefined, types.array(types.late((): any => PokemonV2RegionModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_region" */
    pokemon_v2_region_aggregate: types.union(types.undefined, types.late((): any => PokemonV2RegionAggregateModel)),
    /** fetch data from the table: "pokemon_v2_region" using primary key columns */
    pokemon_v2_region_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionModel)),
    /** fetch data from the table: "pokemon_v2_regionname" */
    pokemon_v2_regionname: types.union(types.undefined, types.array(types.late((): any => PokemonV2RegionnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_regionname" */
    pokemon_v2_regionname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2RegionnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_regionname" using primary key columns */
    pokemon_v2_regionname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionnameModel)),
    /** fetch data from the table: "pokemon_v2_stat" */
    pokemon_v2_stat: types.union(types.undefined, types.array(types.late((): any => PokemonV2StatModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_stat" */
    pokemon_v2_stat_aggregate: types.union(types.undefined, types.late((): any => PokemonV2StatAggregateModel)),
    /** fetch data from the table: "pokemon_v2_stat" using primary key columns */
    pokemon_v2_stat_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatModel)),
    /** fetch data from the table: "pokemon_v2_statname" */
    pokemon_v2_statname: types.union(types.undefined, types.array(types.late((): any => PokemonV2StatnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_statname" */
    pokemon_v2_statname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2StatnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_statname" using primary key columns */
    pokemon_v2_statname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatnameModel)),
    /** fetch data from the table: "pokemon_v2_supercontestcombo" */
    pokemon_v2_supercontestcombo: types.union(types.undefined, types.array(types.late((): any => PokemonV2SupercontestcomboModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_supercontestcombo" */
    pokemon_v2_supercontestcombo_aggregate: types.union(types.undefined, types.late((): any => PokemonV2SupercontestcomboAggregateModel)),
    /** fetch data from the table: "pokemon_v2_supercontestcombo" using primary key columns */
    pokemon_v2_supercontestcombo_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontestcomboModel)),
    /** fetch data from the table: "pokemon_v2_supercontesteffect" */
    pokemon_v2_supercontesteffect: types.union(types.undefined, types.array(types.late((): any => PokemonV2SupercontesteffectModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_supercontesteffect" */
    pokemon_v2_supercontesteffect_aggregate: types.union(types.undefined, types.late((): any => PokemonV2SupercontesteffectAggregateModel)),
    /** fetch data from the table: "pokemon_v2_supercontesteffect" using primary key columns */
    pokemon_v2_supercontesteffect_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectModel)),
    /** fetch data from the table: "pokemon_v2_supercontesteffectflavortext" */
    pokemon_v2_supercontesteffectflavortext: types.union(types.undefined, types.array(types.late((): any => PokemonV2SupercontesteffectflavortextModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_supercontesteffectflavortext" */
    pokemon_v2_supercontesteffectflavortext_aggregate: types.union(types.undefined, types.late((): any => PokemonV2SupercontesteffectflavortextAggregateModel)),
    /** fetch data from the table: "pokemon_v2_supercontesteffectflavortext" using primary key columns */
    pokemon_v2_supercontesteffectflavortext_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectflavortextModel)),
    /** fetch data from the table: "pokemon_v2_type" */
    pokemon_v2_type: types.union(types.undefined, types.array(types.late((): any => PokemonV2TypeModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_type" */
    pokemon_v2_type_aggregate: types.union(types.undefined, types.late((): any => PokemonV2TypeAggregateModel)),
    /** fetch data from the table: "pokemon_v2_type" using primary key columns */
    pokemon_v2_type_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeModel)),
    /** fetch data from the table: "pokemon_v2_typeefficacy" */
    pokemon_v2_typeefficacy: types.union(types.undefined, types.array(types.late((): any => PokemonV2TypeefficacyModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_typeefficacy" */
    pokemon_v2_typeefficacy_aggregate: types.union(types.undefined, types.late((): any => PokemonV2TypeefficacyAggregateModel)),
    /** fetch data from the table: "pokemon_v2_typeefficacy" using primary key columns */
    pokemon_v2_typeefficacy_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeefficacyModel)),
    /** fetch data from the table: "pokemon_v2_typegameindex" */
    pokemon_v2_typegameindex: types.union(types.undefined, types.array(types.late((): any => PokemonV2TypegameindexModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_typegameindex" */
    pokemon_v2_typegameindex_aggregate: types.union(types.undefined, types.late((): any => PokemonV2TypegameindexAggregateModel)),
    /** fetch data from the table: "pokemon_v2_typegameindex" using primary key columns */
    pokemon_v2_typegameindex_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypegameindexModel)),
    /** fetch data from the table: "pokemon_v2_typename" */
    pokemon_v2_typename: types.union(types.undefined, types.array(types.late((): any => PokemonV2TypenameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_typename" */
    pokemon_v2_typename_aggregate: types.union(types.undefined, types.late((): any => PokemonV2TypenameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_typename" using primary key columns */
    pokemon_v2_typename_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypenameModel)),
    /** fetch data from the table: "pokemon_v2_version" */
    pokemon_v2_version: types.union(types.undefined, types.array(types.late((): any => PokemonV2VersionModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_version" */
    pokemon_v2_version_aggregate: types.union(types.undefined, types.late((): any => PokemonV2VersionAggregateModel)),
    /** fetch data from the table: "pokemon_v2_version" using primary key columns */
    pokemon_v2_version_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionModel)),
    /** fetch data from the table: "pokemon_v2_versiongroup" */
    pokemon_v2_versiongroup: types.union(types.undefined, types.array(types.late((): any => PokemonV2VersiongroupModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_versiongroup" */
    pokemon_v2_versiongroup_aggregate: types.union(types.undefined, types.late((): any => PokemonV2VersiongroupAggregateModel)),
    /** fetch data from the table: "pokemon_v2_versiongroup" using primary key columns */
    pokemon_v2_versiongroup_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupModel)),
    /** fetch data from the table: "pokemon_v2_versiongroupmovelearnmethod" */
    pokemon_v2_versiongroupmovelearnmethod: types.union(types.undefined, types.array(types.late((): any => PokemonV2VersiongroupmovelearnmethodModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_versiongroupmovelearnmethod" */
    pokemon_v2_versiongroupmovelearnmethod_aggregate: types.union(types.undefined, types.late((): any => PokemonV2VersiongroupmovelearnmethodAggregateModel)),
    /** fetch data from the table: "pokemon_v2_versiongroupmovelearnmethod" using primary key columns */
    pokemon_v2_versiongroupmovelearnmethod_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupmovelearnmethodModel)),
    /** fetch data from the table: "pokemon_v2_versiongroupregion" */
    pokemon_v2_versiongroupregion: types.union(types.undefined, types.array(types.late((): any => PokemonV2VersiongroupregionModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_versiongroupregion" */
    pokemon_v2_versiongroupregion_aggregate: types.union(types.undefined, types.late((): any => PokemonV2VersiongroupregionAggregateModel)),
    /** fetch data from the table: "pokemon_v2_versiongroupregion" using primary key columns */
    pokemon_v2_versiongroupregion_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupregionModel)),
    /** fetch data from the table: "pokemon_v2_versionname" */
    pokemon_v2_versionname: types.union(types.undefined, types.array(types.late((): any => PokemonV2VersionnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_versionname" */
    pokemon_v2_versionname_aggregate: types.union(types.undefined, types.late((): any => PokemonV2VersionnameAggregateModel)),
    /** fetch data from the table: "pokemon_v2_versionname" using primary key columns */
    pokemon_v2_versionname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionnameModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class QueryRootModelSelector extends QueryBuilder {
  pokemon_v2_ability(builder?: string | PokemonV2AbilityModelSelector | ((selector: PokemonV2AbilityModelSelector) => PokemonV2AbilityModelSelector)) { return this.__child(`pokemon_v2_ability`, PokemonV2AbilityModelSelector, builder) }
  pokemon_v2_ability_aggregate(builder?: string | PokemonV2AbilityAggregateModelSelector | ((selector: PokemonV2AbilityAggregateModelSelector) => PokemonV2AbilityAggregateModelSelector)) { return this.__child(`pokemon_v2_ability_aggregate`, PokemonV2AbilityAggregateModelSelector, builder) }
  pokemon_v2_ability_by_pk(builder?: string | PokemonV2AbilityModelSelector | ((selector: PokemonV2AbilityModelSelector) => PokemonV2AbilityModelSelector)) { return this.__child(`pokemon_v2_ability_by_pk`, PokemonV2AbilityModelSelector, builder) }
  pokemon_v2_abilitychange(builder?: string | PokemonV2AbilitychangeModelSelector | ((selector: PokemonV2AbilitychangeModelSelector) => PokemonV2AbilitychangeModelSelector)) { return this.__child(`pokemon_v2_abilitychange`, PokemonV2AbilitychangeModelSelector, builder) }
  pokemon_v2_abilitychange_aggregate(builder?: string | PokemonV2AbilitychangeAggregateModelSelector | ((selector: PokemonV2AbilitychangeAggregateModelSelector) => PokemonV2AbilitychangeAggregateModelSelector)) { return this.__child(`pokemon_v2_abilitychange_aggregate`, PokemonV2AbilitychangeAggregateModelSelector, builder) }
  pokemon_v2_abilitychange_by_pk(builder?: string | PokemonV2AbilitychangeModelSelector | ((selector: PokemonV2AbilitychangeModelSelector) => PokemonV2AbilitychangeModelSelector)) { return this.__child(`pokemon_v2_abilitychange_by_pk`, PokemonV2AbilitychangeModelSelector, builder) }
  pokemon_v2_abilitychangeeffecttext(builder?: string | PokemonV2AbilitychangeeffecttextModelSelector | ((selector: PokemonV2AbilitychangeeffecttextModelSelector) => PokemonV2AbilitychangeeffecttextModelSelector)) { return this.__child(`pokemon_v2_abilitychangeeffecttext`, PokemonV2AbilitychangeeffecttextModelSelector, builder) }
  pokemon_v2_abilitychangeeffecttext_aggregate(builder?: string | PokemonV2AbilitychangeeffecttextAggregateModelSelector | ((selector: PokemonV2AbilitychangeeffecttextAggregateModelSelector) => PokemonV2AbilitychangeeffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_abilitychangeeffecttext_aggregate`, PokemonV2AbilitychangeeffecttextAggregateModelSelector, builder) }
  pokemon_v2_abilitychangeeffecttext_by_pk(builder?: string | PokemonV2AbilitychangeeffecttextModelSelector | ((selector: PokemonV2AbilitychangeeffecttextModelSelector) => PokemonV2AbilitychangeeffecttextModelSelector)) { return this.__child(`pokemon_v2_abilitychangeeffecttext_by_pk`, PokemonV2AbilitychangeeffecttextModelSelector, builder) }
  pokemon_v2_abilityeffecttext(builder?: string | PokemonV2AbilityeffecttextModelSelector | ((selector: PokemonV2AbilityeffecttextModelSelector) => PokemonV2AbilityeffecttextModelSelector)) { return this.__child(`pokemon_v2_abilityeffecttext`, PokemonV2AbilityeffecttextModelSelector, builder) }
  pokemon_v2_abilityeffecttext_aggregate(builder?: string | PokemonV2AbilityeffecttextAggregateModelSelector | ((selector: PokemonV2AbilityeffecttextAggregateModelSelector) => PokemonV2AbilityeffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_abilityeffecttext_aggregate`, PokemonV2AbilityeffecttextAggregateModelSelector, builder) }
  pokemon_v2_abilityeffecttext_by_pk(builder?: string | PokemonV2AbilityeffecttextModelSelector | ((selector: PokemonV2AbilityeffecttextModelSelector) => PokemonV2AbilityeffecttextModelSelector)) { return this.__child(`pokemon_v2_abilityeffecttext_by_pk`, PokemonV2AbilityeffecttextModelSelector, builder) }
  pokemon_v2_abilityflavortext(builder?: string | PokemonV2AbilityflavortextModelSelector | ((selector: PokemonV2AbilityflavortextModelSelector) => PokemonV2AbilityflavortextModelSelector)) { return this.__child(`pokemon_v2_abilityflavortext`, PokemonV2AbilityflavortextModelSelector, builder) }
  pokemon_v2_abilityflavortext_aggregate(builder?: string | PokemonV2AbilityflavortextAggregateModelSelector | ((selector: PokemonV2AbilityflavortextAggregateModelSelector) => PokemonV2AbilityflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_abilityflavortext_aggregate`, PokemonV2AbilityflavortextAggregateModelSelector, builder) }
  pokemon_v2_abilityflavortext_by_pk(builder?: string | PokemonV2AbilityflavortextModelSelector | ((selector: PokemonV2AbilityflavortextModelSelector) => PokemonV2AbilityflavortextModelSelector)) { return this.__child(`pokemon_v2_abilityflavortext_by_pk`, PokemonV2AbilityflavortextModelSelector, builder) }
  pokemon_v2_abilityname(builder?: string | PokemonV2AbilitynameModelSelector | ((selector: PokemonV2AbilitynameModelSelector) => PokemonV2AbilitynameModelSelector)) { return this.__child(`pokemon_v2_abilityname`, PokemonV2AbilitynameModelSelector, builder) }
  pokemon_v2_abilityname_aggregate(builder?: string | PokemonV2AbilitynameAggregateModelSelector | ((selector: PokemonV2AbilitynameAggregateModelSelector) => PokemonV2AbilitynameAggregateModelSelector)) { return this.__child(`pokemon_v2_abilityname_aggregate`, PokemonV2AbilitynameAggregateModelSelector, builder) }
  pokemon_v2_abilityname_by_pk(builder?: string | PokemonV2AbilitynameModelSelector | ((selector: PokemonV2AbilitynameModelSelector) => PokemonV2AbilitynameModelSelector)) { return this.__child(`pokemon_v2_abilityname_by_pk`, PokemonV2AbilitynameModelSelector, builder) }
  pokemon_v2_berry(builder?: string | PokemonV2BerryModelSelector | ((selector: PokemonV2BerryModelSelector) => PokemonV2BerryModelSelector)) { return this.__child(`pokemon_v2_berry`, PokemonV2BerryModelSelector, builder) }
  pokemon_v2_berry_aggregate(builder?: string | PokemonV2BerryAggregateModelSelector | ((selector: PokemonV2BerryAggregateModelSelector) => PokemonV2BerryAggregateModelSelector)) { return this.__child(`pokemon_v2_berry_aggregate`, PokemonV2BerryAggregateModelSelector, builder) }
  pokemon_v2_berry_by_pk(builder?: string | PokemonV2BerryModelSelector | ((selector: PokemonV2BerryModelSelector) => PokemonV2BerryModelSelector)) { return this.__child(`pokemon_v2_berry_by_pk`, PokemonV2BerryModelSelector, builder) }
  pokemon_v2_berryfirmness(builder?: string | PokemonV2BerryfirmnessModelSelector | ((selector: PokemonV2BerryfirmnessModelSelector) => PokemonV2BerryfirmnessModelSelector)) { return this.__child(`pokemon_v2_berryfirmness`, PokemonV2BerryfirmnessModelSelector, builder) }
  pokemon_v2_berryfirmness_aggregate(builder?: string | PokemonV2BerryfirmnessAggregateModelSelector | ((selector: PokemonV2BerryfirmnessAggregateModelSelector) => PokemonV2BerryfirmnessAggregateModelSelector)) { return this.__child(`pokemon_v2_berryfirmness_aggregate`, PokemonV2BerryfirmnessAggregateModelSelector, builder) }
  pokemon_v2_berryfirmness_by_pk(builder?: string | PokemonV2BerryfirmnessModelSelector | ((selector: PokemonV2BerryfirmnessModelSelector) => PokemonV2BerryfirmnessModelSelector)) { return this.__child(`pokemon_v2_berryfirmness_by_pk`, PokemonV2BerryfirmnessModelSelector, builder) }
  pokemon_v2_berryfirmnessname(builder?: string | PokemonV2BerryfirmnessnameModelSelector | ((selector: PokemonV2BerryfirmnessnameModelSelector) => PokemonV2BerryfirmnessnameModelSelector)) { return this.__child(`pokemon_v2_berryfirmnessname`, PokemonV2BerryfirmnessnameModelSelector, builder) }
  pokemon_v2_berryfirmnessname_aggregate(builder?: string | PokemonV2BerryfirmnessnameAggregateModelSelector | ((selector: PokemonV2BerryfirmnessnameAggregateModelSelector) => PokemonV2BerryfirmnessnameAggregateModelSelector)) { return this.__child(`pokemon_v2_berryfirmnessname_aggregate`, PokemonV2BerryfirmnessnameAggregateModelSelector, builder) }
  pokemon_v2_berryfirmnessname_by_pk(builder?: string | PokemonV2BerryfirmnessnameModelSelector | ((selector: PokemonV2BerryfirmnessnameModelSelector) => PokemonV2BerryfirmnessnameModelSelector)) { return this.__child(`pokemon_v2_berryfirmnessname_by_pk`, PokemonV2BerryfirmnessnameModelSelector, builder) }
  pokemon_v2_berryflavor(builder?: string | PokemonV2BerryflavorModelSelector | ((selector: PokemonV2BerryflavorModelSelector) => PokemonV2BerryflavorModelSelector)) { return this.__child(`pokemon_v2_berryflavor`, PokemonV2BerryflavorModelSelector, builder) }
  pokemon_v2_berryflavor_aggregate(builder?: string | PokemonV2BerryflavorAggregateModelSelector | ((selector: PokemonV2BerryflavorAggregateModelSelector) => PokemonV2BerryflavorAggregateModelSelector)) { return this.__child(`pokemon_v2_berryflavor_aggregate`, PokemonV2BerryflavorAggregateModelSelector, builder) }
  pokemon_v2_berryflavor_by_pk(builder?: string | PokemonV2BerryflavorModelSelector | ((selector: PokemonV2BerryflavorModelSelector) => PokemonV2BerryflavorModelSelector)) { return this.__child(`pokemon_v2_berryflavor_by_pk`, PokemonV2BerryflavorModelSelector, builder) }
  pokemon_v2_berryflavormap(builder?: string | PokemonV2BerryflavormapModelSelector | ((selector: PokemonV2BerryflavormapModelSelector) => PokemonV2BerryflavormapModelSelector)) { return this.__child(`pokemon_v2_berryflavormap`, PokemonV2BerryflavormapModelSelector, builder) }
  pokemon_v2_berryflavormap_aggregate(builder?: string | PokemonV2BerryflavormapAggregateModelSelector | ((selector: PokemonV2BerryflavormapAggregateModelSelector) => PokemonV2BerryflavormapAggregateModelSelector)) { return this.__child(`pokemon_v2_berryflavormap_aggregate`, PokemonV2BerryflavormapAggregateModelSelector, builder) }
  pokemon_v2_berryflavormap_by_pk(builder?: string | PokemonV2BerryflavormapModelSelector | ((selector: PokemonV2BerryflavormapModelSelector) => PokemonV2BerryflavormapModelSelector)) { return this.__child(`pokemon_v2_berryflavormap_by_pk`, PokemonV2BerryflavormapModelSelector, builder) }
  pokemon_v2_berryflavorname(builder?: string | PokemonV2BerryflavornameModelSelector | ((selector: PokemonV2BerryflavornameModelSelector) => PokemonV2BerryflavornameModelSelector)) { return this.__child(`pokemon_v2_berryflavorname`, PokemonV2BerryflavornameModelSelector, builder) }
  pokemon_v2_berryflavorname_aggregate(builder?: string | PokemonV2BerryflavornameAggregateModelSelector | ((selector: PokemonV2BerryflavornameAggregateModelSelector) => PokemonV2BerryflavornameAggregateModelSelector)) { return this.__child(`pokemon_v2_berryflavorname_aggregate`, PokemonV2BerryflavornameAggregateModelSelector, builder) }
  pokemon_v2_berryflavorname_by_pk(builder?: string | PokemonV2BerryflavornameModelSelector | ((selector: PokemonV2BerryflavornameModelSelector) => PokemonV2BerryflavornameModelSelector)) { return this.__child(`pokemon_v2_berryflavorname_by_pk`, PokemonV2BerryflavornameModelSelector, builder) }
  pokemon_v2_characteristic(builder?: string | PokemonV2CharacteristicModelSelector | ((selector: PokemonV2CharacteristicModelSelector) => PokemonV2CharacteristicModelSelector)) { return this.__child(`pokemon_v2_characteristic`, PokemonV2CharacteristicModelSelector, builder) }
  pokemon_v2_characteristic_aggregate(builder?: string | PokemonV2CharacteristicAggregateModelSelector | ((selector: PokemonV2CharacteristicAggregateModelSelector) => PokemonV2CharacteristicAggregateModelSelector)) { return this.__child(`pokemon_v2_characteristic_aggregate`, PokemonV2CharacteristicAggregateModelSelector, builder) }
  pokemon_v2_characteristic_by_pk(builder?: string | PokemonV2CharacteristicModelSelector | ((selector: PokemonV2CharacteristicModelSelector) => PokemonV2CharacteristicModelSelector)) { return this.__child(`pokemon_v2_characteristic_by_pk`, PokemonV2CharacteristicModelSelector, builder) }
  pokemon_v2_characteristicdescription(builder?: string | PokemonV2CharacteristicdescriptionModelSelector | ((selector: PokemonV2CharacteristicdescriptionModelSelector) => PokemonV2CharacteristicdescriptionModelSelector)) { return this.__child(`pokemon_v2_characteristicdescription`, PokemonV2CharacteristicdescriptionModelSelector, builder) }
  pokemon_v2_characteristicdescription_aggregate(builder?: string | PokemonV2CharacteristicdescriptionAggregateModelSelector | ((selector: PokemonV2CharacteristicdescriptionAggregateModelSelector) => PokemonV2CharacteristicdescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_characteristicdescription_aggregate`, PokemonV2CharacteristicdescriptionAggregateModelSelector, builder) }
  pokemon_v2_characteristicdescription_by_pk(builder?: string | PokemonV2CharacteristicdescriptionModelSelector | ((selector: PokemonV2CharacteristicdescriptionModelSelector) => PokemonV2CharacteristicdescriptionModelSelector)) { return this.__child(`pokemon_v2_characteristicdescription_by_pk`, PokemonV2CharacteristicdescriptionModelSelector, builder) }
  pokemon_v2_contestcombo(builder?: string | PokemonV2ContestcomboModelSelector | ((selector: PokemonV2ContestcomboModelSelector) => PokemonV2ContestcomboModelSelector)) { return this.__child(`pokemon_v2_contestcombo`, PokemonV2ContestcomboModelSelector, builder) }
  pokemon_v2_contestcombo_aggregate(builder?: string | PokemonV2ContestcomboAggregateModelSelector | ((selector: PokemonV2ContestcomboAggregateModelSelector) => PokemonV2ContestcomboAggregateModelSelector)) { return this.__child(`pokemon_v2_contestcombo_aggregate`, PokemonV2ContestcomboAggregateModelSelector, builder) }
  pokemon_v2_contestcombo_by_pk(builder?: string | PokemonV2ContestcomboModelSelector | ((selector: PokemonV2ContestcomboModelSelector) => PokemonV2ContestcomboModelSelector)) { return this.__child(`pokemon_v2_contestcombo_by_pk`, PokemonV2ContestcomboModelSelector, builder) }
  pokemon_v2_contesteffect(builder?: string | PokemonV2ContesteffectModelSelector | ((selector: PokemonV2ContesteffectModelSelector) => PokemonV2ContesteffectModelSelector)) { return this.__child(`pokemon_v2_contesteffect`, PokemonV2ContesteffectModelSelector, builder) }
  pokemon_v2_contesteffect_aggregate(builder?: string | PokemonV2ContesteffectAggregateModelSelector | ((selector: PokemonV2ContesteffectAggregateModelSelector) => PokemonV2ContesteffectAggregateModelSelector)) { return this.__child(`pokemon_v2_contesteffect_aggregate`, PokemonV2ContesteffectAggregateModelSelector, builder) }
  pokemon_v2_contesteffect_by_pk(builder?: string | PokemonV2ContesteffectModelSelector | ((selector: PokemonV2ContesteffectModelSelector) => PokemonV2ContesteffectModelSelector)) { return this.__child(`pokemon_v2_contesteffect_by_pk`, PokemonV2ContesteffectModelSelector, builder) }
  pokemon_v2_contesteffecteffecttext(builder?: string | PokemonV2ContesteffecteffecttextModelSelector | ((selector: PokemonV2ContesteffecteffecttextModelSelector) => PokemonV2ContesteffecteffecttextModelSelector)) { return this.__child(`pokemon_v2_contesteffecteffecttext`, PokemonV2ContesteffecteffecttextModelSelector, builder) }
  pokemon_v2_contesteffecteffecttext_aggregate(builder?: string | PokemonV2ContesteffecteffecttextAggregateModelSelector | ((selector: PokemonV2ContesteffecteffecttextAggregateModelSelector) => PokemonV2ContesteffecteffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_contesteffecteffecttext_aggregate`, PokemonV2ContesteffecteffecttextAggregateModelSelector, builder) }
  pokemon_v2_contesteffecteffecttext_by_pk(builder?: string | PokemonV2ContesteffecteffecttextModelSelector | ((selector: PokemonV2ContesteffecteffecttextModelSelector) => PokemonV2ContesteffecteffecttextModelSelector)) { return this.__child(`pokemon_v2_contesteffecteffecttext_by_pk`, PokemonV2ContesteffecteffecttextModelSelector, builder) }
  pokemon_v2_contesteffectflavortext(builder?: string | PokemonV2ContesteffectflavortextModelSelector | ((selector: PokemonV2ContesteffectflavortextModelSelector) => PokemonV2ContesteffectflavortextModelSelector)) { return this.__child(`pokemon_v2_contesteffectflavortext`, PokemonV2ContesteffectflavortextModelSelector, builder) }
  pokemon_v2_contesteffectflavortext_aggregate(builder?: string | PokemonV2ContesteffectflavortextAggregateModelSelector | ((selector: PokemonV2ContesteffectflavortextAggregateModelSelector) => PokemonV2ContesteffectflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_contesteffectflavortext_aggregate`, PokemonV2ContesteffectflavortextAggregateModelSelector, builder) }
  pokemon_v2_contesteffectflavortext_by_pk(builder?: string | PokemonV2ContesteffectflavortextModelSelector | ((selector: PokemonV2ContesteffectflavortextModelSelector) => PokemonV2ContesteffectflavortextModelSelector)) { return this.__child(`pokemon_v2_contesteffectflavortext_by_pk`, PokemonV2ContesteffectflavortextModelSelector, builder) }
  pokemon_v2_contesttype(builder?: string | PokemonV2ContesttypeModelSelector | ((selector: PokemonV2ContesttypeModelSelector) => PokemonV2ContesttypeModelSelector)) { return this.__child(`pokemon_v2_contesttype`, PokemonV2ContesttypeModelSelector, builder) }
  pokemon_v2_contesttype_aggregate(builder?: string | PokemonV2ContesttypeAggregateModelSelector | ((selector: PokemonV2ContesttypeAggregateModelSelector) => PokemonV2ContesttypeAggregateModelSelector)) { return this.__child(`pokemon_v2_contesttype_aggregate`, PokemonV2ContesttypeAggregateModelSelector, builder) }
  pokemon_v2_contesttype_by_pk(builder?: string | PokemonV2ContesttypeModelSelector | ((selector: PokemonV2ContesttypeModelSelector) => PokemonV2ContesttypeModelSelector)) { return this.__child(`pokemon_v2_contesttype_by_pk`, PokemonV2ContesttypeModelSelector, builder) }
  pokemon_v2_contesttypename(builder?: string | PokemonV2ContesttypenameModelSelector | ((selector: PokemonV2ContesttypenameModelSelector) => PokemonV2ContesttypenameModelSelector)) { return this.__child(`pokemon_v2_contesttypename`, PokemonV2ContesttypenameModelSelector, builder) }
  pokemon_v2_contesttypename_aggregate(builder?: string | PokemonV2ContesttypenameAggregateModelSelector | ((selector: PokemonV2ContesttypenameAggregateModelSelector) => PokemonV2ContesttypenameAggregateModelSelector)) { return this.__child(`pokemon_v2_contesttypename_aggregate`, PokemonV2ContesttypenameAggregateModelSelector, builder) }
  pokemon_v2_contesttypename_by_pk(builder?: string | PokemonV2ContesttypenameModelSelector | ((selector: PokemonV2ContesttypenameModelSelector) => PokemonV2ContesttypenameModelSelector)) { return this.__child(`pokemon_v2_contesttypename_by_pk`, PokemonV2ContesttypenameModelSelector, builder) }
  pokemon_v2_egggroup(builder?: string | PokemonV2EgggroupModelSelector | ((selector: PokemonV2EgggroupModelSelector) => PokemonV2EgggroupModelSelector)) { return this.__child(`pokemon_v2_egggroup`, PokemonV2EgggroupModelSelector, builder) }
  pokemon_v2_egggroup_aggregate(builder?: string | PokemonV2EgggroupAggregateModelSelector | ((selector: PokemonV2EgggroupAggregateModelSelector) => PokemonV2EgggroupAggregateModelSelector)) { return this.__child(`pokemon_v2_egggroup_aggregate`, PokemonV2EgggroupAggregateModelSelector, builder) }
  pokemon_v2_egggroup_by_pk(builder?: string | PokemonV2EgggroupModelSelector | ((selector: PokemonV2EgggroupModelSelector) => PokemonV2EgggroupModelSelector)) { return this.__child(`pokemon_v2_egggroup_by_pk`, PokemonV2EgggroupModelSelector, builder) }
  pokemon_v2_egggroupname(builder?: string | PokemonV2EgggroupnameModelSelector | ((selector: PokemonV2EgggroupnameModelSelector) => PokemonV2EgggroupnameModelSelector)) { return this.__child(`pokemon_v2_egggroupname`, PokemonV2EgggroupnameModelSelector, builder) }
  pokemon_v2_egggroupname_aggregate(builder?: string | PokemonV2EgggroupnameAggregateModelSelector | ((selector: PokemonV2EgggroupnameAggregateModelSelector) => PokemonV2EgggroupnameAggregateModelSelector)) { return this.__child(`pokemon_v2_egggroupname_aggregate`, PokemonV2EgggroupnameAggregateModelSelector, builder) }
  pokemon_v2_egggroupname_by_pk(builder?: string | PokemonV2EgggroupnameModelSelector | ((selector: PokemonV2EgggroupnameModelSelector) => PokemonV2EgggroupnameModelSelector)) { return this.__child(`pokemon_v2_egggroupname_by_pk`, PokemonV2EgggroupnameModelSelector, builder) }
  pokemon_v2_encounter(builder?: string | PokemonV2EncounterModelSelector | ((selector: PokemonV2EncounterModelSelector) => PokemonV2EncounterModelSelector)) { return this.__child(`pokemon_v2_encounter`, PokemonV2EncounterModelSelector, builder) }
  pokemon_v2_encounter_aggregate(builder?: string | PokemonV2EncounterAggregateModelSelector | ((selector: PokemonV2EncounterAggregateModelSelector) => PokemonV2EncounterAggregateModelSelector)) { return this.__child(`pokemon_v2_encounter_aggregate`, PokemonV2EncounterAggregateModelSelector, builder) }
  pokemon_v2_encounter_by_pk(builder?: string | PokemonV2EncounterModelSelector | ((selector: PokemonV2EncounterModelSelector) => PokemonV2EncounterModelSelector)) { return this.__child(`pokemon_v2_encounter_by_pk`, PokemonV2EncounterModelSelector, builder) }
  pokemon_v2_encountercondition(builder?: string | PokemonV2EncounterconditionModelSelector | ((selector: PokemonV2EncounterconditionModelSelector) => PokemonV2EncounterconditionModelSelector)) { return this.__child(`pokemon_v2_encountercondition`, PokemonV2EncounterconditionModelSelector, builder) }
  pokemon_v2_encountercondition_aggregate(builder?: string | PokemonV2EncounterconditionAggregateModelSelector | ((selector: PokemonV2EncounterconditionAggregateModelSelector) => PokemonV2EncounterconditionAggregateModelSelector)) { return this.__child(`pokemon_v2_encountercondition_aggregate`, PokemonV2EncounterconditionAggregateModelSelector, builder) }
  pokemon_v2_encountercondition_by_pk(builder?: string | PokemonV2EncounterconditionModelSelector | ((selector: PokemonV2EncounterconditionModelSelector) => PokemonV2EncounterconditionModelSelector)) { return this.__child(`pokemon_v2_encountercondition_by_pk`, PokemonV2EncounterconditionModelSelector, builder) }
  pokemon_v2_encounterconditionname(builder?: string | PokemonV2EncounterconditionnameModelSelector | ((selector: PokemonV2EncounterconditionnameModelSelector) => PokemonV2EncounterconditionnameModelSelector)) { return this.__child(`pokemon_v2_encounterconditionname`, PokemonV2EncounterconditionnameModelSelector, builder) }
  pokemon_v2_encounterconditionname_aggregate(builder?: string | PokemonV2EncounterconditionnameAggregateModelSelector | ((selector: PokemonV2EncounterconditionnameAggregateModelSelector) => PokemonV2EncounterconditionnameAggregateModelSelector)) { return this.__child(`pokemon_v2_encounterconditionname_aggregate`, PokemonV2EncounterconditionnameAggregateModelSelector, builder) }
  pokemon_v2_encounterconditionname_by_pk(builder?: string | PokemonV2EncounterconditionnameModelSelector | ((selector: PokemonV2EncounterconditionnameModelSelector) => PokemonV2EncounterconditionnameModelSelector)) { return this.__child(`pokemon_v2_encounterconditionname_by_pk`, PokemonV2EncounterconditionnameModelSelector, builder) }
  pokemon_v2_encounterconditionvalue(builder?: string | PokemonV2EncounterconditionvalueModelSelector | ((selector: PokemonV2EncounterconditionvalueModelSelector) => PokemonV2EncounterconditionvalueModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvalue`, PokemonV2EncounterconditionvalueModelSelector, builder) }
  pokemon_v2_encounterconditionvalue_aggregate(builder?: string | PokemonV2EncounterconditionvalueAggregateModelSelector | ((selector: PokemonV2EncounterconditionvalueAggregateModelSelector) => PokemonV2EncounterconditionvalueAggregateModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvalue_aggregate`, PokemonV2EncounterconditionvalueAggregateModelSelector, builder) }
  pokemon_v2_encounterconditionvalue_by_pk(builder?: string | PokemonV2EncounterconditionvalueModelSelector | ((selector: PokemonV2EncounterconditionvalueModelSelector) => PokemonV2EncounterconditionvalueModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvalue_by_pk`, PokemonV2EncounterconditionvalueModelSelector, builder) }
  pokemon_v2_encounterconditionvaluemap(builder?: string | PokemonV2EncounterconditionvaluemapModelSelector | ((selector: PokemonV2EncounterconditionvaluemapModelSelector) => PokemonV2EncounterconditionvaluemapModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvaluemap`, PokemonV2EncounterconditionvaluemapModelSelector, builder) }
  pokemon_v2_encounterconditionvaluemap_aggregate(builder?: string | PokemonV2EncounterconditionvaluemapAggregateModelSelector | ((selector: PokemonV2EncounterconditionvaluemapAggregateModelSelector) => PokemonV2EncounterconditionvaluemapAggregateModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvaluemap_aggregate`, PokemonV2EncounterconditionvaluemapAggregateModelSelector, builder) }
  pokemon_v2_encounterconditionvaluemap_by_pk(builder?: string | PokemonV2EncounterconditionvaluemapModelSelector | ((selector: PokemonV2EncounterconditionvaluemapModelSelector) => PokemonV2EncounterconditionvaluemapModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvaluemap_by_pk`, PokemonV2EncounterconditionvaluemapModelSelector, builder) }
  pokemon_v2_encounterconditionvaluename(builder?: string | PokemonV2EncounterconditionvaluenameModelSelector | ((selector: PokemonV2EncounterconditionvaluenameModelSelector) => PokemonV2EncounterconditionvaluenameModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvaluename`, PokemonV2EncounterconditionvaluenameModelSelector, builder) }
  pokemon_v2_encounterconditionvaluename_aggregate(builder?: string | PokemonV2EncounterconditionvaluenameAggregateModelSelector | ((selector: PokemonV2EncounterconditionvaluenameAggregateModelSelector) => PokemonV2EncounterconditionvaluenameAggregateModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvaluename_aggregate`, PokemonV2EncounterconditionvaluenameAggregateModelSelector, builder) }
  pokemon_v2_encounterconditionvaluename_by_pk(builder?: string | PokemonV2EncounterconditionvaluenameModelSelector | ((selector: PokemonV2EncounterconditionvaluenameModelSelector) => PokemonV2EncounterconditionvaluenameModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvaluename_by_pk`, PokemonV2EncounterconditionvaluenameModelSelector, builder) }
  pokemon_v2_encountermethod(builder?: string | PokemonV2EncountermethodModelSelector | ((selector: PokemonV2EncountermethodModelSelector) => PokemonV2EncountermethodModelSelector)) { return this.__child(`pokemon_v2_encountermethod`, PokemonV2EncountermethodModelSelector, builder) }
  pokemon_v2_encountermethod_aggregate(builder?: string | PokemonV2EncountermethodAggregateModelSelector | ((selector: PokemonV2EncountermethodAggregateModelSelector) => PokemonV2EncountermethodAggregateModelSelector)) { return this.__child(`pokemon_v2_encountermethod_aggregate`, PokemonV2EncountermethodAggregateModelSelector, builder) }
  pokemon_v2_encountermethod_by_pk(builder?: string | PokemonV2EncountermethodModelSelector | ((selector: PokemonV2EncountermethodModelSelector) => PokemonV2EncountermethodModelSelector)) { return this.__child(`pokemon_v2_encountermethod_by_pk`, PokemonV2EncountermethodModelSelector, builder) }
  pokemon_v2_encountermethodname(builder?: string | PokemonV2EncountermethodnameModelSelector | ((selector: PokemonV2EncountermethodnameModelSelector) => PokemonV2EncountermethodnameModelSelector)) { return this.__child(`pokemon_v2_encountermethodname`, PokemonV2EncountermethodnameModelSelector, builder) }
  pokemon_v2_encountermethodname_aggregate(builder?: string | PokemonV2EncountermethodnameAggregateModelSelector | ((selector: PokemonV2EncountermethodnameAggregateModelSelector) => PokemonV2EncountermethodnameAggregateModelSelector)) { return this.__child(`pokemon_v2_encountermethodname_aggregate`, PokemonV2EncountermethodnameAggregateModelSelector, builder) }
  pokemon_v2_encountermethodname_by_pk(builder?: string | PokemonV2EncountermethodnameModelSelector | ((selector: PokemonV2EncountermethodnameModelSelector) => PokemonV2EncountermethodnameModelSelector)) { return this.__child(`pokemon_v2_encountermethodname_by_pk`, PokemonV2EncountermethodnameModelSelector, builder) }
  pokemon_v2_encounterslot(builder?: string | PokemonV2EncounterslotModelSelector | ((selector: PokemonV2EncounterslotModelSelector) => PokemonV2EncounterslotModelSelector)) { return this.__child(`pokemon_v2_encounterslot`, PokemonV2EncounterslotModelSelector, builder) }
  pokemon_v2_encounterslot_aggregate(builder?: string | PokemonV2EncounterslotAggregateModelSelector | ((selector: PokemonV2EncounterslotAggregateModelSelector) => PokemonV2EncounterslotAggregateModelSelector)) { return this.__child(`pokemon_v2_encounterslot_aggregate`, PokemonV2EncounterslotAggregateModelSelector, builder) }
  pokemon_v2_encounterslot_by_pk(builder?: string | PokemonV2EncounterslotModelSelector | ((selector: PokemonV2EncounterslotModelSelector) => PokemonV2EncounterslotModelSelector)) { return this.__child(`pokemon_v2_encounterslot_by_pk`, PokemonV2EncounterslotModelSelector, builder) }
  pokemon_v2_evolutionchain(builder?: string | PokemonV2EvolutionchainModelSelector | ((selector: PokemonV2EvolutionchainModelSelector) => PokemonV2EvolutionchainModelSelector)) { return this.__child(`pokemon_v2_evolutionchain`, PokemonV2EvolutionchainModelSelector, builder) }
  pokemon_v2_evolutionchain_aggregate(builder?: string | PokemonV2EvolutionchainAggregateModelSelector | ((selector: PokemonV2EvolutionchainAggregateModelSelector) => PokemonV2EvolutionchainAggregateModelSelector)) { return this.__child(`pokemon_v2_evolutionchain_aggregate`, PokemonV2EvolutionchainAggregateModelSelector, builder) }
  pokemon_v2_evolutionchain_by_pk(builder?: string | PokemonV2EvolutionchainModelSelector | ((selector: PokemonV2EvolutionchainModelSelector) => PokemonV2EvolutionchainModelSelector)) { return this.__child(`pokemon_v2_evolutionchain_by_pk`, PokemonV2EvolutionchainModelSelector, builder) }
  pokemon_v2_evolutiontrigger(builder?: string | PokemonV2EvolutiontriggerModelSelector | ((selector: PokemonV2EvolutiontriggerModelSelector) => PokemonV2EvolutiontriggerModelSelector)) { return this.__child(`pokemon_v2_evolutiontrigger`, PokemonV2EvolutiontriggerModelSelector, builder) }
  pokemon_v2_evolutiontrigger_aggregate(builder?: string | PokemonV2EvolutiontriggerAggregateModelSelector | ((selector: PokemonV2EvolutiontriggerAggregateModelSelector) => PokemonV2EvolutiontriggerAggregateModelSelector)) { return this.__child(`pokemon_v2_evolutiontrigger_aggregate`, PokemonV2EvolutiontriggerAggregateModelSelector, builder) }
  pokemon_v2_evolutiontrigger_by_pk(builder?: string | PokemonV2EvolutiontriggerModelSelector | ((selector: PokemonV2EvolutiontriggerModelSelector) => PokemonV2EvolutiontriggerModelSelector)) { return this.__child(`pokemon_v2_evolutiontrigger_by_pk`, PokemonV2EvolutiontriggerModelSelector, builder) }
  pokemon_v2_evolutiontriggername(builder?: string | PokemonV2EvolutiontriggernameModelSelector | ((selector: PokemonV2EvolutiontriggernameModelSelector) => PokemonV2EvolutiontriggernameModelSelector)) { return this.__child(`pokemon_v2_evolutiontriggername`, PokemonV2EvolutiontriggernameModelSelector, builder) }
  pokemon_v2_evolutiontriggername_aggregate(builder?: string | PokemonV2EvolutiontriggernameAggregateModelSelector | ((selector: PokemonV2EvolutiontriggernameAggregateModelSelector) => PokemonV2EvolutiontriggernameAggregateModelSelector)) { return this.__child(`pokemon_v2_evolutiontriggername_aggregate`, PokemonV2EvolutiontriggernameAggregateModelSelector, builder) }
  pokemon_v2_evolutiontriggername_by_pk(builder?: string | PokemonV2EvolutiontriggernameModelSelector | ((selector: PokemonV2EvolutiontriggernameModelSelector) => PokemonV2EvolutiontriggernameModelSelector)) { return this.__child(`pokemon_v2_evolutiontriggername_by_pk`, PokemonV2EvolutiontriggernameModelSelector, builder) }
  pokemon_v2_experience(builder?: string | PokemonV2ExperienceModelSelector | ((selector: PokemonV2ExperienceModelSelector) => PokemonV2ExperienceModelSelector)) { return this.__child(`pokemon_v2_experience`, PokemonV2ExperienceModelSelector, builder) }
  pokemon_v2_experience_aggregate(builder?: string | PokemonV2ExperienceAggregateModelSelector | ((selector: PokemonV2ExperienceAggregateModelSelector) => PokemonV2ExperienceAggregateModelSelector)) { return this.__child(`pokemon_v2_experience_aggregate`, PokemonV2ExperienceAggregateModelSelector, builder) }
  pokemon_v2_experience_by_pk(builder?: string | PokemonV2ExperienceModelSelector | ((selector: PokemonV2ExperienceModelSelector) => PokemonV2ExperienceModelSelector)) { return this.__child(`pokemon_v2_experience_by_pk`, PokemonV2ExperienceModelSelector, builder) }
  pokemon_v2_gender(builder?: string | PokemonV2GenderModelSelector | ((selector: PokemonV2GenderModelSelector) => PokemonV2GenderModelSelector)) { return this.__child(`pokemon_v2_gender`, PokemonV2GenderModelSelector, builder) }
  pokemon_v2_gender_aggregate(builder?: string | PokemonV2GenderAggregateModelSelector | ((selector: PokemonV2GenderAggregateModelSelector) => PokemonV2GenderAggregateModelSelector)) { return this.__child(`pokemon_v2_gender_aggregate`, PokemonV2GenderAggregateModelSelector, builder) }
  pokemon_v2_gender_by_pk(builder?: string | PokemonV2GenderModelSelector | ((selector: PokemonV2GenderModelSelector) => PokemonV2GenderModelSelector)) { return this.__child(`pokemon_v2_gender_by_pk`, PokemonV2GenderModelSelector, builder) }
  pokemon_v2_generation(builder?: string | PokemonV2GenerationModelSelector | ((selector: PokemonV2GenerationModelSelector) => PokemonV2GenerationModelSelector)) { return this.__child(`pokemon_v2_generation`, PokemonV2GenerationModelSelector, builder) }
  pokemon_v2_generation_aggregate(builder?: string | PokemonV2GenerationAggregateModelSelector | ((selector: PokemonV2GenerationAggregateModelSelector) => PokemonV2GenerationAggregateModelSelector)) { return this.__child(`pokemon_v2_generation_aggregate`, PokemonV2GenerationAggregateModelSelector, builder) }
  pokemon_v2_generation_by_pk(builder?: string | PokemonV2GenerationModelSelector | ((selector: PokemonV2GenerationModelSelector) => PokemonV2GenerationModelSelector)) { return this.__child(`pokemon_v2_generation_by_pk`, PokemonV2GenerationModelSelector, builder) }
  pokemon_v2_generationname(builder?: string | PokemonV2GenerationnameModelSelector | ((selector: PokemonV2GenerationnameModelSelector) => PokemonV2GenerationnameModelSelector)) { return this.__child(`pokemon_v2_generationname`, PokemonV2GenerationnameModelSelector, builder) }
  pokemon_v2_generationname_aggregate(builder?: string | PokemonV2GenerationnameAggregateModelSelector | ((selector: PokemonV2GenerationnameAggregateModelSelector) => PokemonV2GenerationnameAggregateModelSelector)) { return this.__child(`pokemon_v2_generationname_aggregate`, PokemonV2GenerationnameAggregateModelSelector, builder) }
  pokemon_v2_generationname_by_pk(builder?: string | PokemonV2GenerationnameModelSelector | ((selector: PokemonV2GenerationnameModelSelector) => PokemonV2GenerationnameModelSelector)) { return this.__child(`pokemon_v2_generationname_by_pk`, PokemonV2GenerationnameModelSelector, builder) }
  pokemon_v2_growthrate(builder?: string | PokemonV2GrowthrateModelSelector | ((selector: PokemonV2GrowthrateModelSelector) => PokemonV2GrowthrateModelSelector)) { return this.__child(`pokemon_v2_growthrate`, PokemonV2GrowthrateModelSelector, builder) }
  pokemon_v2_growthrate_aggregate(builder?: string | PokemonV2GrowthrateAggregateModelSelector | ((selector: PokemonV2GrowthrateAggregateModelSelector) => PokemonV2GrowthrateAggregateModelSelector)) { return this.__child(`pokemon_v2_growthrate_aggregate`, PokemonV2GrowthrateAggregateModelSelector, builder) }
  pokemon_v2_growthrate_by_pk(builder?: string | PokemonV2GrowthrateModelSelector | ((selector: PokemonV2GrowthrateModelSelector) => PokemonV2GrowthrateModelSelector)) { return this.__child(`pokemon_v2_growthrate_by_pk`, PokemonV2GrowthrateModelSelector, builder) }
  pokemon_v2_growthratedescription(builder?: string | PokemonV2GrowthratedescriptionModelSelector | ((selector: PokemonV2GrowthratedescriptionModelSelector) => PokemonV2GrowthratedescriptionModelSelector)) { return this.__child(`pokemon_v2_growthratedescription`, PokemonV2GrowthratedescriptionModelSelector, builder) }
  pokemon_v2_growthratedescription_aggregate(builder?: string | PokemonV2GrowthratedescriptionAggregateModelSelector | ((selector: PokemonV2GrowthratedescriptionAggregateModelSelector) => PokemonV2GrowthratedescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_growthratedescription_aggregate`, PokemonV2GrowthratedescriptionAggregateModelSelector, builder) }
  pokemon_v2_growthratedescription_by_pk(builder?: string | PokemonV2GrowthratedescriptionModelSelector | ((selector: PokemonV2GrowthratedescriptionModelSelector) => PokemonV2GrowthratedescriptionModelSelector)) { return this.__child(`pokemon_v2_growthratedescription_by_pk`, PokemonV2GrowthratedescriptionModelSelector, builder) }
  pokemon_v2_item(builder?: string | PokemonV2ItemModelSelector | ((selector: PokemonV2ItemModelSelector) => PokemonV2ItemModelSelector)) { return this.__child(`pokemon_v2_item`, PokemonV2ItemModelSelector, builder) }
  pokemon_v2_item_aggregate(builder?: string | PokemonV2ItemAggregateModelSelector | ((selector: PokemonV2ItemAggregateModelSelector) => PokemonV2ItemAggregateModelSelector)) { return this.__child(`pokemon_v2_item_aggregate`, PokemonV2ItemAggregateModelSelector, builder) }
  pokemon_v2_item_by_pk(builder?: string | PokemonV2ItemModelSelector | ((selector: PokemonV2ItemModelSelector) => PokemonV2ItemModelSelector)) { return this.__child(`pokemon_v2_item_by_pk`, PokemonV2ItemModelSelector, builder) }
  pokemon_v2_itemattribute(builder?: string | PokemonV2ItemattributeModelSelector | ((selector: PokemonV2ItemattributeModelSelector) => PokemonV2ItemattributeModelSelector)) { return this.__child(`pokemon_v2_itemattribute`, PokemonV2ItemattributeModelSelector, builder) }
  pokemon_v2_itemattribute_aggregate(builder?: string | PokemonV2ItemattributeAggregateModelSelector | ((selector: PokemonV2ItemattributeAggregateModelSelector) => PokemonV2ItemattributeAggregateModelSelector)) { return this.__child(`pokemon_v2_itemattribute_aggregate`, PokemonV2ItemattributeAggregateModelSelector, builder) }
  pokemon_v2_itemattribute_by_pk(builder?: string | PokemonV2ItemattributeModelSelector | ((selector: PokemonV2ItemattributeModelSelector) => PokemonV2ItemattributeModelSelector)) { return this.__child(`pokemon_v2_itemattribute_by_pk`, PokemonV2ItemattributeModelSelector, builder) }
  pokemon_v2_itemattributedescription(builder?: string | PokemonV2ItemattributedescriptionModelSelector | ((selector: PokemonV2ItemattributedescriptionModelSelector) => PokemonV2ItemattributedescriptionModelSelector)) { return this.__child(`pokemon_v2_itemattributedescription`, PokemonV2ItemattributedescriptionModelSelector, builder) }
  pokemon_v2_itemattributedescription_aggregate(builder?: string | PokemonV2ItemattributedescriptionAggregateModelSelector | ((selector: PokemonV2ItemattributedescriptionAggregateModelSelector) => PokemonV2ItemattributedescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_itemattributedescription_aggregate`, PokemonV2ItemattributedescriptionAggregateModelSelector, builder) }
  pokemon_v2_itemattributedescription_by_pk(builder?: string | PokemonV2ItemattributedescriptionModelSelector | ((selector: PokemonV2ItemattributedescriptionModelSelector) => PokemonV2ItemattributedescriptionModelSelector)) { return this.__child(`pokemon_v2_itemattributedescription_by_pk`, PokemonV2ItemattributedescriptionModelSelector, builder) }
  pokemon_v2_itemattributemap(builder?: string | PokemonV2ItemattributemapModelSelector | ((selector: PokemonV2ItemattributemapModelSelector) => PokemonV2ItemattributemapModelSelector)) { return this.__child(`pokemon_v2_itemattributemap`, PokemonV2ItemattributemapModelSelector, builder) }
  pokemon_v2_itemattributemap_aggregate(builder?: string | PokemonV2ItemattributemapAggregateModelSelector | ((selector: PokemonV2ItemattributemapAggregateModelSelector) => PokemonV2ItemattributemapAggregateModelSelector)) { return this.__child(`pokemon_v2_itemattributemap_aggregate`, PokemonV2ItemattributemapAggregateModelSelector, builder) }
  pokemon_v2_itemattributemap_by_pk(builder?: string | PokemonV2ItemattributemapModelSelector | ((selector: PokemonV2ItemattributemapModelSelector) => PokemonV2ItemattributemapModelSelector)) { return this.__child(`pokemon_v2_itemattributemap_by_pk`, PokemonV2ItemattributemapModelSelector, builder) }
  pokemon_v2_itemattributename(builder?: string | PokemonV2ItemattributenameModelSelector | ((selector: PokemonV2ItemattributenameModelSelector) => PokemonV2ItemattributenameModelSelector)) { return this.__child(`pokemon_v2_itemattributename`, PokemonV2ItemattributenameModelSelector, builder) }
  pokemon_v2_itemattributename_aggregate(builder?: string | PokemonV2ItemattributenameAggregateModelSelector | ((selector: PokemonV2ItemattributenameAggregateModelSelector) => PokemonV2ItemattributenameAggregateModelSelector)) { return this.__child(`pokemon_v2_itemattributename_aggregate`, PokemonV2ItemattributenameAggregateModelSelector, builder) }
  pokemon_v2_itemattributename_by_pk(builder?: string | PokemonV2ItemattributenameModelSelector | ((selector: PokemonV2ItemattributenameModelSelector) => PokemonV2ItemattributenameModelSelector)) { return this.__child(`pokemon_v2_itemattributename_by_pk`, PokemonV2ItemattributenameModelSelector, builder) }
  pokemon_v2_itemcategory(builder?: string | PokemonV2ItemcategoryModelSelector | ((selector: PokemonV2ItemcategoryModelSelector) => PokemonV2ItemcategoryModelSelector)) { return this.__child(`pokemon_v2_itemcategory`, PokemonV2ItemcategoryModelSelector, builder) }
  pokemon_v2_itemcategory_aggregate(builder?: string | PokemonV2ItemcategoryAggregateModelSelector | ((selector: PokemonV2ItemcategoryAggregateModelSelector) => PokemonV2ItemcategoryAggregateModelSelector)) { return this.__child(`pokemon_v2_itemcategory_aggregate`, PokemonV2ItemcategoryAggregateModelSelector, builder) }
  pokemon_v2_itemcategory_by_pk(builder?: string | PokemonV2ItemcategoryModelSelector | ((selector: PokemonV2ItemcategoryModelSelector) => PokemonV2ItemcategoryModelSelector)) { return this.__child(`pokemon_v2_itemcategory_by_pk`, PokemonV2ItemcategoryModelSelector, builder) }
  pokemon_v2_itemcategoryname(builder?: string | PokemonV2ItemcategorynameModelSelector | ((selector: PokemonV2ItemcategorynameModelSelector) => PokemonV2ItemcategorynameModelSelector)) { return this.__child(`pokemon_v2_itemcategoryname`, PokemonV2ItemcategorynameModelSelector, builder) }
  pokemon_v2_itemcategoryname_aggregate(builder?: string | PokemonV2ItemcategorynameAggregateModelSelector | ((selector: PokemonV2ItemcategorynameAggregateModelSelector) => PokemonV2ItemcategorynameAggregateModelSelector)) { return this.__child(`pokemon_v2_itemcategoryname_aggregate`, PokemonV2ItemcategorynameAggregateModelSelector, builder) }
  pokemon_v2_itemcategoryname_by_pk(builder?: string | PokemonV2ItemcategorynameModelSelector | ((selector: PokemonV2ItemcategorynameModelSelector) => PokemonV2ItemcategorynameModelSelector)) { return this.__child(`pokemon_v2_itemcategoryname_by_pk`, PokemonV2ItemcategorynameModelSelector, builder) }
  pokemon_v2_itemeffecttext(builder?: string | PokemonV2ItemeffecttextModelSelector | ((selector: PokemonV2ItemeffecttextModelSelector) => PokemonV2ItemeffecttextModelSelector)) { return this.__child(`pokemon_v2_itemeffecttext`, PokemonV2ItemeffecttextModelSelector, builder) }
  pokemon_v2_itemeffecttext_aggregate(builder?: string | PokemonV2ItemeffecttextAggregateModelSelector | ((selector: PokemonV2ItemeffecttextAggregateModelSelector) => PokemonV2ItemeffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_itemeffecttext_aggregate`, PokemonV2ItemeffecttextAggregateModelSelector, builder) }
  pokemon_v2_itemeffecttext_by_pk(builder?: string | PokemonV2ItemeffecttextModelSelector | ((selector: PokemonV2ItemeffecttextModelSelector) => PokemonV2ItemeffecttextModelSelector)) { return this.__child(`pokemon_v2_itemeffecttext_by_pk`, PokemonV2ItemeffecttextModelSelector, builder) }
  pokemon_v2_itemflavortext(builder?: string | PokemonV2ItemflavortextModelSelector | ((selector: PokemonV2ItemflavortextModelSelector) => PokemonV2ItemflavortextModelSelector)) { return this.__child(`pokemon_v2_itemflavortext`, PokemonV2ItemflavortextModelSelector, builder) }
  pokemon_v2_itemflavortext_aggregate(builder?: string | PokemonV2ItemflavortextAggregateModelSelector | ((selector: PokemonV2ItemflavortextAggregateModelSelector) => PokemonV2ItemflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_itemflavortext_aggregate`, PokemonV2ItemflavortextAggregateModelSelector, builder) }
  pokemon_v2_itemflavortext_by_pk(builder?: string | PokemonV2ItemflavortextModelSelector | ((selector: PokemonV2ItemflavortextModelSelector) => PokemonV2ItemflavortextModelSelector)) { return this.__child(`pokemon_v2_itemflavortext_by_pk`, PokemonV2ItemflavortextModelSelector, builder) }
  pokemon_v2_itemflingeffect(builder?: string | PokemonV2ItemflingeffectModelSelector | ((selector: PokemonV2ItemflingeffectModelSelector) => PokemonV2ItemflingeffectModelSelector)) { return this.__child(`pokemon_v2_itemflingeffect`, PokemonV2ItemflingeffectModelSelector, builder) }
  pokemon_v2_itemflingeffect_aggregate(builder?: string | PokemonV2ItemflingeffectAggregateModelSelector | ((selector: PokemonV2ItemflingeffectAggregateModelSelector) => PokemonV2ItemflingeffectAggregateModelSelector)) { return this.__child(`pokemon_v2_itemflingeffect_aggregate`, PokemonV2ItemflingeffectAggregateModelSelector, builder) }
  pokemon_v2_itemflingeffect_by_pk(builder?: string | PokemonV2ItemflingeffectModelSelector | ((selector: PokemonV2ItemflingeffectModelSelector) => PokemonV2ItemflingeffectModelSelector)) { return this.__child(`pokemon_v2_itemflingeffect_by_pk`, PokemonV2ItemflingeffectModelSelector, builder) }
  pokemon_v2_itemflingeffecteffecttext(builder?: string | PokemonV2ItemflingeffecteffecttextModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextModelSelector) => PokemonV2ItemflingeffecteffecttextModelSelector)) { return this.__child(`pokemon_v2_itemflingeffecteffecttext`, PokemonV2ItemflingeffecteffecttextModelSelector, builder) }
  pokemon_v2_itemflingeffecteffecttext_aggregate(builder?: string | PokemonV2ItemflingeffecteffecttextAggregateModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextAggregateModelSelector) => PokemonV2ItemflingeffecteffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_itemflingeffecteffecttext_aggregate`, PokemonV2ItemflingeffecteffecttextAggregateModelSelector, builder) }
  pokemon_v2_itemflingeffecteffecttext_by_pk(builder?: string | PokemonV2ItemflingeffecteffecttextModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextModelSelector) => PokemonV2ItemflingeffecteffecttextModelSelector)) { return this.__child(`pokemon_v2_itemflingeffecteffecttext_by_pk`, PokemonV2ItemflingeffecteffecttextModelSelector, builder) }
  pokemon_v2_itemgameindex(builder?: string | PokemonV2ItemgameindexModelSelector | ((selector: PokemonV2ItemgameindexModelSelector) => PokemonV2ItemgameindexModelSelector)) { return this.__child(`pokemon_v2_itemgameindex`, PokemonV2ItemgameindexModelSelector, builder) }
  pokemon_v2_itemgameindex_aggregate(builder?: string | PokemonV2ItemgameindexAggregateModelSelector | ((selector: PokemonV2ItemgameindexAggregateModelSelector) => PokemonV2ItemgameindexAggregateModelSelector)) { return this.__child(`pokemon_v2_itemgameindex_aggregate`, PokemonV2ItemgameindexAggregateModelSelector, builder) }
  pokemon_v2_itemgameindex_by_pk(builder?: string | PokemonV2ItemgameindexModelSelector | ((selector: PokemonV2ItemgameindexModelSelector) => PokemonV2ItemgameindexModelSelector)) { return this.__child(`pokemon_v2_itemgameindex_by_pk`, PokemonV2ItemgameindexModelSelector, builder) }
  pokemon_v2_itemname(builder?: string | PokemonV2ItemnameModelSelector | ((selector: PokemonV2ItemnameModelSelector) => PokemonV2ItemnameModelSelector)) { return this.__child(`pokemon_v2_itemname`, PokemonV2ItemnameModelSelector, builder) }
  pokemon_v2_itemname_aggregate(builder?: string | PokemonV2ItemnameAggregateModelSelector | ((selector: PokemonV2ItemnameAggregateModelSelector) => PokemonV2ItemnameAggregateModelSelector)) { return this.__child(`pokemon_v2_itemname_aggregate`, PokemonV2ItemnameAggregateModelSelector, builder) }
  pokemon_v2_itemname_by_pk(builder?: string | PokemonV2ItemnameModelSelector | ((selector: PokemonV2ItemnameModelSelector) => PokemonV2ItemnameModelSelector)) { return this.__child(`pokemon_v2_itemname_by_pk`, PokemonV2ItemnameModelSelector, builder) }
  pokemon_v2_itempocket(builder?: string | PokemonV2ItempocketModelSelector | ((selector: PokemonV2ItempocketModelSelector) => PokemonV2ItempocketModelSelector)) { return this.__child(`pokemon_v2_itempocket`, PokemonV2ItempocketModelSelector, builder) }
  pokemon_v2_itempocket_aggregate(builder?: string | PokemonV2ItempocketAggregateModelSelector | ((selector: PokemonV2ItempocketAggregateModelSelector) => PokemonV2ItempocketAggregateModelSelector)) { return this.__child(`pokemon_v2_itempocket_aggregate`, PokemonV2ItempocketAggregateModelSelector, builder) }
  pokemon_v2_itempocket_by_pk(builder?: string | PokemonV2ItempocketModelSelector | ((selector: PokemonV2ItempocketModelSelector) => PokemonV2ItempocketModelSelector)) { return this.__child(`pokemon_v2_itempocket_by_pk`, PokemonV2ItempocketModelSelector, builder) }
  pokemon_v2_itempocketname(builder?: string | PokemonV2ItempocketnameModelSelector | ((selector: PokemonV2ItempocketnameModelSelector) => PokemonV2ItempocketnameModelSelector)) { return this.__child(`pokemon_v2_itempocketname`, PokemonV2ItempocketnameModelSelector, builder) }
  pokemon_v2_itempocketname_aggregate(builder?: string | PokemonV2ItempocketnameAggregateModelSelector | ((selector: PokemonV2ItempocketnameAggregateModelSelector) => PokemonV2ItempocketnameAggregateModelSelector)) { return this.__child(`pokemon_v2_itempocketname_aggregate`, PokemonV2ItempocketnameAggregateModelSelector, builder) }
  pokemon_v2_itempocketname_by_pk(builder?: string | PokemonV2ItempocketnameModelSelector | ((selector: PokemonV2ItempocketnameModelSelector) => PokemonV2ItempocketnameModelSelector)) { return this.__child(`pokemon_v2_itempocketname_by_pk`, PokemonV2ItempocketnameModelSelector, builder) }
  pokemon_v2_itemsprites(builder?: string | PokemonV2ItemspritesModelSelector | ((selector: PokemonV2ItemspritesModelSelector) => PokemonV2ItemspritesModelSelector)) { return this.__child(`pokemon_v2_itemsprites`, PokemonV2ItemspritesModelSelector, builder) }
  pokemon_v2_itemsprites_aggregate(builder?: string | PokemonV2ItemspritesAggregateModelSelector | ((selector: PokemonV2ItemspritesAggregateModelSelector) => PokemonV2ItemspritesAggregateModelSelector)) { return this.__child(`pokemon_v2_itemsprites_aggregate`, PokemonV2ItemspritesAggregateModelSelector, builder) }
  pokemon_v2_itemsprites_by_pk(builder?: string | PokemonV2ItemspritesModelSelector | ((selector: PokemonV2ItemspritesModelSelector) => PokemonV2ItemspritesModelSelector)) { return this.__child(`pokemon_v2_itemsprites_by_pk`, PokemonV2ItemspritesModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_language_aggregate(builder?: string | PokemonV2LanguageAggregateModelSelector | ((selector: PokemonV2LanguageAggregateModelSelector) => PokemonV2LanguageAggregateModelSelector)) { return this.__child(`pokemon_v2_language_aggregate`, PokemonV2LanguageAggregateModelSelector, builder) }
  pokemon_v2_language_by_pk(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language_by_pk`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_languagename(builder?: string | PokemonV2LanguagenameModelSelector | ((selector: PokemonV2LanguagenameModelSelector) => PokemonV2LanguagenameModelSelector)) { return this.__child(`pokemon_v2_languagename`, PokemonV2LanguagenameModelSelector, builder) }
  pokemon_v2_languagename_aggregate(builder?: string | PokemonV2LanguagenameAggregateModelSelector | ((selector: PokemonV2LanguagenameAggregateModelSelector) => PokemonV2LanguagenameAggregateModelSelector)) { return this.__child(`pokemon_v2_languagename_aggregate`, PokemonV2LanguagenameAggregateModelSelector, builder) }
  pokemon_v2_languagename_by_pk(builder?: string | PokemonV2LanguagenameModelSelector | ((selector: PokemonV2LanguagenameModelSelector) => PokemonV2LanguagenameModelSelector)) { return this.__child(`pokemon_v2_languagename_by_pk`, PokemonV2LanguagenameModelSelector, builder) }
  pokemon_v2_location(builder?: string | PokemonV2LocationModelSelector | ((selector: PokemonV2LocationModelSelector) => PokemonV2LocationModelSelector)) { return this.__child(`pokemon_v2_location`, PokemonV2LocationModelSelector, builder) }
  pokemon_v2_location_aggregate(builder?: string | PokemonV2LocationAggregateModelSelector | ((selector: PokemonV2LocationAggregateModelSelector) => PokemonV2LocationAggregateModelSelector)) { return this.__child(`pokemon_v2_location_aggregate`, PokemonV2LocationAggregateModelSelector, builder) }
  pokemon_v2_location_by_pk(builder?: string | PokemonV2LocationModelSelector | ((selector: PokemonV2LocationModelSelector) => PokemonV2LocationModelSelector)) { return this.__child(`pokemon_v2_location_by_pk`, PokemonV2LocationModelSelector, builder) }
  pokemon_v2_locationarea(builder?: string | PokemonV2LocationareaModelSelector | ((selector: PokemonV2LocationareaModelSelector) => PokemonV2LocationareaModelSelector)) { return this.__child(`pokemon_v2_locationarea`, PokemonV2LocationareaModelSelector, builder) }
  pokemon_v2_locationarea_aggregate(builder?: string | PokemonV2LocationareaAggregateModelSelector | ((selector: PokemonV2LocationareaAggregateModelSelector) => PokemonV2LocationareaAggregateModelSelector)) { return this.__child(`pokemon_v2_locationarea_aggregate`, PokemonV2LocationareaAggregateModelSelector, builder) }
  pokemon_v2_locationarea_by_pk(builder?: string | PokemonV2LocationareaModelSelector | ((selector: PokemonV2LocationareaModelSelector) => PokemonV2LocationareaModelSelector)) { return this.__child(`pokemon_v2_locationarea_by_pk`, PokemonV2LocationareaModelSelector, builder) }
  pokemon_v2_locationareaencounterrate(builder?: string | PokemonV2LocationareaencounterrateModelSelector | ((selector: PokemonV2LocationareaencounterrateModelSelector) => PokemonV2LocationareaencounterrateModelSelector)) { return this.__child(`pokemon_v2_locationareaencounterrate`, PokemonV2LocationareaencounterrateModelSelector, builder) }
  pokemon_v2_locationareaencounterrate_aggregate(builder?: string | PokemonV2LocationareaencounterrateAggregateModelSelector | ((selector: PokemonV2LocationareaencounterrateAggregateModelSelector) => PokemonV2LocationareaencounterrateAggregateModelSelector)) { return this.__child(`pokemon_v2_locationareaencounterrate_aggregate`, PokemonV2LocationareaencounterrateAggregateModelSelector, builder) }
  pokemon_v2_locationareaencounterrate_by_pk(builder?: string | PokemonV2LocationareaencounterrateModelSelector | ((selector: PokemonV2LocationareaencounterrateModelSelector) => PokemonV2LocationareaencounterrateModelSelector)) { return this.__child(`pokemon_v2_locationareaencounterrate_by_pk`, PokemonV2LocationareaencounterrateModelSelector, builder) }
  pokemon_v2_locationareaname(builder?: string | PokemonV2LocationareanameModelSelector | ((selector: PokemonV2LocationareanameModelSelector) => PokemonV2LocationareanameModelSelector)) { return this.__child(`pokemon_v2_locationareaname`, PokemonV2LocationareanameModelSelector, builder) }
  pokemon_v2_locationareaname_aggregate(builder?: string | PokemonV2LocationareanameAggregateModelSelector | ((selector: PokemonV2LocationareanameAggregateModelSelector) => PokemonV2LocationareanameAggregateModelSelector)) { return this.__child(`pokemon_v2_locationareaname_aggregate`, PokemonV2LocationareanameAggregateModelSelector, builder) }
  pokemon_v2_locationareaname_by_pk(builder?: string | PokemonV2LocationareanameModelSelector | ((selector: PokemonV2LocationareanameModelSelector) => PokemonV2LocationareanameModelSelector)) { return this.__child(`pokemon_v2_locationareaname_by_pk`, PokemonV2LocationareanameModelSelector, builder) }
  pokemon_v2_locationgameindex(builder?: string | PokemonV2LocationgameindexModelSelector | ((selector: PokemonV2LocationgameindexModelSelector) => PokemonV2LocationgameindexModelSelector)) { return this.__child(`pokemon_v2_locationgameindex`, PokemonV2LocationgameindexModelSelector, builder) }
  pokemon_v2_locationgameindex_aggregate(builder?: string | PokemonV2LocationgameindexAggregateModelSelector | ((selector: PokemonV2LocationgameindexAggregateModelSelector) => PokemonV2LocationgameindexAggregateModelSelector)) { return this.__child(`pokemon_v2_locationgameindex_aggregate`, PokemonV2LocationgameindexAggregateModelSelector, builder) }
  pokemon_v2_locationgameindex_by_pk(builder?: string | PokemonV2LocationgameindexModelSelector | ((selector: PokemonV2LocationgameindexModelSelector) => PokemonV2LocationgameindexModelSelector)) { return this.__child(`pokemon_v2_locationgameindex_by_pk`, PokemonV2LocationgameindexModelSelector, builder) }
  pokemon_v2_locationname(builder?: string | PokemonV2LocationnameModelSelector | ((selector: PokemonV2LocationnameModelSelector) => PokemonV2LocationnameModelSelector)) { return this.__child(`pokemon_v2_locationname`, PokemonV2LocationnameModelSelector, builder) }
  pokemon_v2_locationname_aggregate(builder?: string | PokemonV2LocationnameAggregateModelSelector | ((selector: PokemonV2LocationnameAggregateModelSelector) => PokemonV2LocationnameAggregateModelSelector)) { return this.__child(`pokemon_v2_locationname_aggregate`, PokemonV2LocationnameAggregateModelSelector, builder) }
  pokemon_v2_locationname_by_pk(builder?: string | PokemonV2LocationnameModelSelector | ((selector: PokemonV2LocationnameModelSelector) => PokemonV2LocationnameModelSelector)) { return this.__child(`pokemon_v2_locationname_by_pk`, PokemonV2LocationnameModelSelector, builder) }
  pokemon_v2_machine(builder?: string | PokemonV2MachineModelSelector | ((selector: PokemonV2MachineModelSelector) => PokemonV2MachineModelSelector)) { return this.__child(`pokemon_v2_machine`, PokemonV2MachineModelSelector, builder) }
  pokemon_v2_machine_aggregate(builder?: string | PokemonV2MachineAggregateModelSelector | ((selector: PokemonV2MachineAggregateModelSelector) => PokemonV2MachineAggregateModelSelector)) { return this.__child(`pokemon_v2_machine_aggregate`, PokemonV2MachineAggregateModelSelector, builder) }
  pokemon_v2_machine_by_pk(builder?: string | PokemonV2MachineModelSelector | ((selector: PokemonV2MachineModelSelector) => PokemonV2MachineModelSelector)) { return this.__child(`pokemon_v2_machine_by_pk`, PokemonV2MachineModelSelector, builder) }
  pokemon_v2_move(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemon_v2_move`, PokemonV2MoveModelSelector, builder) }
  pokemon_v2_move_aggregate(builder?: string | PokemonV2MoveAggregateModelSelector | ((selector: PokemonV2MoveAggregateModelSelector) => PokemonV2MoveAggregateModelSelector)) { return this.__child(`pokemon_v2_move_aggregate`, PokemonV2MoveAggregateModelSelector, builder) }
  pokemon_v2_move_by_pk(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemon_v2_move_by_pk`, PokemonV2MoveModelSelector, builder) }
  pokemon_v2_moveattribute(builder?: string | PokemonV2MoveattributeModelSelector | ((selector: PokemonV2MoveattributeModelSelector) => PokemonV2MoveattributeModelSelector)) { return this.__child(`pokemon_v2_moveattribute`, PokemonV2MoveattributeModelSelector, builder) }
  pokemon_v2_moveattribute_aggregate(builder?: string | PokemonV2MoveattributeAggregateModelSelector | ((selector: PokemonV2MoveattributeAggregateModelSelector) => PokemonV2MoveattributeAggregateModelSelector)) { return this.__child(`pokemon_v2_moveattribute_aggregate`, PokemonV2MoveattributeAggregateModelSelector, builder) }
  pokemon_v2_moveattribute_by_pk(builder?: string | PokemonV2MoveattributeModelSelector | ((selector: PokemonV2MoveattributeModelSelector) => PokemonV2MoveattributeModelSelector)) { return this.__child(`pokemon_v2_moveattribute_by_pk`, PokemonV2MoveattributeModelSelector, builder) }
  pokemon_v2_moveattributedescription(builder?: string | PokemonV2MoveattributedescriptionModelSelector | ((selector: PokemonV2MoveattributedescriptionModelSelector) => PokemonV2MoveattributedescriptionModelSelector)) { return this.__child(`pokemon_v2_moveattributedescription`, PokemonV2MoveattributedescriptionModelSelector, builder) }
  pokemon_v2_moveattributedescription_aggregate(builder?: string | PokemonV2MoveattributedescriptionAggregateModelSelector | ((selector: PokemonV2MoveattributedescriptionAggregateModelSelector) => PokemonV2MoveattributedescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_moveattributedescription_aggregate`, PokemonV2MoveattributedescriptionAggregateModelSelector, builder) }
  pokemon_v2_moveattributedescription_by_pk(builder?: string | PokemonV2MoveattributedescriptionModelSelector | ((selector: PokemonV2MoveattributedescriptionModelSelector) => PokemonV2MoveattributedescriptionModelSelector)) { return this.__child(`pokemon_v2_moveattributedescription_by_pk`, PokemonV2MoveattributedescriptionModelSelector, builder) }
  pokemon_v2_moveattributemap(builder?: string | PokemonV2MoveattributemapModelSelector | ((selector: PokemonV2MoveattributemapModelSelector) => PokemonV2MoveattributemapModelSelector)) { return this.__child(`pokemon_v2_moveattributemap`, PokemonV2MoveattributemapModelSelector, builder) }
  pokemon_v2_moveattributemap_aggregate(builder?: string | PokemonV2MoveattributemapAggregateModelSelector | ((selector: PokemonV2MoveattributemapAggregateModelSelector) => PokemonV2MoveattributemapAggregateModelSelector)) { return this.__child(`pokemon_v2_moveattributemap_aggregate`, PokemonV2MoveattributemapAggregateModelSelector, builder) }
  pokemon_v2_moveattributemap_by_pk(builder?: string | PokemonV2MoveattributemapModelSelector | ((selector: PokemonV2MoveattributemapModelSelector) => PokemonV2MoveattributemapModelSelector)) { return this.__child(`pokemon_v2_moveattributemap_by_pk`, PokemonV2MoveattributemapModelSelector, builder) }
  pokemon_v2_moveattributename(builder?: string | PokemonV2MoveattributenameModelSelector | ((selector: PokemonV2MoveattributenameModelSelector) => PokemonV2MoveattributenameModelSelector)) { return this.__child(`pokemon_v2_moveattributename`, PokemonV2MoveattributenameModelSelector, builder) }
  pokemon_v2_moveattributename_aggregate(builder?: string | PokemonV2MoveattributenameAggregateModelSelector | ((selector: PokemonV2MoveattributenameAggregateModelSelector) => PokemonV2MoveattributenameAggregateModelSelector)) { return this.__child(`pokemon_v2_moveattributename_aggregate`, PokemonV2MoveattributenameAggregateModelSelector, builder) }
  pokemon_v2_moveattributename_by_pk(builder?: string | PokemonV2MoveattributenameModelSelector | ((selector: PokemonV2MoveattributenameModelSelector) => PokemonV2MoveattributenameModelSelector)) { return this.__child(`pokemon_v2_moveattributename_by_pk`, PokemonV2MoveattributenameModelSelector, builder) }
  pokemon_v2_movebattlestyle(builder?: string | PokemonV2MovebattlestyleModelSelector | ((selector: PokemonV2MovebattlestyleModelSelector) => PokemonV2MovebattlestyleModelSelector)) { return this.__child(`pokemon_v2_movebattlestyle`, PokemonV2MovebattlestyleModelSelector, builder) }
  pokemon_v2_movebattlestyle_aggregate(builder?: string | PokemonV2MovebattlestyleAggregateModelSelector | ((selector: PokemonV2MovebattlestyleAggregateModelSelector) => PokemonV2MovebattlestyleAggregateModelSelector)) { return this.__child(`pokemon_v2_movebattlestyle_aggregate`, PokemonV2MovebattlestyleAggregateModelSelector, builder) }
  pokemon_v2_movebattlestyle_by_pk(builder?: string | PokemonV2MovebattlestyleModelSelector | ((selector: PokemonV2MovebattlestyleModelSelector) => PokemonV2MovebattlestyleModelSelector)) { return this.__child(`pokemon_v2_movebattlestyle_by_pk`, PokemonV2MovebattlestyleModelSelector, builder) }
  pokemon_v2_movebattlestylename(builder?: string | PokemonV2MovebattlestylenameModelSelector | ((selector: PokemonV2MovebattlestylenameModelSelector) => PokemonV2MovebattlestylenameModelSelector)) { return this.__child(`pokemon_v2_movebattlestylename`, PokemonV2MovebattlestylenameModelSelector, builder) }
  pokemon_v2_movebattlestylename_aggregate(builder?: string | PokemonV2MovebattlestylenameAggregateModelSelector | ((selector: PokemonV2MovebattlestylenameAggregateModelSelector) => PokemonV2MovebattlestylenameAggregateModelSelector)) { return this.__child(`pokemon_v2_movebattlestylename_aggregate`, PokemonV2MovebattlestylenameAggregateModelSelector, builder) }
  pokemon_v2_movebattlestylename_by_pk(builder?: string | PokemonV2MovebattlestylenameModelSelector | ((selector: PokemonV2MovebattlestylenameModelSelector) => PokemonV2MovebattlestylenameModelSelector)) { return this.__child(`pokemon_v2_movebattlestylename_by_pk`, PokemonV2MovebattlestylenameModelSelector, builder) }
  pokemon_v2_movechange(builder?: string | PokemonV2MovechangeModelSelector | ((selector: PokemonV2MovechangeModelSelector) => PokemonV2MovechangeModelSelector)) { return this.__child(`pokemon_v2_movechange`, PokemonV2MovechangeModelSelector, builder) }
  pokemon_v2_movechange_aggregate(builder?: string | PokemonV2MovechangeAggregateModelSelector | ((selector: PokemonV2MovechangeAggregateModelSelector) => PokemonV2MovechangeAggregateModelSelector)) { return this.__child(`pokemon_v2_movechange_aggregate`, PokemonV2MovechangeAggregateModelSelector, builder) }
  pokemon_v2_movechange_by_pk(builder?: string | PokemonV2MovechangeModelSelector | ((selector: PokemonV2MovechangeModelSelector) => PokemonV2MovechangeModelSelector)) { return this.__child(`pokemon_v2_movechange_by_pk`, PokemonV2MovechangeModelSelector, builder) }
  pokemon_v2_movedamageclass(builder?: string | PokemonV2MovedamageclassModelSelector | ((selector: PokemonV2MovedamageclassModelSelector) => PokemonV2MovedamageclassModelSelector)) { return this.__child(`pokemon_v2_movedamageclass`, PokemonV2MovedamageclassModelSelector, builder) }
  pokemon_v2_movedamageclass_aggregate(builder?: string | PokemonV2MovedamageclassAggregateModelSelector | ((selector: PokemonV2MovedamageclassAggregateModelSelector) => PokemonV2MovedamageclassAggregateModelSelector)) { return this.__child(`pokemon_v2_movedamageclass_aggregate`, PokemonV2MovedamageclassAggregateModelSelector, builder) }
  pokemon_v2_movedamageclass_by_pk(builder?: string | PokemonV2MovedamageclassModelSelector | ((selector: PokemonV2MovedamageclassModelSelector) => PokemonV2MovedamageclassModelSelector)) { return this.__child(`pokemon_v2_movedamageclass_by_pk`, PokemonV2MovedamageclassModelSelector, builder) }
  pokemon_v2_movedamageclassdescription(builder?: string | PokemonV2MovedamageclassdescriptionModelSelector | ((selector: PokemonV2MovedamageclassdescriptionModelSelector) => PokemonV2MovedamageclassdescriptionModelSelector)) { return this.__child(`pokemon_v2_movedamageclassdescription`, PokemonV2MovedamageclassdescriptionModelSelector, builder) }
  pokemon_v2_movedamageclassdescription_aggregate(builder?: string | PokemonV2MovedamageclassdescriptionAggregateModelSelector | ((selector: PokemonV2MovedamageclassdescriptionAggregateModelSelector) => PokemonV2MovedamageclassdescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_movedamageclassdescription_aggregate`, PokemonV2MovedamageclassdescriptionAggregateModelSelector, builder) }
  pokemon_v2_movedamageclassdescription_by_pk(builder?: string | PokemonV2MovedamageclassdescriptionModelSelector | ((selector: PokemonV2MovedamageclassdescriptionModelSelector) => PokemonV2MovedamageclassdescriptionModelSelector)) { return this.__child(`pokemon_v2_movedamageclassdescription_by_pk`, PokemonV2MovedamageclassdescriptionModelSelector, builder) }
  pokemon_v2_movedamageclassname(builder?: string | PokemonV2MovedamageclassnameModelSelector | ((selector: PokemonV2MovedamageclassnameModelSelector) => PokemonV2MovedamageclassnameModelSelector)) { return this.__child(`pokemon_v2_movedamageclassname`, PokemonV2MovedamageclassnameModelSelector, builder) }
  pokemon_v2_movedamageclassname_aggregate(builder?: string | PokemonV2MovedamageclassnameAggregateModelSelector | ((selector: PokemonV2MovedamageclassnameAggregateModelSelector) => PokemonV2MovedamageclassnameAggregateModelSelector)) { return this.__child(`pokemon_v2_movedamageclassname_aggregate`, PokemonV2MovedamageclassnameAggregateModelSelector, builder) }
  pokemon_v2_movedamageclassname_by_pk(builder?: string | PokemonV2MovedamageclassnameModelSelector | ((selector: PokemonV2MovedamageclassnameModelSelector) => PokemonV2MovedamageclassnameModelSelector)) { return this.__child(`pokemon_v2_movedamageclassname_by_pk`, PokemonV2MovedamageclassnameModelSelector, builder) }
  pokemon_v2_moveeffect(builder?: string | PokemonV2MoveeffectModelSelector | ((selector: PokemonV2MoveeffectModelSelector) => PokemonV2MoveeffectModelSelector)) { return this.__child(`pokemon_v2_moveeffect`, PokemonV2MoveeffectModelSelector, builder) }
  pokemon_v2_moveeffect_aggregate(builder?: string | PokemonV2MoveeffectAggregateModelSelector | ((selector: PokemonV2MoveeffectAggregateModelSelector) => PokemonV2MoveeffectAggregateModelSelector)) { return this.__child(`pokemon_v2_moveeffect_aggregate`, PokemonV2MoveeffectAggregateModelSelector, builder) }
  pokemon_v2_moveeffect_by_pk(builder?: string | PokemonV2MoveeffectModelSelector | ((selector: PokemonV2MoveeffectModelSelector) => PokemonV2MoveeffectModelSelector)) { return this.__child(`pokemon_v2_moveeffect_by_pk`, PokemonV2MoveeffectModelSelector, builder) }
  pokemon_v2_moveeffectchange(builder?: string | PokemonV2MoveeffectchangeModelSelector | ((selector: PokemonV2MoveeffectchangeModelSelector) => PokemonV2MoveeffectchangeModelSelector)) { return this.__child(`pokemon_v2_moveeffectchange`, PokemonV2MoveeffectchangeModelSelector, builder) }
  pokemon_v2_moveeffectchange_aggregate(builder?: string | PokemonV2MoveeffectchangeAggregateModelSelector | ((selector: PokemonV2MoveeffectchangeAggregateModelSelector) => PokemonV2MoveeffectchangeAggregateModelSelector)) { return this.__child(`pokemon_v2_moveeffectchange_aggregate`, PokemonV2MoveeffectchangeAggregateModelSelector, builder) }
  pokemon_v2_moveeffectchange_by_pk(builder?: string | PokemonV2MoveeffectchangeModelSelector | ((selector: PokemonV2MoveeffectchangeModelSelector) => PokemonV2MoveeffectchangeModelSelector)) { return this.__child(`pokemon_v2_moveeffectchange_by_pk`, PokemonV2MoveeffectchangeModelSelector, builder) }
  pokemon_v2_moveeffectchangeeffecttext(builder?: string | PokemonV2MoveeffectchangeeffecttextModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextModelSelector) => PokemonV2MoveeffectchangeeffecttextModelSelector)) { return this.__child(`pokemon_v2_moveeffectchangeeffecttext`, PokemonV2MoveeffectchangeeffecttextModelSelector, builder) }
  pokemon_v2_moveeffectchangeeffecttext_aggregate(builder?: string | PokemonV2MoveeffectchangeeffecttextAggregateModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextAggregateModelSelector) => PokemonV2MoveeffectchangeeffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_moveeffectchangeeffecttext_aggregate`, PokemonV2MoveeffectchangeeffecttextAggregateModelSelector, builder) }
  pokemon_v2_moveeffectchangeeffecttext_by_pk(builder?: string | PokemonV2MoveeffectchangeeffecttextModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextModelSelector) => PokemonV2MoveeffectchangeeffecttextModelSelector)) { return this.__child(`pokemon_v2_moveeffectchangeeffecttext_by_pk`, PokemonV2MoveeffectchangeeffecttextModelSelector, builder) }
  pokemon_v2_moveeffecteffecttext(builder?: string | PokemonV2MoveeffecteffecttextModelSelector | ((selector: PokemonV2MoveeffecteffecttextModelSelector) => PokemonV2MoveeffecteffecttextModelSelector)) { return this.__child(`pokemon_v2_moveeffecteffecttext`, PokemonV2MoveeffecteffecttextModelSelector, builder) }
  pokemon_v2_moveeffecteffecttext_aggregate(builder?: string | PokemonV2MoveeffecteffecttextAggregateModelSelector | ((selector: PokemonV2MoveeffecteffecttextAggregateModelSelector) => PokemonV2MoveeffecteffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_moveeffecteffecttext_aggregate`, PokemonV2MoveeffecteffecttextAggregateModelSelector, builder) }
  pokemon_v2_moveeffecteffecttext_by_pk(builder?: string | PokemonV2MoveeffecteffecttextModelSelector | ((selector: PokemonV2MoveeffecteffecttextModelSelector) => PokemonV2MoveeffecteffecttextModelSelector)) { return this.__child(`pokemon_v2_moveeffecteffecttext_by_pk`, PokemonV2MoveeffecteffecttextModelSelector, builder) }
  pokemon_v2_moveflavortext(builder?: string | PokemonV2MoveflavortextModelSelector | ((selector: PokemonV2MoveflavortextModelSelector) => PokemonV2MoveflavortextModelSelector)) { return this.__child(`pokemon_v2_moveflavortext`, PokemonV2MoveflavortextModelSelector, builder) }
  pokemon_v2_moveflavortext_aggregate(builder?: string | PokemonV2MoveflavortextAggregateModelSelector | ((selector: PokemonV2MoveflavortextAggregateModelSelector) => PokemonV2MoveflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_moveflavortext_aggregate`, PokemonV2MoveflavortextAggregateModelSelector, builder) }
  pokemon_v2_moveflavortext_by_pk(builder?: string | PokemonV2MoveflavortextModelSelector | ((selector: PokemonV2MoveflavortextModelSelector) => PokemonV2MoveflavortextModelSelector)) { return this.__child(`pokemon_v2_moveflavortext_by_pk`, PokemonV2MoveflavortextModelSelector, builder) }
  pokemon_v2_movelearnmethod(builder?: string | PokemonV2MovelearnmethodModelSelector | ((selector: PokemonV2MovelearnmethodModelSelector) => PokemonV2MovelearnmethodModelSelector)) { return this.__child(`pokemon_v2_movelearnmethod`, PokemonV2MovelearnmethodModelSelector, builder) }
  pokemon_v2_movelearnmethod_aggregate(builder?: string | PokemonV2MovelearnmethodAggregateModelSelector | ((selector: PokemonV2MovelearnmethodAggregateModelSelector) => PokemonV2MovelearnmethodAggregateModelSelector)) { return this.__child(`pokemon_v2_movelearnmethod_aggregate`, PokemonV2MovelearnmethodAggregateModelSelector, builder) }
  pokemon_v2_movelearnmethod_by_pk(builder?: string | PokemonV2MovelearnmethodModelSelector | ((selector: PokemonV2MovelearnmethodModelSelector) => PokemonV2MovelearnmethodModelSelector)) { return this.__child(`pokemon_v2_movelearnmethod_by_pk`, PokemonV2MovelearnmethodModelSelector, builder) }
  pokemon_v2_movelearnmethoddescription(builder?: string | PokemonV2MovelearnmethoddescriptionModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionModelSelector) => PokemonV2MovelearnmethoddescriptionModelSelector)) { return this.__child(`pokemon_v2_movelearnmethoddescription`, PokemonV2MovelearnmethoddescriptionModelSelector, builder) }
  pokemon_v2_movelearnmethoddescription_aggregate(builder?: string | PokemonV2MovelearnmethoddescriptionAggregateModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionAggregateModelSelector) => PokemonV2MovelearnmethoddescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_movelearnmethoddescription_aggregate`, PokemonV2MovelearnmethoddescriptionAggregateModelSelector, builder) }
  pokemon_v2_movelearnmethoddescription_by_pk(builder?: string | PokemonV2MovelearnmethoddescriptionModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionModelSelector) => PokemonV2MovelearnmethoddescriptionModelSelector)) { return this.__child(`pokemon_v2_movelearnmethoddescription_by_pk`, PokemonV2MovelearnmethoddescriptionModelSelector, builder) }
  pokemon_v2_movelearnmethodname(builder?: string | PokemonV2MovelearnmethodnameModelSelector | ((selector: PokemonV2MovelearnmethodnameModelSelector) => PokemonV2MovelearnmethodnameModelSelector)) { return this.__child(`pokemon_v2_movelearnmethodname`, PokemonV2MovelearnmethodnameModelSelector, builder) }
  pokemon_v2_movelearnmethodname_aggregate(builder?: string | PokemonV2MovelearnmethodnameAggregateModelSelector | ((selector: PokemonV2MovelearnmethodnameAggregateModelSelector) => PokemonV2MovelearnmethodnameAggregateModelSelector)) { return this.__child(`pokemon_v2_movelearnmethodname_aggregate`, PokemonV2MovelearnmethodnameAggregateModelSelector, builder) }
  pokemon_v2_movelearnmethodname_by_pk(builder?: string | PokemonV2MovelearnmethodnameModelSelector | ((selector: PokemonV2MovelearnmethodnameModelSelector) => PokemonV2MovelearnmethodnameModelSelector)) { return this.__child(`pokemon_v2_movelearnmethodname_by_pk`, PokemonV2MovelearnmethodnameModelSelector, builder) }
  pokemon_v2_movemeta(builder?: string | PokemonV2MovemetaModelSelector | ((selector: PokemonV2MovemetaModelSelector) => PokemonV2MovemetaModelSelector)) { return this.__child(`pokemon_v2_movemeta`, PokemonV2MovemetaModelSelector, builder) }
  pokemon_v2_movemeta_aggregate(builder?: string | PokemonV2MovemetaAggregateModelSelector | ((selector: PokemonV2MovemetaAggregateModelSelector) => PokemonV2MovemetaAggregateModelSelector)) { return this.__child(`pokemon_v2_movemeta_aggregate`, PokemonV2MovemetaAggregateModelSelector, builder) }
  pokemon_v2_movemeta_by_pk(builder?: string | PokemonV2MovemetaModelSelector | ((selector: PokemonV2MovemetaModelSelector) => PokemonV2MovemetaModelSelector)) { return this.__child(`pokemon_v2_movemeta_by_pk`, PokemonV2MovemetaModelSelector, builder) }
  pokemon_v2_movemetaailment(builder?: string | PokemonV2MovemetaailmentModelSelector | ((selector: PokemonV2MovemetaailmentModelSelector) => PokemonV2MovemetaailmentModelSelector)) { return this.__child(`pokemon_v2_movemetaailment`, PokemonV2MovemetaailmentModelSelector, builder) }
  pokemon_v2_movemetaailment_aggregate(builder?: string | PokemonV2MovemetaailmentAggregateModelSelector | ((selector: PokemonV2MovemetaailmentAggregateModelSelector) => PokemonV2MovemetaailmentAggregateModelSelector)) { return this.__child(`pokemon_v2_movemetaailment_aggregate`, PokemonV2MovemetaailmentAggregateModelSelector, builder) }
  pokemon_v2_movemetaailment_by_pk(builder?: string | PokemonV2MovemetaailmentModelSelector | ((selector: PokemonV2MovemetaailmentModelSelector) => PokemonV2MovemetaailmentModelSelector)) { return this.__child(`pokemon_v2_movemetaailment_by_pk`, PokemonV2MovemetaailmentModelSelector, builder) }
  pokemon_v2_movemetaailmentname(builder?: string | PokemonV2MovemetaailmentnameModelSelector | ((selector: PokemonV2MovemetaailmentnameModelSelector) => PokemonV2MovemetaailmentnameModelSelector)) { return this.__child(`pokemon_v2_movemetaailmentname`, PokemonV2MovemetaailmentnameModelSelector, builder) }
  pokemon_v2_movemetaailmentname_aggregate(builder?: string | PokemonV2MovemetaailmentnameAggregateModelSelector | ((selector: PokemonV2MovemetaailmentnameAggregateModelSelector) => PokemonV2MovemetaailmentnameAggregateModelSelector)) { return this.__child(`pokemon_v2_movemetaailmentname_aggregate`, PokemonV2MovemetaailmentnameAggregateModelSelector, builder) }
  pokemon_v2_movemetaailmentname_by_pk(builder?: string | PokemonV2MovemetaailmentnameModelSelector | ((selector: PokemonV2MovemetaailmentnameModelSelector) => PokemonV2MovemetaailmentnameModelSelector)) { return this.__child(`pokemon_v2_movemetaailmentname_by_pk`, PokemonV2MovemetaailmentnameModelSelector, builder) }
  pokemon_v2_movemetacategory(builder?: string | PokemonV2MovemetacategoryModelSelector | ((selector: PokemonV2MovemetacategoryModelSelector) => PokemonV2MovemetacategoryModelSelector)) { return this.__child(`pokemon_v2_movemetacategory`, PokemonV2MovemetacategoryModelSelector, builder) }
  pokemon_v2_movemetacategory_aggregate(builder?: string | PokemonV2MovemetacategoryAggregateModelSelector | ((selector: PokemonV2MovemetacategoryAggregateModelSelector) => PokemonV2MovemetacategoryAggregateModelSelector)) { return this.__child(`pokemon_v2_movemetacategory_aggregate`, PokemonV2MovemetacategoryAggregateModelSelector, builder) }
  pokemon_v2_movemetacategory_by_pk(builder?: string | PokemonV2MovemetacategoryModelSelector | ((selector: PokemonV2MovemetacategoryModelSelector) => PokemonV2MovemetacategoryModelSelector)) { return this.__child(`pokemon_v2_movemetacategory_by_pk`, PokemonV2MovemetacategoryModelSelector, builder) }
  pokemon_v2_movemetacategorydescription(builder?: string | PokemonV2MovemetacategorydescriptionModelSelector | ((selector: PokemonV2MovemetacategorydescriptionModelSelector) => PokemonV2MovemetacategorydescriptionModelSelector)) { return this.__child(`pokemon_v2_movemetacategorydescription`, PokemonV2MovemetacategorydescriptionModelSelector, builder) }
  pokemon_v2_movemetacategorydescription_aggregate(builder?: string | PokemonV2MovemetacategorydescriptionAggregateModelSelector | ((selector: PokemonV2MovemetacategorydescriptionAggregateModelSelector) => PokemonV2MovemetacategorydescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_movemetacategorydescription_aggregate`, PokemonV2MovemetacategorydescriptionAggregateModelSelector, builder) }
  pokemon_v2_movemetacategorydescription_by_pk(builder?: string | PokemonV2MovemetacategorydescriptionModelSelector | ((selector: PokemonV2MovemetacategorydescriptionModelSelector) => PokemonV2MovemetacategorydescriptionModelSelector)) { return this.__child(`pokemon_v2_movemetacategorydescription_by_pk`, PokemonV2MovemetacategorydescriptionModelSelector, builder) }
  pokemon_v2_movemetastatchange(builder?: string | PokemonV2MovemetastatchangeModelSelector | ((selector: PokemonV2MovemetastatchangeModelSelector) => PokemonV2MovemetastatchangeModelSelector)) { return this.__child(`pokemon_v2_movemetastatchange`, PokemonV2MovemetastatchangeModelSelector, builder) }
  pokemon_v2_movemetastatchange_aggregate(builder?: string | PokemonV2MovemetastatchangeAggregateModelSelector | ((selector: PokemonV2MovemetastatchangeAggregateModelSelector) => PokemonV2MovemetastatchangeAggregateModelSelector)) { return this.__child(`pokemon_v2_movemetastatchange_aggregate`, PokemonV2MovemetastatchangeAggregateModelSelector, builder) }
  pokemon_v2_movemetastatchange_by_pk(builder?: string | PokemonV2MovemetastatchangeModelSelector | ((selector: PokemonV2MovemetastatchangeModelSelector) => PokemonV2MovemetastatchangeModelSelector)) { return this.__child(`pokemon_v2_movemetastatchange_by_pk`, PokemonV2MovemetastatchangeModelSelector, builder) }
  pokemon_v2_movename(builder?: string | PokemonV2MovenameModelSelector | ((selector: PokemonV2MovenameModelSelector) => PokemonV2MovenameModelSelector)) { return this.__child(`pokemon_v2_movename`, PokemonV2MovenameModelSelector, builder) }
  pokemon_v2_movename_aggregate(builder?: string | PokemonV2MovenameAggregateModelSelector | ((selector: PokemonV2MovenameAggregateModelSelector) => PokemonV2MovenameAggregateModelSelector)) { return this.__child(`pokemon_v2_movename_aggregate`, PokemonV2MovenameAggregateModelSelector, builder) }
  pokemon_v2_movename_by_pk(builder?: string | PokemonV2MovenameModelSelector | ((selector: PokemonV2MovenameModelSelector) => PokemonV2MovenameModelSelector)) { return this.__child(`pokemon_v2_movename_by_pk`, PokemonV2MovenameModelSelector, builder) }
  pokemon_v2_movetarget(builder?: string | PokemonV2MovetargetModelSelector | ((selector: PokemonV2MovetargetModelSelector) => PokemonV2MovetargetModelSelector)) { return this.__child(`pokemon_v2_movetarget`, PokemonV2MovetargetModelSelector, builder) }
  pokemon_v2_movetarget_aggregate(builder?: string | PokemonV2MovetargetAggregateModelSelector | ((selector: PokemonV2MovetargetAggregateModelSelector) => PokemonV2MovetargetAggregateModelSelector)) { return this.__child(`pokemon_v2_movetarget_aggregate`, PokemonV2MovetargetAggregateModelSelector, builder) }
  pokemon_v2_movetarget_by_pk(builder?: string | PokemonV2MovetargetModelSelector | ((selector: PokemonV2MovetargetModelSelector) => PokemonV2MovetargetModelSelector)) { return this.__child(`pokemon_v2_movetarget_by_pk`, PokemonV2MovetargetModelSelector, builder) }
  pokemon_v2_movetargetdescription(builder?: string | PokemonV2MovetargetdescriptionModelSelector | ((selector: PokemonV2MovetargetdescriptionModelSelector) => PokemonV2MovetargetdescriptionModelSelector)) { return this.__child(`pokemon_v2_movetargetdescription`, PokemonV2MovetargetdescriptionModelSelector, builder) }
  pokemon_v2_movetargetdescription_aggregate(builder?: string | PokemonV2MovetargetdescriptionAggregateModelSelector | ((selector: PokemonV2MovetargetdescriptionAggregateModelSelector) => PokemonV2MovetargetdescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_movetargetdescription_aggregate`, PokemonV2MovetargetdescriptionAggregateModelSelector, builder) }
  pokemon_v2_movetargetdescription_by_pk(builder?: string | PokemonV2MovetargetdescriptionModelSelector | ((selector: PokemonV2MovetargetdescriptionModelSelector) => PokemonV2MovetargetdescriptionModelSelector)) { return this.__child(`pokemon_v2_movetargetdescription_by_pk`, PokemonV2MovetargetdescriptionModelSelector, builder) }
  pokemon_v2_movetargetname(builder?: string | PokemonV2MovetargetnameModelSelector | ((selector: PokemonV2MovetargetnameModelSelector) => PokemonV2MovetargetnameModelSelector)) { return this.__child(`pokemon_v2_movetargetname`, PokemonV2MovetargetnameModelSelector, builder) }
  pokemon_v2_movetargetname_aggregate(builder?: string | PokemonV2MovetargetnameAggregateModelSelector | ((selector: PokemonV2MovetargetnameAggregateModelSelector) => PokemonV2MovetargetnameAggregateModelSelector)) { return this.__child(`pokemon_v2_movetargetname_aggregate`, PokemonV2MovetargetnameAggregateModelSelector, builder) }
  pokemon_v2_movetargetname_by_pk(builder?: string | PokemonV2MovetargetnameModelSelector | ((selector: PokemonV2MovetargetnameModelSelector) => PokemonV2MovetargetnameModelSelector)) { return this.__child(`pokemon_v2_movetargetname_by_pk`, PokemonV2MovetargetnameModelSelector, builder) }
  pokemon_v2_nature(builder?: string | PokemonV2NatureModelSelector | ((selector: PokemonV2NatureModelSelector) => PokemonV2NatureModelSelector)) { return this.__child(`pokemon_v2_nature`, PokemonV2NatureModelSelector, builder) }
  pokemon_v2_nature_aggregate(builder?: string | PokemonV2NatureAggregateModelSelector | ((selector: PokemonV2NatureAggregateModelSelector) => PokemonV2NatureAggregateModelSelector)) { return this.__child(`pokemon_v2_nature_aggregate`, PokemonV2NatureAggregateModelSelector, builder) }
  pokemon_v2_nature_by_pk(builder?: string | PokemonV2NatureModelSelector | ((selector: PokemonV2NatureModelSelector) => PokemonV2NatureModelSelector)) { return this.__child(`pokemon_v2_nature_by_pk`, PokemonV2NatureModelSelector, builder) }
  pokemon_v2_naturebattlestylepreference(builder?: string | PokemonV2NaturebattlestylepreferenceModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceModelSelector) => PokemonV2NaturebattlestylepreferenceModelSelector)) { return this.__child(`pokemon_v2_naturebattlestylepreference`, PokemonV2NaturebattlestylepreferenceModelSelector, builder) }
  pokemon_v2_naturebattlestylepreference_aggregate(builder?: string | PokemonV2NaturebattlestylepreferenceAggregateModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceAggregateModelSelector) => PokemonV2NaturebattlestylepreferenceAggregateModelSelector)) { return this.__child(`pokemon_v2_naturebattlestylepreference_aggregate`, PokemonV2NaturebattlestylepreferenceAggregateModelSelector, builder) }
  pokemon_v2_naturebattlestylepreference_by_pk(builder?: string | PokemonV2NaturebattlestylepreferenceModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceModelSelector) => PokemonV2NaturebattlestylepreferenceModelSelector)) { return this.__child(`pokemon_v2_naturebattlestylepreference_by_pk`, PokemonV2NaturebattlestylepreferenceModelSelector, builder) }
  pokemon_v2_naturename(builder?: string | PokemonV2NaturenameModelSelector | ((selector: PokemonV2NaturenameModelSelector) => PokemonV2NaturenameModelSelector)) { return this.__child(`pokemon_v2_naturename`, PokemonV2NaturenameModelSelector, builder) }
  pokemon_v2_naturename_aggregate(builder?: string | PokemonV2NaturenameAggregateModelSelector | ((selector: PokemonV2NaturenameAggregateModelSelector) => PokemonV2NaturenameAggregateModelSelector)) { return this.__child(`pokemon_v2_naturename_aggregate`, PokemonV2NaturenameAggregateModelSelector, builder) }
  pokemon_v2_naturename_by_pk(builder?: string | PokemonV2NaturenameModelSelector | ((selector: PokemonV2NaturenameModelSelector) => PokemonV2NaturenameModelSelector)) { return this.__child(`pokemon_v2_naturename_by_pk`, PokemonV2NaturenameModelSelector, builder) }
  pokemon_v2_naturepokeathlonstat(builder?: string | PokemonV2NaturepokeathlonstatModelSelector | ((selector: PokemonV2NaturepokeathlonstatModelSelector) => PokemonV2NaturepokeathlonstatModelSelector)) { return this.__child(`pokemon_v2_naturepokeathlonstat`, PokemonV2NaturepokeathlonstatModelSelector, builder) }
  pokemon_v2_naturepokeathlonstat_aggregate(builder?: string | PokemonV2NaturepokeathlonstatAggregateModelSelector | ((selector: PokemonV2NaturepokeathlonstatAggregateModelSelector) => PokemonV2NaturepokeathlonstatAggregateModelSelector)) { return this.__child(`pokemon_v2_naturepokeathlonstat_aggregate`, PokemonV2NaturepokeathlonstatAggregateModelSelector, builder) }
  pokemon_v2_naturepokeathlonstat_by_pk(builder?: string | PokemonV2NaturepokeathlonstatModelSelector | ((selector: PokemonV2NaturepokeathlonstatModelSelector) => PokemonV2NaturepokeathlonstatModelSelector)) { return this.__child(`pokemon_v2_naturepokeathlonstat_by_pk`, PokemonV2NaturepokeathlonstatModelSelector, builder) }
  pokemon_v2_palpark(builder?: string | PokemonV2PalparkModelSelector | ((selector: PokemonV2PalparkModelSelector) => PokemonV2PalparkModelSelector)) { return this.__child(`pokemon_v2_palpark`, PokemonV2PalparkModelSelector, builder) }
  pokemon_v2_palpark_aggregate(builder?: string | PokemonV2PalparkAggregateModelSelector | ((selector: PokemonV2PalparkAggregateModelSelector) => PokemonV2PalparkAggregateModelSelector)) { return this.__child(`pokemon_v2_palpark_aggregate`, PokemonV2PalparkAggregateModelSelector, builder) }
  pokemon_v2_palpark_by_pk(builder?: string | PokemonV2PalparkModelSelector | ((selector: PokemonV2PalparkModelSelector) => PokemonV2PalparkModelSelector)) { return this.__child(`pokemon_v2_palpark_by_pk`, PokemonV2PalparkModelSelector, builder) }
  pokemon_v2_palparkarea(builder?: string | PokemonV2PalparkareaModelSelector | ((selector: PokemonV2PalparkareaModelSelector) => PokemonV2PalparkareaModelSelector)) { return this.__child(`pokemon_v2_palparkarea`, PokemonV2PalparkareaModelSelector, builder) }
  pokemon_v2_palparkarea_aggregate(builder?: string | PokemonV2PalparkareaAggregateModelSelector | ((selector: PokemonV2PalparkareaAggregateModelSelector) => PokemonV2PalparkareaAggregateModelSelector)) { return this.__child(`pokemon_v2_palparkarea_aggregate`, PokemonV2PalparkareaAggregateModelSelector, builder) }
  pokemon_v2_palparkarea_by_pk(builder?: string | PokemonV2PalparkareaModelSelector | ((selector: PokemonV2PalparkareaModelSelector) => PokemonV2PalparkareaModelSelector)) { return this.__child(`pokemon_v2_palparkarea_by_pk`, PokemonV2PalparkareaModelSelector, builder) }
  pokemon_v2_palparkareaname(builder?: string | PokemonV2PalparkareanameModelSelector | ((selector: PokemonV2PalparkareanameModelSelector) => PokemonV2PalparkareanameModelSelector)) { return this.__child(`pokemon_v2_palparkareaname`, PokemonV2PalparkareanameModelSelector, builder) }
  pokemon_v2_palparkareaname_aggregate(builder?: string | PokemonV2PalparkareanameAggregateModelSelector | ((selector: PokemonV2PalparkareanameAggregateModelSelector) => PokemonV2PalparkareanameAggregateModelSelector)) { return this.__child(`pokemon_v2_palparkareaname_aggregate`, PokemonV2PalparkareanameAggregateModelSelector, builder) }
  pokemon_v2_palparkareaname_by_pk(builder?: string | PokemonV2PalparkareanameModelSelector | ((selector: PokemonV2PalparkareanameModelSelector) => PokemonV2PalparkareanameModelSelector)) { return this.__child(`pokemon_v2_palparkareaname_by_pk`, PokemonV2PalparkareanameModelSelector, builder) }
  pokemon_v2_pokeathlonstat(builder?: string | PokemonV2PokeathlonstatModelSelector | ((selector: PokemonV2PokeathlonstatModelSelector) => PokemonV2PokeathlonstatModelSelector)) { return this.__child(`pokemon_v2_pokeathlonstat`, PokemonV2PokeathlonstatModelSelector, builder) }
  pokemon_v2_pokeathlonstat_aggregate(builder?: string | PokemonV2PokeathlonstatAggregateModelSelector | ((selector: PokemonV2PokeathlonstatAggregateModelSelector) => PokemonV2PokeathlonstatAggregateModelSelector)) { return this.__child(`pokemon_v2_pokeathlonstat_aggregate`, PokemonV2PokeathlonstatAggregateModelSelector, builder) }
  pokemon_v2_pokeathlonstat_by_pk(builder?: string | PokemonV2PokeathlonstatModelSelector | ((selector: PokemonV2PokeathlonstatModelSelector) => PokemonV2PokeathlonstatModelSelector)) { return this.__child(`pokemon_v2_pokeathlonstat_by_pk`, PokemonV2PokeathlonstatModelSelector, builder) }
  pokemon_v2_pokeathlonstatname(builder?: string | PokemonV2PokeathlonstatnameModelSelector | ((selector: PokemonV2PokeathlonstatnameModelSelector) => PokemonV2PokeathlonstatnameModelSelector)) { return this.__child(`pokemon_v2_pokeathlonstatname`, PokemonV2PokeathlonstatnameModelSelector, builder) }
  pokemon_v2_pokeathlonstatname_aggregate(builder?: string | PokemonV2PokeathlonstatnameAggregateModelSelector | ((selector: PokemonV2PokeathlonstatnameAggregateModelSelector) => PokemonV2PokeathlonstatnameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokeathlonstatname_aggregate`, PokemonV2PokeathlonstatnameAggregateModelSelector, builder) }
  pokemon_v2_pokeathlonstatname_by_pk(builder?: string | PokemonV2PokeathlonstatnameModelSelector | ((selector: PokemonV2PokeathlonstatnameModelSelector) => PokemonV2PokeathlonstatnameModelSelector)) { return this.__child(`pokemon_v2_pokeathlonstatname_by_pk`, PokemonV2PokeathlonstatnameModelSelector, builder) }
  pokemon_v2_pokedex(builder?: string | PokemonV2PokedexModelSelector | ((selector: PokemonV2PokedexModelSelector) => PokemonV2PokedexModelSelector)) { return this.__child(`pokemon_v2_pokedex`, PokemonV2PokedexModelSelector, builder) }
  pokemon_v2_pokedex_aggregate(builder?: string | PokemonV2PokedexAggregateModelSelector | ((selector: PokemonV2PokedexAggregateModelSelector) => PokemonV2PokedexAggregateModelSelector)) { return this.__child(`pokemon_v2_pokedex_aggregate`, PokemonV2PokedexAggregateModelSelector, builder) }
  pokemon_v2_pokedex_by_pk(builder?: string | PokemonV2PokedexModelSelector | ((selector: PokemonV2PokedexModelSelector) => PokemonV2PokedexModelSelector)) { return this.__child(`pokemon_v2_pokedex_by_pk`, PokemonV2PokedexModelSelector, builder) }
  pokemon_v2_pokedexdescription(builder?: string | PokemonV2PokedexdescriptionModelSelector | ((selector: PokemonV2PokedexdescriptionModelSelector) => PokemonV2PokedexdescriptionModelSelector)) { return this.__child(`pokemon_v2_pokedexdescription`, PokemonV2PokedexdescriptionModelSelector, builder) }
  pokemon_v2_pokedexdescription_aggregate(builder?: string | PokemonV2PokedexdescriptionAggregateModelSelector | ((selector: PokemonV2PokedexdescriptionAggregateModelSelector) => PokemonV2PokedexdescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_pokedexdescription_aggregate`, PokemonV2PokedexdescriptionAggregateModelSelector, builder) }
  pokemon_v2_pokedexdescription_by_pk(builder?: string | PokemonV2PokedexdescriptionModelSelector | ((selector: PokemonV2PokedexdescriptionModelSelector) => PokemonV2PokedexdescriptionModelSelector)) { return this.__child(`pokemon_v2_pokedexdescription_by_pk`, PokemonV2PokedexdescriptionModelSelector, builder) }
  pokemon_v2_pokedexname(builder?: string | PokemonV2PokedexnameModelSelector | ((selector: PokemonV2PokedexnameModelSelector) => PokemonV2PokedexnameModelSelector)) { return this.__child(`pokemon_v2_pokedexname`, PokemonV2PokedexnameModelSelector, builder) }
  pokemon_v2_pokedexname_aggregate(builder?: string | PokemonV2PokedexnameAggregateModelSelector | ((selector: PokemonV2PokedexnameAggregateModelSelector) => PokemonV2PokedexnameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokedexname_aggregate`, PokemonV2PokedexnameAggregateModelSelector, builder) }
  pokemon_v2_pokedexname_by_pk(builder?: string | PokemonV2PokedexnameModelSelector | ((selector: PokemonV2PokedexnameModelSelector) => PokemonV2PokedexnameModelSelector)) { return this.__child(`pokemon_v2_pokedexname_by_pk`, PokemonV2PokedexnameModelSelector, builder) }
  pokemon_v2_pokedexversiongroup(builder?: string | PokemonV2PokedexversiongroupModelSelector | ((selector: PokemonV2PokedexversiongroupModelSelector) => PokemonV2PokedexversiongroupModelSelector)) { return this.__child(`pokemon_v2_pokedexversiongroup`, PokemonV2PokedexversiongroupModelSelector, builder) }
  pokemon_v2_pokedexversiongroup_aggregate(builder?: string | PokemonV2PokedexversiongroupAggregateModelSelector | ((selector: PokemonV2PokedexversiongroupAggregateModelSelector) => PokemonV2PokedexversiongroupAggregateModelSelector)) { return this.__child(`pokemon_v2_pokedexversiongroup_aggregate`, PokemonV2PokedexversiongroupAggregateModelSelector, builder) }
  pokemon_v2_pokedexversiongroup_by_pk(builder?: string | PokemonV2PokedexversiongroupModelSelector | ((selector: PokemonV2PokedexversiongroupModelSelector) => PokemonV2PokedexversiongroupModelSelector)) { return this.__child(`pokemon_v2_pokedexversiongroup_by_pk`, PokemonV2PokedexversiongroupModelSelector, builder) }
  pokemon_v2_pokemon(builder?: string | PokemonV2PokemonModelSelector | ((selector: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector)) { return this.__child(`pokemon_v2_pokemon`, PokemonV2PokemonModelSelector, builder) }
  pokemon_v2_pokemon_aggregate(builder?: string | PokemonV2PokemonAggregateModelSelector | ((selector: PokemonV2PokemonAggregateModelSelector) => PokemonV2PokemonAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemon_aggregate`, PokemonV2PokemonAggregateModelSelector, builder) }
  pokemon_v2_pokemon_by_pk(builder?: string | PokemonV2PokemonModelSelector | ((selector: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector)) { return this.__child(`pokemon_v2_pokemon_by_pk`, PokemonV2PokemonModelSelector, builder) }
  pokemon_v2_pokemonability(builder?: string | PokemonV2PokemonabilityModelSelector | ((selector: PokemonV2PokemonabilityModelSelector) => PokemonV2PokemonabilityModelSelector)) { return this.__child(`pokemon_v2_pokemonability`, PokemonV2PokemonabilityModelSelector, builder) }
  pokemon_v2_pokemonability_aggregate(builder?: string | PokemonV2PokemonabilityAggregateModelSelector | ((selector: PokemonV2PokemonabilityAggregateModelSelector) => PokemonV2PokemonabilityAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonability_aggregate`, PokemonV2PokemonabilityAggregateModelSelector, builder) }
  pokemon_v2_pokemonability_by_pk(builder?: string | PokemonV2PokemonabilityModelSelector | ((selector: PokemonV2PokemonabilityModelSelector) => PokemonV2PokemonabilityModelSelector)) { return this.__child(`pokemon_v2_pokemonability_by_pk`, PokemonV2PokemonabilityModelSelector, builder) }
  pokemon_v2_pokemoncolor(builder?: string | PokemonV2PokemoncolorModelSelector | ((selector: PokemonV2PokemoncolorModelSelector) => PokemonV2PokemoncolorModelSelector)) { return this.__child(`pokemon_v2_pokemoncolor`, PokemonV2PokemoncolorModelSelector, builder) }
  pokemon_v2_pokemoncolor_aggregate(builder?: string | PokemonV2PokemoncolorAggregateModelSelector | ((selector: PokemonV2PokemoncolorAggregateModelSelector) => PokemonV2PokemoncolorAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemoncolor_aggregate`, PokemonV2PokemoncolorAggregateModelSelector, builder) }
  pokemon_v2_pokemoncolor_by_pk(builder?: string | PokemonV2PokemoncolorModelSelector | ((selector: PokemonV2PokemoncolorModelSelector) => PokemonV2PokemoncolorModelSelector)) { return this.__child(`pokemon_v2_pokemoncolor_by_pk`, PokemonV2PokemoncolorModelSelector, builder) }
  pokemon_v2_pokemoncolorname(builder?: string | PokemonV2PokemoncolornameModelSelector | ((selector: PokemonV2PokemoncolornameModelSelector) => PokemonV2PokemoncolornameModelSelector)) { return this.__child(`pokemon_v2_pokemoncolorname`, PokemonV2PokemoncolornameModelSelector, builder) }
  pokemon_v2_pokemoncolorname_aggregate(builder?: string | PokemonV2PokemoncolornameAggregateModelSelector | ((selector: PokemonV2PokemoncolornameAggregateModelSelector) => PokemonV2PokemoncolornameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemoncolorname_aggregate`, PokemonV2PokemoncolornameAggregateModelSelector, builder) }
  pokemon_v2_pokemoncolorname_by_pk(builder?: string | PokemonV2PokemoncolornameModelSelector | ((selector: PokemonV2PokemoncolornameModelSelector) => PokemonV2PokemoncolornameModelSelector)) { return this.__child(`pokemon_v2_pokemoncolorname_by_pk`, PokemonV2PokemoncolornameModelSelector, builder) }
  pokemon_v2_pokemondexnumber(builder?: string | PokemonV2PokemondexnumberModelSelector | ((selector: PokemonV2PokemondexnumberModelSelector) => PokemonV2PokemondexnumberModelSelector)) { return this.__child(`pokemon_v2_pokemondexnumber`, PokemonV2PokemondexnumberModelSelector, builder) }
  pokemon_v2_pokemondexnumber_aggregate(builder?: string | PokemonV2PokemondexnumberAggregateModelSelector | ((selector: PokemonV2PokemondexnumberAggregateModelSelector) => PokemonV2PokemondexnumberAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemondexnumber_aggregate`, PokemonV2PokemondexnumberAggregateModelSelector, builder) }
  pokemon_v2_pokemondexnumber_by_pk(builder?: string | PokemonV2PokemondexnumberModelSelector | ((selector: PokemonV2PokemondexnumberModelSelector) => PokemonV2PokemondexnumberModelSelector)) { return this.__child(`pokemon_v2_pokemondexnumber_by_pk`, PokemonV2PokemondexnumberModelSelector, builder) }
  pokemon_v2_pokemonegggroup(builder?: string | PokemonV2PokemonegggroupModelSelector | ((selector: PokemonV2PokemonegggroupModelSelector) => PokemonV2PokemonegggroupModelSelector)) { return this.__child(`pokemon_v2_pokemonegggroup`, PokemonV2PokemonegggroupModelSelector, builder) }
  pokemon_v2_pokemonegggroup_aggregate(builder?: string | PokemonV2PokemonegggroupAggregateModelSelector | ((selector: PokemonV2PokemonegggroupAggregateModelSelector) => PokemonV2PokemonegggroupAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonegggroup_aggregate`, PokemonV2PokemonegggroupAggregateModelSelector, builder) }
  pokemon_v2_pokemonegggroup_by_pk(builder?: string | PokemonV2PokemonegggroupModelSelector | ((selector: PokemonV2PokemonegggroupModelSelector) => PokemonV2PokemonegggroupModelSelector)) { return this.__child(`pokemon_v2_pokemonegggroup_by_pk`, PokemonV2PokemonegggroupModelSelector, builder) }
  pokemon_v2_pokemonevolution(builder?: string | PokemonV2PokemonevolutionModelSelector | ((selector: PokemonV2PokemonevolutionModelSelector) => PokemonV2PokemonevolutionModelSelector)) { return this.__child(`pokemon_v2_pokemonevolution`, PokemonV2PokemonevolutionModelSelector, builder) }
  pokemon_v2_pokemonevolution_aggregate(builder?: string | PokemonV2PokemonevolutionAggregateModelSelector | ((selector: PokemonV2PokemonevolutionAggregateModelSelector) => PokemonV2PokemonevolutionAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonevolution_aggregate`, PokemonV2PokemonevolutionAggregateModelSelector, builder) }
  pokemon_v2_pokemonevolution_by_pk(builder?: string | PokemonV2PokemonevolutionModelSelector | ((selector: PokemonV2PokemonevolutionModelSelector) => PokemonV2PokemonevolutionModelSelector)) { return this.__child(`pokemon_v2_pokemonevolution_by_pk`, PokemonV2PokemonevolutionModelSelector, builder) }
  pokemon_v2_pokemonform(builder?: string | PokemonV2PokemonformModelSelector | ((selector: PokemonV2PokemonformModelSelector) => PokemonV2PokemonformModelSelector)) { return this.__child(`pokemon_v2_pokemonform`, PokemonV2PokemonformModelSelector, builder) }
  pokemon_v2_pokemonform_aggregate(builder?: string | PokemonV2PokemonformAggregateModelSelector | ((selector: PokemonV2PokemonformAggregateModelSelector) => PokemonV2PokemonformAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonform_aggregate`, PokemonV2PokemonformAggregateModelSelector, builder) }
  pokemon_v2_pokemonform_by_pk(builder?: string | PokemonV2PokemonformModelSelector | ((selector: PokemonV2PokemonformModelSelector) => PokemonV2PokemonformModelSelector)) { return this.__child(`pokemon_v2_pokemonform_by_pk`, PokemonV2PokemonformModelSelector, builder) }
  pokemon_v2_pokemonformgeneration(builder?: string | PokemonV2PokemonformgenerationModelSelector | ((selector: PokemonV2PokemonformgenerationModelSelector) => PokemonV2PokemonformgenerationModelSelector)) { return this.__child(`pokemon_v2_pokemonformgeneration`, PokemonV2PokemonformgenerationModelSelector, builder) }
  pokemon_v2_pokemonformgeneration_aggregate(builder?: string | PokemonV2PokemonformgenerationAggregateModelSelector | ((selector: PokemonV2PokemonformgenerationAggregateModelSelector) => PokemonV2PokemonformgenerationAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonformgeneration_aggregate`, PokemonV2PokemonformgenerationAggregateModelSelector, builder) }
  pokemon_v2_pokemonformgeneration_by_pk(builder?: string | PokemonV2PokemonformgenerationModelSelector | ((selector: PokemonV2PokemonformgenerationModelSelector) => PokemonV2PokemonformgenerationModelSelector)) { return this.__child(`pokemon_v2_pokemonformgeneration_by_pk`, PokemonV2PokemonformgenerationModelSelector, builder) }
  pokemon_v2_pokemonformname(builder?: string | PokemonV2PokemonformnameModelSelector | ((selector: PokemonV2PokemonformnameModelSelector) => PokemonV2PokemonformnameModelSelector)) { return this.__child(`pokemon_v2_pokemonformname`, PokemonV2PokemonformnameModelSelector, builder) }
  pokemon_v2_pokemonformname_aggregate(builder?: string | PokemonV2PokemonformnameAggregateModelSelector | ((selector: PokemonV2PokemonformnameAggregateModelSelector) => PokemonV2PokemonformnameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonformname_aggregate`, PokemonV2PokemonformnameAggregateModelSelector, builder) }
  pokemon_v2_pokemonformname_by_pk(builder?: string | PokemonV2PokemonformnameModelSelector | ((selector: PokemonV2PokemonformnameModelSelector) => PokemonV2PokemonformnameModelSelector)) { return this.__child(`pokemon_v2_pokemonformname_by_pk`, PokemonV2PokemonformnameModelSelector, builder) }
  pokemon_v2_pokemonformsprites(builder?: string | PokemonV2PokemonformspritesModelSelector | ((selector: PokemonV2PokemonformspritesModelSelector) => PokemonV2PokemonformspritesModelSelector)) { return this.__child(`pokemon_v2_pokemonformsprites`, PokemonV2PokemonformspritesModelSelector, builder) }
  pokemon_v2_pokemonformsprites_aggregate(builder?: string | PokemonV2PokemonformspritesAggregateModelSelector | ((selector: PokemonV2PokemonformspritesAggregateModelSelector) => PokemonV2PokemonformspritesAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonformsprites_aggregate`, PokemonV2PokemonformspritesAggregateModelSelector, builder) }
  pokemon_v2_pokemonformsprites_by_pk(builder?: string | PokemonV2PokemonformspritesModelSelector | ((selector: PokemonV2PokemonformspritesModelSelector) => PokemonV2PokemonformspritesModelSelector)) { return this.__child(`pokemon_v2_pokemonformsprites_by_pk`, PokemonV2PokemonformspritesModelSelector, builder) }
  pokemon_v2_pokemonformtype(builder?: string | PokemonV2PokemonformtypeModelSelector | ((selector: PokemonV2PokemonformtypeModelSelector) => PokemonV2PokemonformtypeModelSelector)) { return this.__child(`pokemon_v2_pokemonformtype`, PokemonV2PokemonformtypeModelSelector, builder) }
  pokemon_v2_pokemonformtype_aggregate(builder?: string | PokemonV2PokemonformtypeAggregateModelSelector | ((selector: PokemonV2PokemonformtypeAggregateModelSelector) => PokemonV2PokemonformtypeAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonformtype_aggregate`, PokemonV2PokemonformtypeAggregateModelSelector, builder) }
  pokemon_v2_pokemonformtype_by_pk(builder?: string | PokemonV2PokemonformtypeModelSelector | ((selector: PokemonV2PokemonformtypeModelSelector) => PokemonV2PokemonformtypeModelSelector)) { return this.__child(`pokemon_v2_pokemonformtype_by_pk`, PokemonV2PokemonformtypeModelSelector, builder) }
  pokemon_v2_pokemongameindex(builder?: string | PokemonV2PokemongameindexModelSelector | ((selector: PokemonV2PokemongameindexModelSelector) => PokemonV2PokemongameindexModelSelector)) { return this.__child(`pokemon_v2_pokemongameindex`, PokemonV2PokemongameindexModelSelector, builder) }
  pokemon_v2_pokemongameindex_aggregate(builder?: string | PokemonV2PokemongameindexAggregateModelSelector | ((selector: PokemonV2PokemongameindexAggregateModelSelector) => PokemonV2PokemongameindexAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemongameindex_aggregate`, PokemonV2PokemongameindexAggregateModelSelector, builder) }
  pokemon_v2_pokemongameindex_by_pk(builder?: string | PokemonV2PokemongameindexModelSelector | ((selector: PokemonV2PokemongameindexModelSelector) => PokemonV2PokemongameindexModelSelector)) { return this.__child(`pokemon_v2_pokemongameindex_by_pk`, PokemonV2PokemongameindexModelSelector, builder) }
  pokemon_v2_pokemonhabitat(builder?: string | PokemonV2PokemonhabitatModelSelector | ((selector: PokemonV2PokemonhabitatModelSelector) => PokemonV2PokemonhabitatModelSelector)) { return this.__child(`pokemon_v2_pokemonhabitat`, PokemonV2PokemonhabitatModelSelector, builder) }
  pokemon_v2_pokemonhabitat_aggregate(builder?: string | PokemonV2PokemonhabitatAggregateModelSelector | ((selector: PokemonV2PokemonhabitatAggregateModelSelector) => PokemonV2PokemonhabitatAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonhabitat_aggregate`, PokemonV2PokemonhabitatAggregateModelSelector, builder) }
  pokemon_v2_pokemonhabitat_by_pk(builder?: string | PokemonV2PokemonhabitatModelSelector | ((selector: PokemonV2PokemonhabitatModelSelector) => PokemonV2PokemonhabitatModelSelector)) { return this.__child(`pokemon_v2_pokemonhabitat_by_pk`, PokemonV2PokemonhabitatModelSelector, builder) }
  pokemon_v2_pokemonhabitatname(builder?: string | PokemonV2PokemonhabitatnameModelSelector | ((selector: PokemonV2PokemonhabitatnameModelSelector) => PokemonV2PokemonhabitatnameModelSelector)) { return this.__child(`pokemon_v2_pokemonhabitatname`, PokemonV2PokemonhabitatnameModelSelector, builder) }
  pokemon_v2_pokemonhabitatname_aggregate(builder?: string | PokemonV2PokemonhabitatnameAggregateModelSelector | ((selector: PokemonV2PokemonhabitatnameAggregateModelSelector) => PokemonV2PokemonhabitatnameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonhabitatname_aggregate`, PokemonV2PokemonhabitatnameAggregateModelSelector, builder) }
  pokemon_v2_pokemonhabitatname_by_pk(builder?: string | PokemonV2PokemonhabitatnameModelSelector | ((selector: PokemonV2PokemonhabitatnameModelSelector) => PokemonV2PokemonhabitatnameModelSelector)) { return this.__child(`pokemon_v2_pokemonhabitatname_by_pk`, PokemonV2PokemonhabitatnameModelSelector, builder) }
  pokemon_v2_pokemonitem(builder?: string | PokemonV2PokemonitemModelSelector | ((selector: PokemonV2PokemonitemModelSelector) => PokemonV2PokemonitemModelSelector)) { return this.__child(`pokemon_v2_pokemonitem`, PokemonV2PokemonitemModelSelector, builder) }
  pokemon_v2_pokemonitem_aggregate(builder?: string | PokemonV2PokemonitemAggregateModelSelector | ((selector: PokemonV2PokemonitemAggregateModelSelector) => PokemonV2PokemonitemAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonitem_aggregate`, PokemonV2PokemonitemAggregateModelSelector, builder) }
  pokemon_v2_pokemonitem_by_pk(builder?: string | PokemonV2PokemonitemModelSelector | ((selector: PokemonV2PokemonitemModelSelector) => PokemonV2PokemonitemModelSelector)) { return this.__child(`pokemon_v2_pokemonitem_by_pk`, PokemonV2PokemonitemModelSelector, builder) }
  pokemon_v2_pokemonmove(builder?: string | PokemonV2PokemonmoveModelSelector | ((selector: PokemonV2PokemonmoveModelSelector) => PokemonV2PokemonmoveModelSelector)) { return this.__child(`pokemon_v2_pokemonmove`, PokemonV2PokemonmoveModelSelector, builder) }
  pokemon_v2_pokemonmove_aggregate(builder?: string | PokemonV2PokemonmoveAggregateModelSelector | ((selector: PokemonV2PokemonmoveAggregateModelSelector) => PokemonV2PokemonmoveAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonmove_aggregate`, PokemonV2PokemonmoveAggregateModelSelector, builder) }
  pokemon_v2_pokemonmove_by_pk(builder?: string | PokemonV2PokemonmoveModelSelector | ((selector: PokemonV2PokemonmoveModelSelector) => PokemonV2PokemonmoveModelSelector)) { return this.__child(`pokemon_v2_pokemonmove_by_pk`, PokemonV2PokemonmoveModelSelector, builder) }
  pokemon_v2_pokemonshape(builder?: string | PokemonV2PokemonshapeModelSelector | ((selector: PokemonV2PokemonshapeModelSelector) => PokemonV2PokemonshapeModelSelector)) { return this.__child(`pokemon_v2_pokemonshape`, PokemonV2PokemonshapeModelSelector, builder) }
  pokemon_v2_pokemonshape_aggregate(builder?: string | PokemonV2PokemonshapeAggregateModelSelector | ((selector: PokemonV2PokemonshapeAggregateModelSelector) => PokemonV2PokemonshapeAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonshape_aggregate`, PokemonV2PokemonshapeAggregateModelSelector, builder) }
  pokemon_v2_pokemonshape_by_pk(builder?: string | PokemonV2PokemonshapeModelSelector | ((selector: PokemonV2PokemonshapeModelSelector) => PokemonV2PokemonshapeModelSelector)) { return this.__child(`pokemon_v2_pokemonshape_by_pk`, PokemonV2PokemonshapeModelSelector, builder) }
  pokemon_v2_pokemonshapename(builder?: string | PokemonV2PokemonshapenameModelSelector | ((selector: PokemonV2PokemonshapenameModelSelector) => PokemonV2PokemonshapenameModelSelector)) { return this.__child(`pokemon_v2_pokemonshapename`, PokemonV2PokemonshapenameModelSelector, builder) }
  pokemon_v2_pokemonshapename_aggregate(builder?: string | PokemonV2PokemonshapenameAggregateModelSelector | ((selector: PokemonV2PokemonshapenameAggregateModelSelector) => PokemonV2PokemonshapenameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonshapename_aggregate`, PokemonV2PokemonshapenameAggregateModelSelector, builder) }
  pokemon_v2_pokemonshapename_by_pk(builder?: string | PokemonV2PokemonshapenameModelSelector | ((selector: PokemonV2PokemonshapenameModelSelector) => PokemonV2PokemonshapenameModelSelector)) { return this.__child(`pokemon_v2_pokemonshapename_by_pk`, PokemonV2PokemonshapenameModelSelector, builder) }
  pokemon_v2_pokemonspecies(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies`, PokemonV2PokemonspeciesModelSelector, builder) }
  pokemon_v2_pokemonspecies_aggregate(builder?: string | PokemonV2PokemonspeciesAggregateModelSelector | ((selector: PokemonV2PokemonspeciesAggregateModelSelector) => PokemonV2PokemonspeciesAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies_aggregate`, PokemonV2PokemonspeciesAggregateModelSelector, builder) }
  pokemon_v2_pokemonspecies_by_pk(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies_by_pk`, PokemonV2PokemonspeciesModelSelector, builder) }
  pokemon_v2_pokemonspeciesdescription(builder?: string | PokemonV2PokemonspeciesdescriptionModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionModelSelector) => PokemonV2PokemonspeciesdescriptionModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesdescription`, PokemonV2PokemonspeciesdescriptionModelSelector, builder) }
  pokemon_v2_pokemonspeciesdescription_aggregate(builder?: string | PokemonV2PokemonspeciesdescriptionAggregateModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionAggregateModelSelector) => PokemonV2PokemonspeciesdescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesdescription_aggregate`, PokemonV2PokemonspeciesdescriptionAggregateModelSelector, builder) }
  pokemon_v2_pokemonspeciesdescription_by_pk(builder?: string | PokemonV2PokemonspeciesdescriptionModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionModelSelector) => PokemonV2PokemonspeciesdescriptionModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesdescription_by_pk`, PokemonV2PokemonspeciesdescriptionModelSelector, builder) }
  pokemon_v2_pokemonspeciesflavortext(builder?: string | PokemonV2PokemonspeciesflavortextModelSelector | ((selector: PokemonV2PokemonspeciesflavortextModelSelector) => PokemonV2PokemonspeciesflavortextModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesflavortext`, PokemonV2PokemonspeciesflavortextModelSelector, builder) }
  pokemon_v2_pokemonspeciesflavortext_aggregate(builder?: string | PokemonV2PokemonspeciesflavortextAggregateModelSelector | ((selector: PokemonV2PokemonspeciesflavortextAggregateModelSelector) => PokemonV2PokemonspeciesflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesflavortext_aggregate`, PokemonV2PokemonspeciesflavortextAggregateModelSelector, builder) }
  pokemon_v2_pokemonspeciesflavortext_by_pk(builder?: string | PokemonV2PokemonspeciesflavortextModelSelector | ((selector: PokemonV2PokemonspeciesflavortextModelSelector) => PokemonV2PokemonspeciesflavortextModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesflavortext_by_pk`, PokemonV2PokemonspeciesflavortextModelSelector, builder) }
  pokemon_v2_pokemonspeciesname(builder?: string | PokemonV2PokemonspeciesnameModelSelector | ((selector: PokemonV2PokemonspeciesnameModelSelector) => PokemonV2PokemonspeciesnameModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesname`, PokemonV2PokemonspeciesnameModelSelector, builder) }
  pokemon_v2_pokemonspeciesname_aggregate(builder?: string | PokemonV2PokemonspeciesnameAggregateModelSelector | ((selector: PokemonV2PokemonspeciesnameAggregateModelSelector) => PokemonV2PokemonspeciesnameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesname_aggregate`, PokemonV2PokemonspeciesnameAggregateModelSelector, builder) }
  pokemon_v2_pokemonspeciesname_by_pk(builder?: string | PokemonV2PokemonspeciesnameModelSelector | ((selector: PokemonV2PokemonspeciesnameModelSelector) => PokemonV2PokemonspeciesnameModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesname_by_pk`, PokemonV2PokemonspeciesnameModelSelector, builder) }
  pokemon_v2_pokemonsprites(builder?: string | PokemonV2PokemonspritesModelSelector | ((selector: PokemonV2PokemonspritesModelSelector) => PokemonV2PokemonspritesModelSelector)) { return this.__child(`pokemon_v2_pokemonsprites`, PokemonV2PokemonspritesModelSelector, builder) }
  pokemon_v2_pokemonsprites_aggregate(builder?: string | PokemonV2PokemonspritesAggregateModelSelector | ((selector: PokemonV2PokemonspritesAggregateModelSelector) => PokemonV2PokemonspritesAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonsprites_aggregate`, PokemonV2PokemonspritesAggregateModelSelector, builder) }
  pokemon_v2_pokemonsprites_by_pk(builder?: string | PokemonV2PokemonspritesModelSelector | ((selector: PokemonV2PokemonspritesModelSelector) => PokemonV2PokemonspritesModelSelector)) { return this.__child(`pokemon_v2_pokemonsprites_by_pk`, PokemonV2PokemonspritesModelSelector, builder) }
  pokemon_v2_pokemonstat(builder?: string | PokemonV2PokemonstatModelSelector | ((selector: PokemonV2PokemonstatModelSelector) => PokemonV2PokemonstatModelSelector)) { return this.__child(`pokemon_v2_pokemonstat`, PokemonV2PokemonstatModelSelector, builder) }
  pokemon_v2_pokemonstat_aggregate(builder?: string | PokemonV2PokemonstatAggregateModelSelector | ((selector: PokemonV2PokemonstatAggregateModelSelector) => PokemonV2PokemonstatAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonstat_aggregate`, PokemonV2PokemonstatAggregateModelSelector, builder) }
  pokemon_v2_pokemonstat_by_pk(builder?: string | PokemonV2PokemonstatModelSelector | ((selector: PokemonV2PokemonstatModelSelector) => PokemonV2PokemonstatModelSelector)) { return this.__child(`pokemon_v2_pokemonstat_by_pk`, PokemonV2PokemonstatModelSelector, builder) }
  pokemon_v2_pokemontype(builder?: string | PokemonV2PokemontypeModelSelector | ((selector: PokemonV2PokemontypeModelSelector) => PokemonV2PokemontypeModelSelector)) { return this.__child(`pokemon_v2_pokemontype`, PokemonV2PokemontypeModelSelector, builder) }
  pokemon_v2_pokemontype_aggregate(builder?: string | PokemonV2PokemontypeAggregateModelSelector | ((selector: PokemonV2PokemontypeAggregateModelSelector) => PokemonV2PokemontypeAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemontype_aggregate`, PokemonV2PokemontypeAggregateModelSelector, builder) }
  pokemon_v2_pokemontype_by_pk(builder?: string | PokemonV2PokemontypeModelSelector | ((selector: PokemonV2PokemontypeModelSelector) => PokemonV2PokemontypeModelSelector)) { return this.__child(`pokemon_v2_pokemontype_by_pk`, PokemonV2PokemontypeModelSelector, builder) }
  pokemon_v2_pokemontypepast(builder?: string | PokemonV2PokemontypepastModelSelector | ((selector: PokemonV2PokemontypepastModelSelector) => PokemonV2PokemontypepastModelSelector)) { return this.__child(`pokemon_v2_pokemontypepast`, PokemonV2PokemontypepastModelSelector, builder) }
  pokemon_v2_pokemontypepast_aggregate(builder?: string | PokemonV2PokemontypepastAggregateModelSelector | ((selector: PokemonV2PokemontypepastAggregateModelSelector) => PokemonV2PokemontypepastAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemontypepast_aggregate`, PokemonV2PokemontypepastAggregateModelSelector, builder) }
  pokemon_v2_pokemontypepast_by_pk(builder?: string | PokemonV2PokemontypepastModelSelector | ((selector: PokemonV2PokemontypepastModelSelector) => PokemonV2PokemontypepastModelSelector)) { return this.__child(`pokemon_v2_pokemontypepast_by_pk`, PokemonV2PokemontypepastModelSelector, builder) }
  pokemon_v2_region(builder?: string | PokemonV2RegionModelSelector | ((selector: PokemonV2RegionModelSelector) => PokemonV2RegionModelSelector)) { return this.__child(`pokemon_v2_region`, PokemonV2RegionModelSelector, builder) }
  pokemon_v2_region_aggregate(builder?: string | PokemonV2RegionAggregateModelSelector | ((selector: PokemonV2RegionAggregateModelSelector) => PokemonV2RegionAggregateModelSelector)) { return this.__child(`pokemon_v2_region_aggregate`, PokemonV2RegionAggregateModelSelector, builder) }
  pokemon_v2_region_by_pk(builder?: string | PokemonV2RegionModelSelector | ((selector: PokemonV2RegionModelSelector) => PokemonV2RegionModelSelector)) { return this.__child(`pokemon_v2_region_by_pk`, PokemonV2RegionModelSelector, builder) }
  pokemon_v2_regionname(builder?: string | PokemonV2RegionnameModelSelector | ((selector: PokemonV2RegionnameModelSelector) => PokemonV2RegionnameModelSelector)) { return this.__child(`pokemon_v2_regionname`, PokemonV2RegionnameModelSelector, builder) }
  pokemon_v2_regionname_aggregate(builder?: string | PokemonV2RegionnameAggregateModelSelector | ((selector: PokemonV2RegionnameAggregateModelSelector) => PokemonV2RegionnameAggregateModelSelector)) { return this.__child(`pokemon_v2_regionname_aggregate`, PokemonV2RegionnameAggregateModelSelector, builder) }
  pokemon_v2_regionname_by_pk(builder?: string | PokemonV2RegionnameModelSelector | ((selector: PokemonV2RegionnameModelSelector) => PokemonV2RegionnameModelSelector)) { return this.__child(`pokemon_v2_regionname_by_pk`, PokemonV2RegionnameModelSelector, builder) }
  pokemon_v2_stat(builder?: string | PokemonV2StatModelSelector | ((selector: PokemonV2StatModelSelector) => PokemonV2StatModelSelector)) { return this.__child(`pokemon_v2_stat`, PokemonV2StatModelSelector, builder) }
  pokemon_v2_stat_aggregate(builder?: string | PokemonV2StatAggregateModelSelector | ((selector: PokemonV2StatAggregateModelSelector) => PokemonV2StatAggregateModelSelector)) { return this.__child(`pokemon_v2_stat_aggregate`, PokemonV2StatAggregateModelSelector, builder) }
  pokemon_v2_stat_by_pk(builder?: string | PokemonV2StatModelSelector | ((selector: PokemonV2StatModelSelector) => PokemonV2StatModelSelector)) { return this.__child(`pokemon_v2_stat_by_pk`, PokemonV2StatModelSelector, builder) }
  pokemon_v2_statname(builder?: string | PokemonV2StatnameModelSelector | ((selector: PokemonV2StatnameModelSelector) => PokemonV2StatnameModelSelector)) { return this.__child(`pokemon_v2_statname`, PokemonV2StatnameModelSelector, builder) }
  pokemon_v2_statname_aggregate(builder?: string | PokemonV2StatnameAggregateModelSelector | ((selector: PokemonV2StatnameAggregateModelSelector) => PokemonV2StatnameAggregateModelSelector)) { return this.__child(`pokemon_v2_statname_aggregate`, PokemonV2StatnameAggregateModelSelector, builder) }
  pokemon_v2_statname_by_pk(builder?: string | PokemonV2StatnameModelSelector | ((selector: PokemonV2StatnameModelSelector) => PokemonV2StatnameModelSelector)) { return this.__child(`pokemon_v2_statname_by_pk`, PokemonV2StatnameModelSelector, builder) }
  pokemon_v2_supercontestcombo(builder?: string | PokemonV2SupercontestcomboModelSelector | ((selector: PokemonV2SupercontestcomboModelSelector) => PokemonV2SupercontestcomboModelSelector)) { return this.__child(`pokemon_v2_supercontestcombo`, PokemonV2SupercontestcomboModelSelector, builder) }
  pokemon_v2_supercontestcombo_aggregate(builder?: string | PokemonV2SupercontestcomboAggregateModelSelector | ((selector: PokemonV2SupercontestcomboAggregateModelSelector) => PokemonV2SupercontestcomboAggregateModelSelector)) { return this.__child(`pokemon_v2_supercontestcombo_aggregate`, PokemonV2SupercontestcomboAggregateModelSelector, builder) }
  pokemon_v2_supercontestcombo_by_pk(builder?: string | PokemonV2SupercontestcomboModelSelector | ((selector: PokemonV2SupercontestcomboModelSelector) => PokemonV2SupercontestcomboModelSelector)) { return this.__child(`pokemon_v2_supercontestcombo_by_pk`, PokemonV2SupercontestcomboModelSelector, builder) }
  pokemon_v2_supercontesteffect(builder?: string | PokemonV2SupercontesteffectModelSelector | ((selector: PokemonV2SupercontesteffectModelSelector) => PokemonV2SupercontesteffectModelSelector)) { return this.__child(`pokemon_v2_supercontesteffect`, PokemonV2SupercontesteffectModelSelector, builder) }
  pokemon_v2_supercontesteffect_aggregate(builder?: string | PokemonV2SupercontesteffectAggregateModelSelector | ((selector: PokemonV2SupercontesteffectAggregateModelSelector) => PokemonV2SupercontesteffectAggregateModelSelector)) { return this.__child(`pokemon_v2_supercontesteffect_aggregate`, PokemonV2SupercontesteffectAggregateModelSelector, builder) }
  pokemon_v2_supercontesteffect_by_pk(builder?: string | PokemonV2SupercontesteffectModelSelector | ((selector: PokemonV2SupercontesteffectModelSelector) => PokemonV2SupercontesteffectModelSelector)) { return this.__child(`pokemon_v2_supercontesteffect_by_pk`, PokemonV2SupercontesteffectModelSelector, builder) }
  pokemon_v2_supercontesteffectflavortext(builder?: string | PokemonV2SupercontesteffectflavortextModelSelector | ((selector: PokemonV2SupercontesteffectflavortextModelSelector) => PokemonV2SupercontesteffectflavortextModelSelector)) { return this.__child(`pokemon_v2_supercontesteffectflavortext`, PokemonV2SupercontesteffectflavortextModelSelector, builder) }
  pokemon_v2_supercontesteffectflavortext_aggregate(builder?: string | PokemonV2SupercontesteffectflavortextAggregateModelSelector | ((selector: PokemonV2SupercontesteffectflavortextAggregateModelSelector) => PokemonV2SupercontesteffectflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_supercontesteffectflavortext_aggregate`, PokemonV2SupercontesteffectflavortextAggregateModelSelector, builder) }
  pokemon_v2_supercontesteffectflavortext_by_pk(builder?: string | PokemonV2SupercontesteffectflavortextModelSelector | ((selector: PokemonV2SupercontesteffectflavortextModelSelector) => PokemonV2SupercontesteffectflavortextModelSelector)) { return this.__child(`pokemon_v2_supercontesteffectflavortext_by_pk`, PokemonV2SupercontesteffectflavortextModelSelector, builder) }
  pokemon_v2_type(builder?: string | PokemonV2TypeModelSelector | ((selector: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector)) { return this.__child(`pokemon_v2_type`, PokemonV2TypeModelSelector, builder) }
  pokemon_v2_type_aggregate(builder?: string | PokemonV2TypeAggregateModelSelector | ((selector: PokemonV2TypeAggregateModelSelector) => PokemonV2TypeAggregateModelSelector)) { return this.__child(`pokemon_v2_type_aggregate`, PokemonV2TypeAggregateModelSelector, builder) }
  pokemon_v2_type_by_pk(builder?: string | PokemonV2TypeModelSelector | ((selector: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector)) { return this.__child(`pokemon_v2_type_by_pk`, PokemonV2TypeModelSelector, builder) }
  pokemon_v2_typeefficacy(builder?: string | PokemonV2TypeefficacyModelSelector | ((selector: PokemonV2TypeefficacyModelSelector) => PokemonV2TypeefficacyModelSelector)) { return this.__child(`pokemon_v2_typeefficacy`, PokemonV2TypeefficacyModelSelector, builder) }
  pokemon_v2_typeefficacy_aggregate(builder?: string | PokemonV2TypeefficacyAggregateModelSelector | ((selector: PokemonV2TypeefficacyAggregateModelSelector) => PokemonV2TypeefficacyAggregateModelSelector)) { return this.__child(`pokemon_v2_typeefficacy_aggregate`, PokemonV2TypeefficacyAggregateModelSelector, builder) }
  pokemon_v2_typeefficacy_by_pk(builder?: string | PokemonV2TypeefficacyModelSelector | ((selector: PokemonV2TypeefficacyModelSelector) => PokemonV2TypeefficacyModelSelector)) { return this.__child(`pokemon_v2_typeefficacy_by_pk`, PokemonV2TypeefficacyModelSelector, builder) }
  pokemon_v2_typegameindex(builder?: string | PokemonV2TypegameindexModelSelector | ((selector: PokemonV2TypegameindexModelSelector) => PokemonV2TypegameindexModelSelector)) { return this.__child(`pokemon_v2_typegameindex`, PokemonV2TypegameindexModelSelector, builder) }
  pokemon_v2_typegameindex_aggregate(builder?: string | PokemonV2TypegameindexAggregateModelSelector | ((selector: PokemonV2TypegameindexAggregateModelSelector) => PokemonV2TypegameindexAggregateModelSelector)) { return this.__child(`pokemon_v2_typegameindex_aggregate`, PokemonV2TypegameindexAggregateModelSelector, builder) }
  pokemon_v2_typegameindex_by_pk(builder?: string | PokemonV2TypegameindexModelSelector | ((selector: PokemonV2TypegameindexModelSelector) => PokemonV2TypegameindexModelSelector)) { return this.__child(`pokemon_v2_typegameindex_by_pk`, PokemonV2TypegameindexModelSelector, builder) }
  pokemon_v2_typename(builder?: string | PokemonV2TypenameModelSelector | ((selector: PokemonV2TypenameModelSelector) => PokemonV2TypenameModelSelector)) { return this.__child(`pokemon_v2_typename`, PokemonV2TypenameModelSelector, builder) }
  pokemon_v2_typename_aggregate(builder?: string | PokemonV2TypenameAggregateModelSelector | ((selector: PokemonV2TypenameAggregateModelSelector) => PokemonV2TypenameAggregateModelSelector)) { return this.__child(`pokemon_v2_typename_aggregate`, PokemonV2TypenameAggregateModelSelector, builder) }
  pokemon_v2_typename_by_pk(builder?: string | PokemonV2TypenameModelSelector | ((selector: PokemonV2TypenameModelSelector) => PokemonV2TypenameModelSelector)) { return this.__child(`pokemon_v2_typename_by_pk`, PokemonV2TypenameModelSelector, builder) }
  pokemon_v2_version(builder?: string | PokemonV2VersionModelSelector | ((selector: PokemonV2VersionModelSelector) => PokemonV2VersionModelSelector)) { return this.__child(`pokemon_v2_version`, PokemonV2VersionModelSelector, builder) }
  pokemon_v2_version_aggregate(builder?: string | PokemonV2VersionAggregateModelSelector | ((selector: PokemonV2VersionAggregateModelSelector) => PokemonV2VersionAggregateModelSelector)) { return this.__child(`pokemon_v2_version_aggregate`, PokemonV2VersionAggregateModelSelector, builder) }
  pokemon_v2_version_by_pk(builder?: string | PokemonV2VersionModelSelector | ((selector: PokemonV2VersionModelSelector) => PokemonV2VersionModelSelector)) { return this.__child(`pokemon_v2_version_by_pk`, PokemonV2VersionModelSelector, builder) }
  pokemon_v2_versiongroup(builder?: string | PokemonV2VersiongroupModelSelector | ((selector: PokemonV2VersiongroupModelSelector) => PokemonV2VersiongroupModelSelector)) { return this.__child(`pokemon_v2_versiongroup`, PokemonV2VersiongroupModelSelector, builder) }
  pokemon_v2_versiongroup_aggregate(builder?: string | PokemonV2VersiongroupAggregateModelSelector | ((selector: PokemonV2VersiongroupAggregateModelSelector) => PokemonV2VersiongroupAggregateModelSelector)) { return this.__child(`pokemon_v2_versiongroup_aggregate`, PokemonV2VersiongroupAggregateModelSelector, builder) }
  pokemon_v2_versiongroup_by_pk(builder?: string | PokemonV2VersiongroupModelSelector | ((selector: PokemonV2VersiongroupModelSelector) => PokemonV2VersiongroupModelSelector)) { return this.__child(`pokemon_v2_versiongroup_by_pk`, PokemonV2VersiongroupModelSelector, builder) }
  pokemon_v2_versiongroupmovelearnmethod(builder?: string | PokemonV2VersiongroupmovelearnmethodModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodModelSelector) => PokemonV2VersiongroupmovelearnmethodModelSelector)) { return this.__child(`pokemon_v2_versiongroupmovelearnmethod`, PokemonV2VersiongroupmovelearnmethodModelSelector, builder) }
  pokemon_v2_versiongroupmovelearnmethod_aggregate(builder?: string | PokemonV2VersiongroupmovelearnmethodAggregateModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodAggregateModelSelector) => PokemonV2VersiongroupmovelearnmethodAggregateModelSelector)) { return this.__child(`pokemon_v2_versiongroupmovelearnmethod_aggregate`, PokemonV2VersiongroupmovelearnmethodAggregateModelSelector, builder) }
  pokemon_v2_versiongroupmovelearnmethod_by_pk(builder?: string | PokemonV2VersiongroupmovelearnmethodModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodModelSelector) => PokemonV2VersiongroupmovelearnmethodModelSelector)) { return this.__child(`pokemon_v2_versiongroupmovelearnmethod_by_pk`, PokemonV2VersiongroupmovelearnmethodModelSelector, builder) }
  pokemon_v2_versiongroupregion(builder?: string | PokemonV2VersiongroupregionModelSelector | ((selector: PokemonV2VersiongroupregionModelSelector) => PokemonV2VersiongroupregionModelSelector)) { return this.__child(`pokemon_v2_versiongroupregion`, PokemonV2VersiongroupregionModelSelector, builder) }
  pokemon_v2_versiongroupregion_aggregate(builder?: string | PokemonV2VersiongroupregionAggregateModelSelector | ((selector: PokemonV2VersiongroupregionAggregateModelSelector) => PokemonV2VersiongroupregionAggregateModelSelector)) { return this.__child(`pokemon_v2_versiongroupregion_aggregate`, PokemonV2VersiongroupregionAggregateModelSelector, builder) }
  pokemon_v2_versiongroupregion_by_pk(builder?: string | PokemonV2VersiongroupregionModelSelector | ((selector: PokemonV2VersiongroupregionModelSelector) => PokemonV2VersiongroupregionModelSelector)) { return this.__child(`pokemon_v2_versiongroupregion_by_pk`, PokemonV2VersiongroupregionModelSelector, builder) }
  pokemon_v2_versionname(builder?: string | PokemonV2VersionnameModelSelector | ((selector: PokemonV2VersionnameModelSelector) => PokemonV2VersionnameModelSelector)) { return this.__child(`pokemon_v2_versionname`, PokemonV2VersionnameModelSelector, builder) }
  pokemon_v2_versionname_aggregate(builder?: string | PokemonV2VersionnameAggregateModelSelector | ((selector: PokemonV2VersionnameAggregateModelSelector) => PokemonV2VersionnameAggregateModelSelector)) { return this.__child(`pokemon_v2_versionname_aggregate`, PokemonV2VersionnameAggregateModelSelector, builder) }
  pokemon_v2_versionname_by_pk(builder?: string | PokemonV2VersionnameModelSelector | ((selector: PokemonV2VersionnameModelSelector) => PokemonV2VersionnameModelSelector)) { return this.__child(`pokemon_v2_versionname_by_pk`, PokemonV2VersionnameModelSelector, builder) }
}
export function selectFromQueryRoot() {
  return new QueryRootModelSelector()
}

export const queryRootModelPrimitives = selectFromQueryRoot()
