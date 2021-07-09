/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { QueryRootModel, QueryRootModelType } from "./QueryRootModel"
import { queryRootModelPrimitives, QueryRootModelSelector } from "./QueryRootModel.base"
import { PokemonV2PokemonModel, PokemonV2PokemonModelType } from "./PokemonV2PokemonModel"
import { pokemonV2PokemonModelPrimitives, PokemonV2PokemonModelSelector } from "./PokemonV2PokemonModel.base"
import { PokemonV2PokemonspeciesModel, PokemonV2PokemonspeciesModelType } from "./PokemonV2PokemonspeciesModel"
import { pokemonV2PokemonspeciesModelPrimitives, PokemonV2PokemonspeciesModelSelector } from "./PokemonV2PokemonspeciesModel.base"
import { PokemonV2TypeModel, PokemonV2TypeModelType } from "./PokemonV2TypeModel"
import { pokemonV2TypeModelPrimitives, PokemonV2TypeModelSelector } from "./PokemonV2TypeModel.base"
import { PokemonV2PokemontypeModel, PokemonV2PokemontypeModelType } from "./PokemonV2PokemontypeModel"
import { pokemonV2PokemontypeModelPrimitives, PokemonV2PokemontypeModelSelector } from "./PokemonV2PokemontypeModel.base"
import { PokemonV2PokemoncolorModel, PokemonV2PokemoncolorModelType } from "./PokemonV2PokemoncolorModel"
import { pokemonV2PokemoncolorModelPrimitives, PokemonV2PokemoncolorModelSelector } from "./PokemonV2PokemoncolorModel.base"
import { PokemonV2PokemoncolornameModel, PokemonV2PokemoncolornameModelType } from "./PokemonV2PokemoncolornameModel"
import { pokemonV2PokemoncolornameModelPrimitives, PokemonV2PokemoncolornameModelSelector } from "./PokemonV2PokemoncolornameModel.base"
import { PokemonV2PokemonspeciesflavortextModel, PokemonV2PokemonspeciesflavortextModelType } from "./PokemonV2PokemonspeciesflavortextModel"
import { pokemonV2PokemonspeciesflavortextModelPrimitives, PokemonV2PokemonspeciesflavortextModelSelector } from "./PokemonV2PokemonspeciesflavortextModel.base"
import { PokemonV2PokemonspeciesnameModel, PokemonV2PokemonspeciesnameModelType } from "./PokemonV2PokemonspeciesnameModel"
import { pokemonV2PokemonspeciesnameModelPrimitives, PokemonV2PokemonspeciesnameModelSelector } from "./PokemonV2PokemonspeciesnameModel.base"
import { SubscriptionRootModel, SubscriptionRootModelType } from "./SubscriptionRootModel"
import { subscriptionRootModelPrimitives, SubscriptionRootModelSelector } from "./SubscriptionRootModel.base"


import { OrderBy } from "./OrderByEnum"

export type PokemonV2AbilityOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  is_main_series?: OrderBy
  name?: OrderBy
  pokemon_v2_abilitychanges_aggregate?: PokemonV2AbilitychangeAggregateOrderBy
  pokemon_v2_abilityeffecttexts_aggregate?: PokemonV2AbilityeffecttextAggregateOrderBy
  pokemon_v2_abilityflavortexts_aggregate?: PokemonV2AbilityflavortextAggregateOrderBy
  pokemon_v2_abilitynames_aggregate?: PokemonV2AbilitynameAggregateOrderBy
  pokemon_v2_generation?: PokemonV2GenerationOrderBy
  pokemon_v2_pokemonabilities_aggregate?: PokemonV2PokemonabilityAggregateOrderBy
}
export type PokemonV2AbilitychangeAggregateOrderBy = {
  avg?: PokemonV2AbilitychangeAvgOrderBy
  count?: OrderBy
  max?: PokemonV2AbilitychangeMaxOrderBy
  min?: PokemonV2AbilitychangeMinOrderBy
  stddev?: PokemonV2AbilitychangeStddevOrderBy
  stddev_pop?: PokemonV2AbilitychangeStddevPopOrderBy
  stddev_samp?: PokemonV2AbilitychangeStddevSampOrderBy
  sum?: PokemonV2AbilitychangeSumOrderBy
  var_pop?: PokemonV2AbilitychangeVarPopOrderBy
  var_samp?: PokemonV2AbilitychangeVarSampOrderBy
  variance?: PokemonV2AbilitychangeVarianceOrderBy
}
export type PokemonV2AbilitychangeAvgOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilitychangeMaxOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilitychangeMinOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilitychangeStddevOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilitychangeStddevPopOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilitychangeStddevSampOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilitychangeSumOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilitychangeVarPopOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilitychangeVarSampOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilitychangeVarianceOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilityeffecttextAggregateOrderBy = {
  avg?: PokemonV2AbilityeffecttextAvgOrderBy
  count?: OrderBy
  max?: PokemonV2AbilityeffecttextMaxOrderBy
  min?: PokemonV2AbilityeffecttextMinOrderBy
  stddev?: PokemonV2AbilityeffecttextStddevOrderBy
  stddev_pop?: PokemonV2AbilityeffecttextStddevPopOrderBy
  stddev_samp?: PokemonV2AbilityeffecttextStddevSampOrderBy
  sum?: PokemonV2AbilityeffecttextSumOrderBy
  var_pop?: PokemonV2AbilityeffecttextVarPopOrderBy
  var_samp?: PokemonV2AbilityeffecttextVarSampOrderBy
  variance?: PokemonV2AbilityeffecttextVarianceOrderBy
}
export type PokemonV2AbilityeffecttextAvgOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilityeffecttextMaxOrderBy = {
  ability_id?: OrderBy
  effect?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  short_effect?: OrderBy
}
export type PokemonV2AbilityeffecttextMinOrderBy = {
  ability_id?: OrderBy
  effect?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  short_effect?: OrderBy
}
export type PokemonV2AbilityeffecttextStddevOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilityeffecttextStddevPopOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilityeffecttextStddevSampOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilityeffecttextSumOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilityeffecttextVarPopOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilityeffecttextVarSampOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilityeffecttextVarianceOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilityflavortextAggregateOrderBy = {
  avg?: PokemonV2AbilityflavortextAvgOrderBy
  count?: OrderBy
  max?: PokemonV2AbilityflavortextMaxOrderBy
  min?: PokemonV2AbilityflavortextMinOrderBy
  stddev?: PokemonV2AbilityflavortextStddevOrderBy
  stddev_pop?: PokemonV2AbilityflavortextStddevPopOrderBy
  stddev_samp?: PokemonV2AbilityflavortextStddevSampOrderBy
  sum?: PokemonV2AbilityflavortextSumOrderBy
  var_pop?: PokemonV2AbilityflavortextVarPopOrderBy
  var_samp?: PokemonV2AbilityflavortextVarSampOrderBy
  variance?: PokemonV2AbilityflavortextVarianceOrderBy
}
export type PokemonV2AbilityflavortextAvgOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilityflavortextMaxOrderBy = {
  ability_id?: OrderBy
  flavor_text?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilityflavortextMinOrderBy = {
  ability_id?: OrderBy
  flavor_text?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilityflavortextStddevOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilityflavortextStddevPopOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilityflavortextStddevSampOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilityflavortextSumOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilityflavortextVarPopOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilityflavortextVarSampOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilityflavortextVarianceOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilitynameAggregateOrderBy = {
  avg?: PokemonV2AbilitynameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2AbilitynameMaxOrderBy
  min?: PokemonV2AbilitynameMinOrderBy
  stddev?: PokemonV2AbilitynameStddevOrderBy
  stddev_pop?: PokemonV2AbilitynameStddevPopOrderBy
  stddev_samp?: PokemonV2AbilitynameStddevSampOrderBy
  sum?: PokemonV2AbilitynameSumOrderBy
  var_pop?: PokemonV2AbilitynameVarPopOrderBy
  var_samp?: PokemonV2AbilitynameVarSampOrderBy
  variance?: PokemonV2AbilitynameVarianceOrderBy
}
export type PokemonV2AbilitynameAvgOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilitynameMaxOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2AbilitynameMinOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2AbilitynameStddevOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilitynameStddevPopOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilitynameStddevSampOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilitynameSumOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilitynameVarPopOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilitynameVarSampOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilitynameVarianceOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2GenerationOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_abilities_aggregate?: PokemonV2AbilityAggregateOrderBy
  pokemon_v2_generationnames_aggregate?: PokemonV2GenerationnameAggregateOrderBy
  pokemon_v2_itemgameindices_aggregate?: PokemonV2ItemgameindexAggregateOrderBy
  pokemon_v2_locationgameindices_aggregate?: PokemonV2LocationgameindexAggregateOrderBy
  pokemon_v2_moves_aggregate?: PokemonV2MoveAggregateOrderBy
  pokemon_v2_pokemonformgenerations_aggregate?: PokemonV2PokemonformgenerationAggregateOrderBy
  pokemon_v2_pokemonspecies_aggregate?: PokemonV2PokemonspeciesAggregateOrderBy
  pokemon_v2_pokemontypepasts_aggregate?: PokemonV2PokemontypepastAggregateOrderBy
  pokemon_v2_region?: PokemonV2RegionOrderBy
  pokemon_v2_typegameindices_aggregate?: PokemonV2TypegameindexAggregateOrderBy
  pokemon_v2_types_aggregate?: PokemonV2TypeAggregateOrderBy
  pokemon_v2_versiongroups_aggregate?: PokemonV2VersiongroupAggregateOrderBy
  region_id?: OrderBy
}
export type PokemonV2AbilityAggregateOrderBy = {
  avg?: PokemonV2AbilityAvgOrderBy
  count?: OrderBy
  max?: PokemonV2AbilityMaxOrderBy
  min?: PokemonV2AbilityMinOrderBy
  stddev?: PokemonV2AbilityStddevOrderBy
  stddev_pop?: PokemonV2AbilityStddevPopOrderBy
  stddev_samp?: PokemonV2AbilityStddevSampOrderBy
  sum?: PokemonV2AbilitySumOrderBy
  var_pop?: PokemonV2AbilityVarPopOrderBy
  var_samp?: PokemonV2AbilityVarSampOrderBy
  variance?: PokemonV2AbilityVarianceOrderBy
}
export type PokemonV2AbilityAvgOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2AbilityMaxOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  name?: OrderBy
}
export type PokemonV2AbilityMinOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  name?: OrderBy
}
export type PokemonV2AbilityStddevOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2AbilityStddevPopOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2AbilityStddevSampOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2AbilitySumOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2AbilityVarPopOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2AbilityVarSampOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2AbilityVarianceOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2GenerationnameAggregateOrderBy = {
  avg?: PokemonV2GenerationnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2GenerationnameMaxOrderBy
  min?: PokemonV2GenerationnameMinOrderBy
  stddev?: PokemonV2GenerationnameStddevOrderBy
  stddev_pop?: PokemonV2GenerationnameStddevPopOrderBy
  stddev_samp?: PokemonV2GenerationnameStddevSampOrderBy
  sum?: PokemonV2GenerationnameSumOrderBy
  var_pop?: PokemonV2GenerationnameVarPopOrderBy
  var_samp?: PokemonV2GenerationnameVarSampOrderBy
  variance?: PokemonV2GenerationnameVarianceOrderBy
}
export type PokemonV2GenerationnameAvgOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2GenerationnameMaxOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2GenerationnameMinOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2GenerationnameStddevOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2GenerationnameStddevPopOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2GenerationnameStddevSampOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2GenerationnameSumOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2GenerationnameVarPopOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2GenerationnameVarSampOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2GenerationnameVarianceOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemgameindexAggregateOrderBy = {
  avg?: PokemonV2ItemgameindexAvgOrderBy
  count?: OrderBy
  max?: PokemonV2ItemgameindexMaxOrderBy
  min?: PokemonV2ItemgameindexMinOrderBy
  stddev?: PokemonV2ItemgameindexStddevOrderBy
  stddev_pop?: PokemonV2ItemgameindexStddevPopOrderBy
  stddev_samp?: PokemonV2ItemgameindexStddevSampOrderBy
  sum?: PokemonV2ItemgameindexSumOrderBy
  var_pop?: PokemonV2ItemgameindexVarPopOrderBy
  var_samp?: PokemonV2ItemgameindexVarSampOrderBy
  variance?: PokemonV2ItemgameindexVarianceOrderBy
}
export type PokemonV2ItemgameindexAvgOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemgameindexMaxOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemgameindexMinOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemgameindexStddevOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemgameindexStddevPopOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemgameindexStddevSampOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemgameindexSumOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemgameindexVarPopOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemgameindexVarSampOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemgameindexVarianceOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2LocationgameindexAggregateOrderBy = {
  avg?: PokemonV2LocationgameindexAvgOrderBy
  count?: OrderBy
  max?: PokemonV2LocationgameindexMaxOrderBy
  min?: PokemonV2LocationgameindexMinOrderBy
  stddev?: PokemonV2LocationgameindexStddevOrderBy
  stddev_pop?: PokemonV2LocationgameindexStddevPopOrderBy
  stddev_samp?: PokemonV2LocationgameindexStddevSampOrderBy
  sum?: PokemonV2LocationgameindexSumOrderBy
  var_pop?: PokemonV2LocationgameindexVarPopOrderBy
  var_samp?: PokemonV2LocationgameindexVarSampOrderBy
  variance?: PokemonV2LocationgameindexVarianceOrderBy
}
export type PokemonV2LocationgameindexAvgOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationgameindexMaxOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationgameindexMinOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationgameindexStddevOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationgameindexStddevPopOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationgameindexStddevSampOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationgameindexSumOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationgameindexVarPopOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationgameindexVarSampOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationgameindexVarianceOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2MoveAggregateOrderBy = {
  avg?: PokemonV2MoveAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MoveMaxOrderBy
  min?: PokemonV2MoveMinOrderBy
  stddev?: PokemonV2MoveStddevOrderBy
  stddev_pop?: PokemonV2MoveStddevPopOrderBy
  stddev_samp?: PokemonV2MoveStddevSampOrderBy
  sum?: PokemonV2MoveSumOrderBy
  var_pop?: PokemonV2MoveVarPopOrderBy
  var_samp?: PokemonV2MoveVarSampOrderBy
  variance?: PokemonV2MoveVarianceOrderBy
}
export type PokemonV2MoveAvgOrderBy = {
  accuracy?: OrderBy
  contest_effect_id?: OrderBy
  contest_type_id?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_target_id?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  priority?: OrderBy
  super_contest_effect_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2MoveMaxOrderBy = {
  accuracy?: OrderBy
  contest_effect_id?: OrderBy
  contest_type_id?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_target_id?: OrderBy
  name?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  priority?: OrderBy
  super_contest_effect_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2MoveMinOrderBy = {
  accuracy?: OrderBy
  contest_effect_id?: OrderBy
  contest_type_id?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_target_id?: OrderBy
  name?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  priority?: OrderBy
  super_contest_effect_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2MoveStddevOrderBy = {
  accuracy?: OrderBy
  contest_effect_id?: OrderBy
  contest_type_id?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_target_id?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  priority?: OrderBy
  super_contest_effect_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2MoveStddevPopOrderBy = {
  accuracy?: OrderBy
  contest_effect_id?: OrderBy
  contest_type_id?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_target_id?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  priority?: OrderBy
  super_contest_effect_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2MoveStddevSampOrderBy = {
  accuracy?: OrderBy
  contest_effect_id?: OrderBy
  contest_type_id?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_target_id?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  priority?: OrderBy
  super_contest_effect_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2MoveSumOrderBy = {
  accuracy?: OrderBy
  contest_effect_id?: OrderBy
  contest_type_id?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_target_id?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  priority?: OrderBy
  super_contest_effect_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2MoveVarPopOrderBy = {
  accuracy?: OrderBy
  contest_effect_id?: OrderBy
  contest_type_id?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_target_id?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  priority?: OrderBy
  super_contest_effect_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2MoveVarSampOrderBy = {
  accuracy?: OrderBy
  contest_effect_id?: OrderBy
  contest_type_id?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_target_id?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  priority?: OrderBy
  super_contest_effect_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2MoveVarianceOrderBy = {
  accuracy?: OrderBy
  contest_effect_id?: OrderBy
  contest_type_id?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_target_id?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  priority?: OrderBy
  super_contest_effect_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemonformgenerationAggregateOrderBy = {
  avg?: PokemonV2PokemonformgenerationAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonformgenerationMaxOrderBy
  min?: PokemonV2PokemonformgenerationMinOrderBy
  stddev?: PokemonV2PokemonformgenerationStddevOrderBy
  stddev_pop?: PokemonV2PokemonformgenerationStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonformgenerationStddevSampOrderBy
  sum?: PokemonV2PokemonformgenerationSumOrderBy
  var_pop?: PokemonV2PokemonformgenerationVarPopOrderBy
  var_samp?: PokemonV2PokemonformgenerationVarSampOrderBy
  variance?: PokemonV2PokemonformgenerationVarianceOrderBy
}
export type PokemonV2PokemonformgenerationAvgOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformgenerationMaxOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformgenerationMinOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformgenerationStddevOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformgenerationStddevPopOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformgenerationStddevSampOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformgenerationSumOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformgenerationVarPopOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformgenerationVarSampOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformgenerationVarianceOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonspeciesAggregateOrderBy = {
  avg?: PokemonV2PokemonspeciesAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonspeciesMaxOrderBy
  min?: PokemonV2PokemonspeciesMinOrderBy
  stddev?: PokemonV2PokemonspeciesStddevOrderBy
  stddev_pop?: PokemonV2PokemonspeciesStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonspeciesStddevSampOrderBy
  sum?: PokemonV2PokemonspeciesSumOrderBy
  var_pop?: PokemonV2PokemonspeciesVarPopOrderBy
  var_samp?: PokemonV2PokemonspeciesVarSampOrderBy
  variance?: PokemonV2PokemonspeciesVarianceOrderBy
}
export type PokemonV2PokemonspeciesAvgOrderBy = {
  base_happiness?: OrderBy
  capture_rate?: OrderBy
  evolution_chain_id?: OrderBy
  evolves_from_species_id?: OrderBy
  gender_rate?: OrderBy
  generation_id?: OrderBy
  growth_rate_id?: OrderBy
  hatch_counter?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_color_id?: OrderBy
  pokemon_habitat_id?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonspeciesMaxOrderBy = {
  base_happiness?: OrderBy
  capture_rate?: OrderBy
  evolution_chain_id?: OrderBy
  evolves_from_species_id?: OrderBy
  gender_rate?: OrderBy
  generation_id?: OrderBy
  growth_rate_id?: OrderBy
  hatch_counter?: OrderBy
  id?: OrderBy
  name?: OrderBy
  order?: OrderBy
  pokemon_color_id?: OrderBy
  pokemon_habitat_id?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonspeciesMinOrderBy = {
  base_happiness?: OrderBy
  capture_rate?: OrderBy
  evolution_chain_id?: OrderBy
  evolves_from_species_id?: OrderBy
  gender_rate?: OrderBy
  generation_id?: OrderBy
  growth_rate_id?: OrderBy
  hatch_counter?: OrderBy
  id?: OrderBy
  name?: OrderBy
  order?: OrderBy
  pokemon_color_id?: OrderBy
  pokemon_habitat_id?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonspeciesStddevOrderBy = {
  base_happiness?: OrderBy
  capture_rate?: OrderBy
  evolution_chain_id?: OrderBy
  evolves_from_species_id?: OrderBy
  gender_rate?: OrderBy
  generation_id?: OrderBy
  growth_rate_id?: OrderBy
  hatch_counter?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_color_id?: OrderBy
  pokemon_habitat_id?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonspeciesStddevPopOrderBy = {
  base_happiness?: OrderBy
  capture_rate?: OrderBy
  evolution_chain_id?: OrderBy
  evolves_from_species_id?: OrderBy
  gender_rate?: OrderBy
  generation_id?: OrderBy
  growth_rate_id?: OrderBy
  hatch_counter?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_color_id?: OrderBy
  pokemon_habitat_id?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonspeciesStddevSampOrderBy = {
  base_happiness?: OrderBy
  capture_rate?: OrderBy
  evolution_chain_id?: OrderBy
  evolves_from_species_id?: OrderBy
  gender_rate?: OrderBy
  generation_id?: OrderBy
  growth_rate_id?: OrderBy
  hatch_counter?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_color_id?: OrderBy
  pokemon_habitat_id?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonspeciesSumOrderBy = {
  base_happiness?: OrderBy
  capture_rate?: OrderBy
  evolution_chain_id?: OrderBy
  evolves_from_species_id?: OrderBy
  gender_rate?: OrderBy
  generation_id?: OrderBy
  growth_rate_id?: OrderBy
  hatch_counter?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_color_id?: OrderBy
  pokemon_habitat_id?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonspeciesVarPopOrderBy = {
  base_happiness?: OrderBy
  capture_rate?: OrderBy
  evolution_chain_id?: OrderBy
  evolves_from_species_id?: OrderBy
  gender_rate?: OrderBy
  generation_id?: OrderBy
  growth_rate_id?: OrderBy
  hatch_counter?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_color_id?: OrderBy
  pokemon_habitat_id?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonspeciesVarSampOrderBy = {
  base_happiness?: OrderBy
  capture_rate?: OrderBy
  evolution_chain_id?: OrderBy
  evolves_from_species_id?: OrderBy
  gender_rate?: OrderBy
  generation_id?: OrderBy
  growth_rate_id?: OrderBy
  hatch_counter?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_color_id?: OrderBy
  pokemon_habitat_id?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonspeciesVarianceOrderBy = {
  base_happiness?: OrderBy
  capture_rate?: OrderBy
  evolution_chain_id?: OrderBy
  evolves_from_species_id?: OrderBy
  gender_rate?: OrderBy
  generation_id?: OrderBy
  growth_rate_id?: OrderBy
  hatch_counter?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_color_id?: OrderBy
  pokemon_habitat_id?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemontypepastAggregateOrderBy = {
  avg?: PokemonV2PokemontypepastAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemontypepastMaxOrderBy
  min?: PokemonV2PokemontypepastMinOrderBy
  stddev?: PokemonV2PokemontypepastStddevOrderBy
  stddev_pop?: PokemonV2PokemontypepastStddevPopOrderBy
  stddev_samp?: PokemonV2PokemontypepastStddevSampOrderBy
  sum?: PokemonV2PokemontypepastSumOrderBy
  var_pop?: PokemonV2PokemontypepastVarPopOrderBy
  var_samp?: PokemonV2PokemontypepastVarSampOrderBy
  variance?: PokemonV2PokemontypepastVarianceOrderBy
}
export type PokemonV2PokemontypepastAvgOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypepastMaxOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypepastMinOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypepastStddevOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypepastStddevPopOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypepastStddevSampOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypepastSumOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypepastVarPopOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypepastVarSampOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypepastVarianceOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2RegionOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_generations_aggregate?: PokemonV2GenerationAggregateOrderBy
  pokemon_v2_locations_aggregate?: PokemonV2LocationAggregateOrderBy
  pokemon_v2_pokedexes_aggregate?: PokemonV2PokedexAggregateOrderBy
  pokemon_v2_regionnames_aggregate?: PokemonV2RegionnameAggregateOrderBy
  pokemon_v2_versiongroupregions_aggregate?: PokemonV2VersiongroupregionAggregateOrderBy
}
export type PokemonV2GenerationAggregateOrderBy = {
  avg?: PokemonV2GenerationAvgOrderBy
  count?: OrderBy
  max?: PokemonV2GenerationMaxOrderBy
  min?: PokemonV2GenerationMinOrderBy
  stddev?: PokemonV2GenerationStddevOrderBy
  stddev_pop?: PokemonV2GenerationStddevPopOrderBy
  stddev_samp?: PokemonV2GenerationStddevSampOrderBy
  sum?: PokemonV2GenerationSumOrderBy
  var_pop?: PokemonV2GenerationVarPopOrderBy
  var_samp?: PokemonV2GenerationVarSampOrderBy
  variance?: PokemonV2GenerationVarianceOrderBy
}
export type PokemonV2GenerationAvgOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2GenerationMaxOrderBy = {
  id?: OrderBy
  name?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2GenerationMinOrderBy = {
  id?: OrderBy
  name?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2GenerationStddevOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2GenerationStddevPopOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2GenerationStddevSampOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2GenerationSumOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2GenerationVarPopOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2GenerationVarSampOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2GenerationVarianceOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2LocationAggregateOrderBy = {
  avg?: PokemonV2LocationAvgOrderBy
  count?: OrderBy
  max?: PokemonV2LocationMaxOrderBy
  min?: PokemonV2LocationMinOrderBy
  stddev?: PokemonV2LocationStddevOrderBy
  stddev_pop?: PokemonV2LocationStddevPopOrderBy
  stddev_samp?: PokemonV2LocationStddevSampOrderBy
  sum?: PokemonV2LocationSumOrderBy
  var_pop?: PokemonV2LocationVarPopOrderBy
  var_samp?: PokemonV2LocationVarSampOrderBy
  variance?: PokemonV2LocationVarianceOrderBy
}
export type PokemonV2LocationAvgOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2LocationMaxOrderBy = {
  id?: OrderBy
  name?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2LocationMinOrderBy = {
  id?: OrderBy
  name?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2LocationStddevOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2LocationStddevPopOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2LocationStddevSampOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2LocationSumOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2LocationVarPopOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2LocationVarSampOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2LocationVarianceOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2PokedexAggregateOrderBy = {
  avg?: PokemonV2PokedexAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokedexMaxOrderBy
  min?: PokemonV2PokedexMinOrderBy
  stddev?: PokemonV2PokedexStddevOrderBy
  stddev_pop?: PokemonV2PokedexStddevPopOrderBy
  stddev_samp?: PokemonV2PokedexStddevSampOrderBy
  sum?: PokemonV2PokedexSumOrderBy
  var_pop?: PokemonV2PokedexVarPopOrderBy
  var_samp?: PokemonV2PokedexVarSampOrderBy
  variance?: PokemonV2PokedexVarianceOrderBy
}
export type PokemonV2PokedexAvgOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2PokedexMaxOrderBy = {
  id?: OrderBy
  name?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2PokedexMinOrderBy = {
  id?: OrderBy
  name?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2PokedexStddevOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2PokedexStddevPopOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2PokedexStddevSampOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2PokedexSumOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2PokedexVarPopOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2PokedexVarSampOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2PokedexVarianceOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2RegionnameAggregateOrderBy = {
  avg?: PokemonV2RegionnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2RegionnameMaxOrderBy
  min?: PokemonV2RegionnameMinOrderBy
  stddev?: PokemonV2RegionnameStddevOrderBy
  stddev_pop?: PokemonV2RegionnameStddevPopOrderBy
  stddev_samp?: PokemonV2RegionnameStddevSampOrderBy
  sum?: PokemonV2RegionnameSumOrderBy
  var_pop?: PokemonV2RegionnameVarPopOrderBy
  var_samp?: PokemonV2RegionnameVarSampOrderBy
  variance?: PokemonV2RegionnameVarianceOrderBy
}
export type PokemonV2RegionnameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2RegionnameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2RegionnameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2RegionnameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2RegionnameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2RegionnameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2RegionnameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2RegionnameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2RegionnameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2RegionnameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  region_id?: OrderBy
}
export type PokemonV2VersiongroupregionAggregateOrderBy = {
  avg?: PokemonV2VersiongroupregionAvgOrderBy
  count?: OrderBy
  max?: PokemonV2VersiongroupregionMaxOrderBy
  min?: PokemonV2VersiongroupregionMinOrderBy
  stddev?: PokemonV2VersiongroupregionStddevOrderBy
  stddev_pop?: PokemonV2VersiongroupregionStddevPopOrderBy
  stddev_samp?: PokemonV2VersiongroupregionStddevSampOrderBy
  sum?: PokemonV2VersiongroupregionSumOrderBy
  var_pop?: PokemonV2VersiongroupregionVarPopOrderBy
  var_samp?: PokemonV2VersiongroupregionVarSampOrderBy
  variance?: PokemonV2VersiongroupregionVarianceOrderBy
}
export type PokemonV2VersiongroupregionAvgOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupregionMaxOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupregionMinOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupregionStddevOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupregionStddevPopOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupregionStddevSampOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupregionSumOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupregionVarPopOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupregionVarSampOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupregionVarianceOrderBy = {
  id?: OrderBy
  region_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2TypegameindexAggregateOrderBy = {
  avg?: PokemonV2TypegameindexAvgOrderBy
  count?: OrderBy
  max?: PokemonV2TypegameindexMaxOrderBy
  min?: PokemonV2TypegameindexMinOrderBy
  stddev?: PokemonV2TypegameindexStddevOrderBy
  stddev_pop?: PokemonV2TypegameindexStddevPopOrderBy
  stddev_samp?: PokemonV2TypegameindexStddevSampOrderBy
  sum?: PokemonV2TypegameindexSumOrderBy
  var_pop?: PokemonV2TypegameindexVarPopOrderBy
  var_samp?: PokemonV2TypegameindexVarSampOrderBy
  variance?: PokemonV2TypegameindexVarianceOrderBy
}
export type PokemonV2TypegameindexAvgOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypegameindexMaxOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypegameindexMinOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypegameindexStddevOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypegameindexStddevPopOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypegameindexStddevSampOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypegameindexSumOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypegameindexVarPopOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypegameindexVarSampOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypegameindexVarianceOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypeAggregateOrderBy = {
  avg?: PokemonV2TypeAvgOrderBy
  count?: OrderBy
  max?: PokemonV2TypeMaxOrderBy
  min?: PokemonV2TypeMinOrderBy
  stddev?: PokemonV2TypeStddevOrderBy
  stddev_pop?: PokemonV2TypeStddevPopOrderBy
  stddev_samp?: PokemonV2TypeStddevSampOrderBy
  sum?: PokemonV2TypeSumOrderBy
  var_pop?: PokemonV2TypeVarPopOrderBy
  var_samp?: PokemonV2TypeVarSampOrderBy
  variance?: PokemonV2TypeVarianceOrderBy
}
export type PokemonV2TypeAvgOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2TypeMaxOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2TypeMinOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2TypeStddevOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2TypeStddevPopOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2TypeStddevSampOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2TypeSumOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2TypeVarPopOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2TypeVarSampOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2TypeVarianceOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2VersiongroupAggregateOrderBy = {
  avg?: PokemonV2VersiongroupAvgOrderBy
  count?: OrderBy
  max?: PokemonV2VersiongroupMaxOrderBy
  min?: PokemonV2VersiongroupMinOrderBy
  stddev?: PokemonV2VersiongroupStddevOrderBy
  stddev_pop?: PokemonV2VersiongroupStddevPopOrderBy
  stddev_samp?: PokemonV2VersiongroupStddevSampOrderBy
  sum?: PokemonV2VersiongroupSumOrderBy
  var_pop?: PokemonV2VersiongroupVarPopOrderBy
  var_samp?: PokemonV2VersiongroupVarSampOrderBy
  variance?: PokemonV2VersiongroupVarianceOrderBy
}
export type PokemonV2VersiongroupAvgOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  order?: OrderBy
}
export type PokemonV2VersiongroupMaxOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  name?: OrderBy
  order?: OrderBy
}
export type PokemonV2VersiongroupMinOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  name?: OrderBy
  order?: OrderBy
}
export type PokemonV2VersiongroupStddevOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  order?: OrderBy
}
export type PokemonV2VersiongroupStddevPopOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  order?: OrderBy
}
export type PokemonV2VersiongroupStddevSampOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  order?: OrderBy
}
export type PokemonV2VersiongroupSumOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  order?: OrderBy
}
export type PokemonV2VersiongroupVarPopOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  order?: OrderBy
}
export type PokemonV2VersiongroupVarSampOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  order?: OrderBy
}
export type PokemonV2VersiongroupVarianceOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  order?: OrderBy
}
export type PokemonV2PokemonabilityAggregateOrderBy = {
  avg?: PokemonV2PokemonabilityAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonabilityMaxOrderBy
  min?: PokemonV2PokemonabilityMinOrderBy
  stddev?: PokemonV2PokemonabilityStddevOrderBy
  stddev_pop?: PokemonV2PokemonabilityStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonabilityStddevSampOrderBy
  sum?: PokemonV2PokemonabilitySumOrderBy
  var_pop?: PokemonV2PokemonabilityVarPopOrderBy
  var_samp?: PokemonV2PokemonabilityVarSampOrderBy
  variance?: PokemonV2PokemonabilityVarianceOrderBy
}
export type PokemonV2PokemonabilityAvgOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
}
export type PokemonV2PokemonabilityMaxOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
}
export type PokemonV2PokemonabilityMinOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
}
export type PokemonV2PokemonabilityStddevOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
}
export type PokemonV2PokemonabilityStddevPopOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
}
export type PokemonV2PokemonabilityStddevSampOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
}
export type PokemonV2PokemonabilitySumOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
}
export type PokemonV2PokemonabilityVarPopOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
}
export type PokemonV2PokemonabilityVarSampOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
}
export type PokemonV2PokemonabilityVarianceOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
}
export type PokemonV2AbilityBoolExp = {
  _and?: PokemonV2AbilityBoolExp[]
  _not?: PokemonV2AbilityBoolExp
  _or?: PokemonV2AbilityBoolExp[]
  generation_id?: IntComparisonExp
  id?: IntComparisonExp
  is_main_series?: BooleanComparisonExp
  name?: StringComparisonExp
  pokemon_v2_abilitychanges?: PokemonV2AbilitychangeBoolExp
  pokemon_v2_abilityeffecttexts?: PokemonV2AbilityeffecttextBoolExp
  pokemon_v2_abilityflavortexts?: PokemonV2AbilityflavortextBoolExp
  pokemon_v2_abilitynames?: PokemonV2AbilitynameBoolExp
  pokemon_v2_generation?: PokemonV2GenerationBoolExp
  pokemon_v2_pokemonabilities?: PokemonV2PokemonabilityBoolExp
}
export type IntComparisonExp = {
  _eq?: number
  _gt?: number
  _gte?: number
  _in?: number[]
  _is_null?: boolean
  _lt?: number
  _lte?: number
  _neq?: number
  _nin?: number[]
}
export type BooleanComparisonExp = {
  _eq?: boolean
  _gt?: boolean
  _gte?: boolean
  _in?: boolean[]
  _is_null?: boolean
  _lt?: boolean
  _lte?: boolean
  _neq?: boolean
  _nin?: boolean[]
}
export type StringComparisonExp = {
  _eq?: string
  _gt?: string
  _gte?: string
  _ilike?: string
  _in?: string[]
  _iregex?: string
  _is_null?: boolean
  _like?: string
  _lt?: string
  _lte?: string
  _neq?: string
  _nilike?: string
  _nin?: string[]
  _niregex?: string
  _nlike?: string
  _nregex?: string
  _nsimilar?: string
  _regex?: string
  _similar?: string
}
export type PokemonV2AbilitychangeBoolExp = {
  _and?: PokemonV2AbilitychangeBoolExp[]
  _not?: PokemonV2AbilitychangeBoolExp
  _or?: PokemonV2AbilitychangeBoolExp[]
  ability_id?: IntComparisonExp
  id?: IntComparisonExp
  pokemon_v2_ability?: PokemonV2AbilityBoolExp
  pokemon_v2_abilitychangeeffecttexts?: PokemonV2AbilitychangeeffecttextBoolExp
  pokemon_v2_versiongroup?: PokemonV2VersiongroupBoolExp
  version_group_id?: IntComparisonExp
}
export type PokemonV2AbilitychangeeffecttextBoolExp = {
  _and?: PokemonV2AbilitychangeeffecttextBoolExp[]
  _not?: PokemonV2AbilitychangeeffecttextBoolExp
  _or?: PokemonV2AbilitychangeeffecttextBoolExp[]
  ability_change_id?: IntComparisonExp
  effect?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  pokemon_v2_abilitychange?: PokemonV2AbilitychangeBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2LanguageBoolExp = {
  _and?: PokemonV2LanguageBoolExp[]
  _not?: PokemonV2LanguageBoolExp
  _or?: PokemonV2LanguageBoolExp[]
  id?: IntComparisonExp
  iso3166?: StringComparisonExp
  iso639?: StringComparisonExp
  name?: StringComparisonExp
  official?: BooleanComparisonExp
  order?: IntComparisonExp
  pokemonV2LanguagenamesByLocalLanguageId?: PokemonV2LanguagenameBoolExp
  pokemon_v2_abilitychangeeffecttexts?: PokemonV2AbilitychangeeffecttextBoolExp
  pokemon_v2_abilityeffecttexts?: PokemonV2AbilityeffecttextBoolExp
  pokemon_v2_abilityflavortexts?: PokemonV2AbilityflavortextBoolExp
  pokemon_v2_abilitynames?: PokemonV2AbilitynameBoolExp
  pokemon_v2_berryfirmnessnames?: PokemonV2BerryfirmnessnameBoolExp
  pokemon_v2_berryflavornames?: PokemonV2BerryflavornameBoolExp
  pokemon_v2_characteristicdescriptions?: PokemonV2CharacteristicdescriptionBoolExp
  pokemon_v2_contesteffecteffecttexts?: PokemonV2ContesteffecteffecttextBoolExp
  pokemon_v2_contesteffectflavortexts?: PokemonV2ContesteffectflavortextBoolExp
  pokemon_v2_contesttypenames?: PokemonV2ContesttypenameBoolExp
  pokemon_v2_egggroupnames?: PokemonV2EgggroupnameBoolExp
  pokemon_v2_encounterconditionnames?: PokemonV2EncounterconditionnameBoolExp
  pokemon_v2_encounterconditionvaluenames?: PokemonV2EncounterconditionvaluenameBoolExp
  pokemon_v2_encountermethodnames?: PokemonV2EncountermethodnameBoolExp
  pokemon_v2_evolutiontriggernames?: PokemonV2EvolutiontriggernameBoolExp
  pokemon_v2_generationnames?: PokemonV2GenerationnameBoolExp
  pokemon_v2_growthratedescriptions?: PokemonV2GrowthratedescriptionBoolExp
  pokemon_v2_itemattributedescriptions?: PokemonV2ItemattributedescriptionBoolExp
  pokemon_v2_itemattributenames?: PokemonV2ItemattributenameBoolExp
  pokemon_v2_itemcategorynames?: PokemonV2ItemcategorynameBoolExp
  pokemon_v2_itemeffecttexts?: PokemonV2ItemeffecttextBoolExp
  pokemon_v2_itemflavortexts?: PokemonV2ItemflavortextBoolExp
  pokemon_v2_itemflingeffecteffecttexts?: PokemonV2ItemflingeffecteffecttextBoolExp
  pokemon_v2_itemnames?: PokemonV2ItemnameBoolExp
  pokemon_v2_itempocketnames?: PokemonV2ItempocketnameBoolExp
  pokemon_v2_languagenames?: PokemonV2LanguagenameBoolExp
  pokemon_v2_locationareanames?: PokemonV2LocationareanameBoolExp
  pokemon_v2_locationnames?: PokemonV2LocationnameBoolExp
  pokemon_v2_moveattributedescriptions?: PokemonV2MoveattributedescriptionBoolExp
  pokemon_v2_moveattributenames?: PokemonV2MoveattributenameBoolExp
  pokemon_v2_movebattlestylenames?: PokemonV2MovebattlestylenameBoolExp
  pokemon_v2_movedamageclassdescriptions?: PokemonV2MovedamageclassdescriptionBoolExp
  pokemon_v2_movedamageclassnames?: PokemonV2MovedamageclassnameBoolExp
  pokemon_v2_moveeffectchangeeffecttexts?: PokemonV2MoveeffectchangeeffecttextBoolExp
  pokemon_v2_moveeffecteffecttexts?: PokemonV2MoveeffecteffecttextBoolExp
  pokemon_v2_moveflavortexts?: PokemonV2MoveflavortextBoolExp
  pokemon_v2_movelearnmethoddescriptions?: PokemonV2MovelearnmethoddescriptionBoolExp
  pokemon_v2_movelearnmethodnames?: PokemonV2MovelearnmethodnameBoolExp
  pokemon_v2_movemetaailmentnames?: PokemonV2MovemetaailmentnameBoolExp
  pokemon_v2_movemetacategorydescriptions?: PokemonV2MovemetacategorydescriptionBoolExp
  pokemon_v2_movenames?: PokemonV2MovenameBoolExp
  pokemon_v2_movetargetdescriptions?: PokemonV2MovetargetdescriptionBoolExp
  pokemon_v2_movetargetnames?: PokemonV2MovetargetnameBoolExp
  pokemon_v2_naturenames?: PokemonV2NaturenameBoolExp
  pokemon_v2_palparkareanames?: PokemonV2PalparkareanameBoolExp
  pokemon_v2_pokeathlonstatnames?: PokemonV2PokeathlonstatnameBoolExp
  pokemon_v2_pokedexdescriptions?: PokemonV2PokedexdescriptionBoolExp
  pokemon_v2_pokedexnames?: PokemonV2PokedexnameBoolExp
  pokemon_v2_pokemoncolornames?: PokemonV2PokemoncolornameBoolExp
  pokemon_v2_pokemonformnames?: PokemonV2PokemonformnameBoolExp
  pokemon_v2_pokemonhabitatnames?: PokemonV2PokemonhabitatnameBoolExp
  pokemon_v2_pokemonshapenames?: PokemonV2PokemonshapenameBoolExp
  pokemon_v2_pokemonspeciesdescriptions?: PokemonV2PokemonspeciesdescriptionBoolExp
  pokemon_v2_pokemonspeciesflavortexts?: PokemonV2PokemonspeciesflavortextBoolExp
  pokemon_v2_pokemonspeciesnames?: PokemonV2PokemonspeciesnameBoolExp
  pokemon_v2_regionnames?: PokemonV2RegionnameBoolExp
  pokemon_v2_statnames?: PokemonV2StatnameBoolExp
  pokemon_v2_supercontesteffectflavortexts?: PokemonV2SupercontesteffectflavortextBoolExp
  pokemon_v2_typenames?: PokemonV2TypenameBoolExp
  pokemon_v2_versionnames?: PokemonV2VersionnameBoolExp
}
export type PokemonV2LanguagenameBoolExp = {
  _and?: PokemonV2LanguagenameBoolExp[]
  _not?: PokemonV2LanguagenameBoolExp
  _or?: PokemonV2LanguagenameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  local_language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemonV2LanguageByLocalLanguageId?: PokemonV2LanguageBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2AbilityeffecttextBoolExp = {
  _and?: PokemonV2AbilityeffecttextBoolExp[]
  _not?: PokemonV2AbilityeffecttextBoolExp
  _or?: PokemonV2AbilityeffecttextBoolExp[]
  ability_id?: IntComparisonExp
  effect?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  pokemon_v2_ability?: PokemonV2AbilityBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  short_effect?: StringComparisonExp
}
export type PokemonV2AbilityflavortextBoolExp = {
  _and?: PokemonV2AbilityflavortextBoolExp[]
  _not?: PokemonV2AbilityflavortextBoolExp
  _or?: PokemonV2AbilityflavortextBoolExp[]
  ability_id?: IntComparisonExp
  flavor_text?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  pokemon_v2_ability?: PokemonV2AbilityBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_versiongroup?: PokemonV2VersiongroupBoolExp
  version_group_id?: IntComparisonExp
}
export type PokemonV2VersiongroupBoolExp = {
  _and?: PokemonV2VersiongroupBoolExp[]
  _not?: PokemonV2VersiongroupBoolExp
  _or?: PokemonV2VersiongroupBoolExp[]
  generation_id?: IntComparisonExp
  id?: IntComparisonExp
  name?: StringComparisonExp
  order?: IntComparisonExp
  pokemon_v2_abilitychanges?: PokemonV2AbilitychangeBoolExp
  pokemon_v2_abilityflavortexts?: PokemonV2AbilityflavortextBoolExp
  pokemon_v2_encounterslots?: PokemonV2EncounterslotBoolExp
  pokemon_v2_generation?: PokemonV2GenerationBoolExp
  pokemon_v2_itemflavortexts?: PokemonV2ItemflavortextBoolExp
  pokemon_v2_machines?: PokemonV2MachineBoolExp
  pokemon_v2_movechanges?: PokemonV2MovechangeBoolExp
  pokemon_v2_moveeffectchanges?: PokemonV2MoveeffectchangeBoolExp
  pokemon_v2_moveflavortexts?: PokemonV2MoveflavortextBoolExp
  pokemon_v2_pokedexversiongroups?: PokemonV2PokedexversiongroupBoolExp
  pokemon_v2_pokemonforms?: PokemonV2PokemonformBoolExp
  pokemon_v2_pokemonmoves?: PokemonV2PokemonmoveBoolExp
  pokemon_v2_versiongroupmovelearnmethods?: PokemonV2VersiongroupmovelearnmethodBoolExp
  pokemon_v2_versiongroupregions?: PokemonV2VersiongroupregionBoolExp
  pokemon_v2_versions?: PokemonV2VersionBoolExp
}
export type PokemonV2EncounterslotBoolExp = {
  _and?: PokemonV2EncounterslotBoolExp[]
  _not?: PokemonV2EncounterslotBoolExp
  _or?: PokemonV2EncounterslotBoolExp[]
  encounter_method_id?: IntComparisonExp
  id?: IntComparisonExp
  pokemon_v2_encountermethod?: PokemonV2EncountermethodBoolExp
  pokemon_v2_encounters?: PokemonV2EncounterBoolExp
  pokemon_v2_versiongroup?: PokemonV2VersiongroupBoolExp
  rarity?: IntComparisonExp
  slot?: IntComparisonExp
  version_group_id?: IntComparisonExp
}
export type PokemonV2EncountermethodBoolExp = {
  _and?: PokemonV2EncountermethodBoolExp[]
  _not?: PokemonV2EncountermethodBoolExp
  _or?: PokemonV2EncountermethodBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  order?: IntComparisonExp
  pokemon_v2_encountermethodnames?: PokemonV2EncountermethodnameBoolExp
  pokemon_v2_encounterslots?: PokemonV2EncounterslotBoolExp
  pokemon_v2_locationareaencounterrates?: PokemonV2LocationareaencounterrateBoolExp
}
export type PokemonV2EncountermethodnameBoolExp = {
  _and?: PokemonV2EncountermethodnameBoolExp[]
  _not?: PokemonV2EncountermethodnameBoolExp
  _or?: PokemonV2EncountermethodnameBoolExp[]
  encounter_method_id?: IntComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_encountermethod?: PokemonV2EncountermethodBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2LocationareaencounterrateBoolExp = {
  _and?: PokemonV2LocationareaencounterrateBoolExp[]
  _not?: PokemonV2LocationareaencounterrateBoolExp
  _or?: PokemonV2LocationareaencounterrateBoolExp[]
  encounter_method_id?: IntComparisonExp
  id?: IntComparisonExp
  location_area_id?: IntComparisonExp
  pokemon_v2_encountermethod?: PokemonV2EncountermethodBoolExp
  pokemon_v2_locationarea?: PokemonV2LocationareaBoolExp
  pokemon_v2_version?: PokemonV2VersionBoolExp
  rate?: IntComparisonExp
  version_id?: IntComparisonExp
}
export type PokemonV2LocationareaBoolExp = {
  _and?: PokemonV2LocationareaBoolExp[]
  _not?: PokemonV2LocationareaBoolExp
  _or?: PokemonV2LocationareaBoolExp[]
  game_index?: IntComparisonExp
  id?: IntComparisonExp
  location_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_encounters?: PokemonV2EncounterBoolExp
  pokemon_v2_location?: PokemonV2LocationBoolExp
  pokemon_v2_locationareaencounterrates?: PokemonV2LocationareaencounterrateBoolExp
  pokemon_v2_locationareanames?: PokemonV2LocationareanameBoolExp
}
export type PokemonV2EncounterBoolExp = {
  _and?: PokemonV2EncounterBoolExp[]
  _not?: PokemonV2EncounterBoolExp
  _or?: PokemonV2EncounterBoolExp[]
  encounter_slot_id?: IntComparisonExp
  id?: IntComparisonExp
  location_area_id?: IntComparisonExp
  max_level?: IntComparisonExp
  min_level?: IntComparisonExp
  pokemon_id?: IntComparisonExp
  pokemon_v2_encounterconditionvaluemaps?: PokemonV2EncounterconditionvaluemapBoolExp
  pokemon_v2_encounterslot?: PokemonV2EncounterslotBoolExp
  pokemon_v2_locationarea?: PokemonV2LocationareaBoolExp
  pokemon_v2_pokemon?: PokemonV2PokemonBoolExp
  pokemon_v2_version?: PokemonV2VersionBoolExp
  version_id?: IntComparisonExp
}
export type PokemonV2EncounterconditionvaluemapBoolExp = {
  _and?: PokemonV2EncounterconditionvaluemapBoolExp[]
  _not?: PokemonV2EncounterconditionvaluemapBoolExp
  _or?: PokemonV2EncounterconditionvaluemapBoolExp[]
  encounter_condition_value_id?: IntComparisonExp
  encounter_id?: IntComparisonExp
  id?: IntComparisonExp
  pokemon_v2_encounter?: PokemonV2EncounterBoolExp
  pokemon_v2_encounterconditionvalue?: PokemonV2EncounterconditionvalueBoolExp
}
export type PokemonV2EncounterconditionvalueBoolExp = {
  _and?: PokemonV2EncounterconditionvalueBoolExp[]
  _not?: PokemonV2EncounterconditionvalueBoolExp
  _or?: PokemonV2EncounterconditionvalueBoolExp[]
  encounter_condition_id?: IntComparisonExp
  id?: IntComparisonExp
  is_default?: BooleanComparisonExp
  name?: StringComparisonExp
  pokemon_v2_encountercondition?: PokemonV2EncounterconditionBoolExp
  pokemon_v2_encounterconditionvaluemaps?: PokemonV2EncounterconditionvaluemapBoolExp
  pokemon_v2_encounterconditionvaluenames?: PokemonV2EncounterconditionvaluenameBoolExp
}
export type PokemonV2EncounterconditionBoolExp = {
  _and?: PokemonV2EncounterconditionBoolExp[]
  _not?: PokemonV2EncounterconditionBoolExp
  _or?: PokemonV2EncounterconditionBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_encounterconditionnames?: PokemonV2EncounterconditionnameBoolExp
  pokemon_v2_encounterconditionvalues?: PokemonV2EncounterconditionvalueBoolExp
}
export type PokemonV2EncounterconditionnameBoolExp = {
  _and?: PokemonV2EncounterconditionnameBoolExp[]
  _not?: PokemonV2EncounterconditionnameBoolExp
  _or?: PokemonV2EncounterconditionnameBoolExp[]
  encounter_condition_id?: IntComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_encountercondition?: PokemonV2EncounterconditionBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2EncounterconditionvaluenameBoolExp = {
  _and?: PokemonV2EncounterconditionvaluenameBoolExp[]
  _not?: PokemonV2EncounterconditionvaluenameBoolExp
  _or?: PokemonV2EncounterconditionvaluenameBoolExp[]
  encounter_condition_value_id?: IntComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_encounterconditionvalue?: PokemonV2EncounterconditionvalueBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2PokemonBoolExp = {
  _and?: PokemonV2PokemonBoolExp[]
  _not?: PokemonV2PokemonBoolExp
  _or?: PokemonV2PokemonBoolExp[]
  base_experience?: IntComparisonExp
  height?: IntComparisonExp
  id?: IntComparisonExp
  is_default?: BooleanComparisonExp
  name?: StringComparisonExp
  order?: IntComparisonExp
  pokemon_species_id?: IntComparisonExp
  pokemon_v2_encounters?: PokemonV2EncounterBoolExp
  pokemon_v2_pokemonabilities?: PokemonV2PokemonabilityBoolExp
  pokemon_v2_pokemonforms?: PokemonV2PokemonformBoolExp
  pokemon_v2_pokemongameindices?: PokemonV2PokemongameindexBoolExp
  pokemon_v2_pokemonitems?: PokemonV2PokemonitemBoolExp
  pokemon_v2_pokemonmoves?: PokemonV2PokemonmoveBoolExp
  pokemon_v2_pokemonspecy?: PokemonV2PokemonspeciesBoolExp
  pokemon_v2_pokemonsprites?: PokemonV2PokemonspritesBoolExp
  pokemon_v2_pokemonstats?: PokemonV2PokemonstatBoolExp
  pokemon_v2_pokemontypepasts?: PokemonV2PokemontypepastBoolExp
  pokemon_v2_pokemontypes?: PokemonV2PokemontypeBoolExp
  weight?: IntComparisonExp
}
export type PokemonV2PokemonabilityBoolExp = {
  _and?: PokemonV2PokemonabilityBoolExp[]
  _not?: PokemonV2PokemonabilityBoolExp
  _or?: PokemonV2PokemonabilityBoolExp[]
  ability_id?: IntComparisonExp
  id?: IntComparisonExp
  is_hidden?: BooleanComparisonExp
  pokemon_id?: IntComparisonExp
  pokemon_v2_ability?: PokemonV2AbilityBoolExp
  pokemon_v2_pokemon?: PokemonV2PokemonBoolExp
  slot?: IntComparisonExp
}
export type PokemonV2PokemonformBoolExp = {
  _and?: PokemonV2PokemonformBoolExp[]
  _not?: PokemonV2PokemonformBoolExp
  _or?: PokemonV2PokemonformBoolExp[]
  form_name?: StringComparisonExp
  form_order?: IntComparisonExp
  id?: IntComparisonExp
  is_battle_only?: BooleanComparisonExp
  is_default?: BooleanComparisonExp
  is_mega?: BooleanComparisonExp
  name?: StringComparisonExp
  order?: IntComparisonExp
  pokemon_id?: IntComparisonExp
  pokemon_v2_pokemon?: PokemonV2PokemonBoolExp
  pokemon_v2_pokemonformgenerations?: PokemonV2PokemonformgenerationBoolExp
  pokemon_v2_pokemonformnames?: PokemonV2PokemonformnameBoolExp
  pokemon_v2_pokemonformsprites?: PokemonV2PokemonformspritesBoolExp
  pokemon_v2_pokemonformtypes?: PokemonV2PokemonformtypeBoolExp
  pokemon_v2_versiongroup?: PokemonV2VersiongroupBoolExp
  version_group_id?: IntComparisonExp
}
export type PokemonV2PokemonformgenerationBoolExp = {
  _and?: PokemonV2PokemonformgenerationBoolExp[]
  _not?: PokemonV2PokemonformgenerationBoolExp
  _or?: PokemonV2PokemonformgenerationBoolExp[]
  game_index?: IntComparisonExp
  generation_id?: IntComparisonExp
  id?: IntComparisonExp
  pokemon_form_id?: IntComparisonExp
  pokemon_v2_generation?: PokemonV2GenerationBoolExp
  pokemon_v2_pokemonform?: PokemonV2PokemonformBoolExp
}
export type PokemonV2GenerationBoolExp = {
  _and?: PokemonV2GenerationBoolExp[]
  _not?: PokemonV2GenerationBoolExp
  _or?: PokemonV2GenerationBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_abilities?: PokemonV2AbilityBoolExp
  pokemon_v2_generationnames?: PokemonV2GenerationnameBoolExp
  pokemon_v2_itemgameindices?: PokemonV2ItemgameindexBoolExp
  pokemon_v2_locationgameindices?: PokemonV2LocationgameindexBoolExp
  pokemon_v2_moves?: PokemonV2MoveBoolExp
  pokemon_v2_pokemonformgenerations?: PokemonV2PokemonformgenerationBoolExp
  pokemon_v2_pokemonspecies?: PokemonV2PokemonspeciesBoolExp
  pokemon_v2_pokemontypepasts?: PokemonV2PokemontypepastBoolExp
  pokemon_v2_region?: PokemonV2RegionBoolExp
  pokemon_v2_typegameindices?: PokemonV2TypegameindexBoolExp
  pokemon_v2_types?: PokemonV2TypeBoolExp
  pokemon_v2_versiongroups?: PokemonV2VersiongroupBoolExp
  region_id?: IntComparisonExp
}
export type PokemonV2GenerationnameBoolExp = {
  _and?: PokemonV2GenerationnameBoolExp[]
  _not?: PokemonV2GenerationnameBoolExp
  _or?: PokemonV2GenerationnameBoolExp[]
  generation_id?: IntComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_generation?: PokemonV2GenerationBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2ItemgameindexBoolExp = {
  _and?: PokemonV2ItemgameindexBoolExp[]
  _not?: PokemonV2ItemgameindexBoolExp
  _or?: PokemonV2ItemgameindexBoolExp[]
  game_index?: IntComparisonExp
  generation_id?: IntComparisonExp
  id?: IntComparisonExp
  item_id?: IntComparisonExp
  pokemon_v2_generation?: PokemonV2GenerationBoolExp
  pokemon_v2_item?: PokemonV2ItemBoolExp
}
export type PokemonV2ItemBoolExp = {
  _and?: PokemonV2ItemBoolExp[]
  _not?: PokemonV2ItemBoolExp
  _or?: PokemonV2ItemBoolExp[]
  cost?: IntComparisonExp
  fling_power?: IntComparisonExp
  id?: IntComparisonExp
  item_category_id?: IntComparisonExp
  item_fling_effect_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemonV2PokemonevolutionsByHeldItemId?: PokemonV2PokemonevolutionBoolExp
  pokemon_v2_berries?: PokemonV2BerryBoolExp
  pokemon_v2_evolutionchains?: PokemonV2EvolutionchainBoolExp
  pokemon_v2_itemattributemaps?: PokemonV2ItemattributemapBoolExp
  pokemon_v2_itemcategory?: PokemonV2ItemcategoryBoolExp
  pokemon_v2_itemeffecttexts?: PokemonV2ItemeffecttextBoolExp
  pokemon_v2_itemflavortexts?: PokemonV2ItemflavortextBoolExp
  pokemon_v2_itemflingeffect?: PokemonV2ItemflingeffectBoolExp
  pokemon_v2_itemgameindices?: PokemonV2ItemgameindexBoolExp
  pokemon_v2_itemnames?: PokemonV2ItemnameBoolExp
  pokemon_v2_itemsprites?: PokemonV2ItemspritesBoolExp
  pokemon_v2_machines?: PokemonV2MachineBoolExp
  pokemon_v2_pokemonevolutions?: PokemonV2PokemonevolutionBoolExp
  pokemon_v2_pokemonitems?: PokemonV2PokemonitemBoolExp
}
export type PokemonV2PokemonevolutionBoolExp = {
  _and?: PokemonV2PokemonevolutionBoolExp[]
  _not?: PokemonV2PokemonevolutionBoolExp
  _or?: PokemonV2PokemonevolutionBoolExp[]
  evolution_item_id?: IntComparisonExp
  evolution_trigger_id?: IntComparisonExp
  evolved_species_id?: IntComparisonExp
  gender_id?: IntComparisonExp
  held_item_id?: IntComparisonExp
  id?: IntComparisonExp
  known_move_id?: IntComparisonExp
  known_move_type_id?: IntComparisonExp
  location_id?: IntComparisonExp
  min_affection?: IntComparisonExp
  min_beauty?: IntComparisonExp
  min_happiness?: IntComparisonExp
  min_level?: IntComparisonExp
  needs_overworld_rain?: BooleanComparisonExp
  party_species_id?: IntComparisonExp
  party_type_id?: IntComparisonExp
  pokemonV2ItemByHeldItemId?: PokemonV2ItemBoolExp
  pokemonV2PokemonspecyByPartySpeciesId?: PokemonV2PokemonspeciesBoolExp
  pokemonV2PokemonspecyByTradeSpeciesId?: PokemonV2PokemonspeciesBoolExp
  pokemonV2TypeByPartyTypeId?: PokemonV2TypeBoolExp
  pokemon_v2_evolutiontrigger?: PokemonV2EvolutiontriggerBoolExp
  pokemon_v2_gender?: PokemonV2GenderBoolExp
  pokemon_v2_item?: PokemonV2ItemBoolExp
  pokemon_v2_location?: PokemonV2LocationBoolExp
  pokemon_v2_move?: PokemonV2MoveBoolExp
  pokemon_v2_pokemonspecy?: PokemonV2PokemonspeciesBoolExp
  pokemon_v2_type?: PokemonV2TypeBoolExp
  relative_physical_stats?: IntComparisonExp
  time_of_day?: StringComparisonExp
  trade_species_id?: IntComparisonExp
  turn_upside_down?: BooleanComparisonExp
}
export type PokemonV2PokemonspeciesBoolExp = {
  _and?: PokemonV2PokemonspeciesBoolExp[]
  _not?: PokemonV2PokemonspeciesBoolExp
  _or?: PokemonV2PokemonspeciesBoolExp[]
  base_happiness?: IntComparisonExp
  capture_rate?: IntComparisonExp
  evolution_chain_id?: IntComparisonExp
  evolves_from_species_id?: IntComparisonExp
  forms_switchable?: BooleanComparisonExp
  gender_rate?: IntComparisonExp
  generation_id?: IntComparisonExp
  growth_rate_id?: IntComparisonExp
  has_gender_differences?: BooleanComparisonExp
  hatch_counter?: IntComparisonExp
  id?: IntComparisonExp
  is_baby?: BooleanComparisonExp
  is_legendary?: BooleanComparisonExp
  is_mythical?: BooleanComparisonExp
  name?: StringComparisonExp
  order?: IntComparisonExp
  pokemonV2PokemonevolutionsByPartySpeciesId?: PokemonV2PokemonevolutionBoolExp
  pokemonV2PokemonevolutionsByTradeSpeciesId?: PokemonV2PokemonevolutionBoolExp
  pokemon_color_id?: IntComparisonExp
  pokemon_habitat_id?: IntComparisonExp
  pokemon_shape_id?: IntComparisonExp
  pokemon_v2_evolutionchain?: PokemonV2EvolutionchainBoolExp
  pokemon_v2_generation?: PokemonV2GenerationBoolExp
  pokemon_v2_growthrate?: PokemonV2GrowthrateBoolExp
  pokemon_v2_palparks?: PokemonV2PalparkBoolExp
  pokemon_v2_pokemoncolor?: PokemonV2PokemoncolorBoolExp
  pokemon_v2_pokemondexnumbers?: PokemonV2PokemondexnumberBoolExp
  pokemon_v2_pokemonegggroups?: PokemonV2PokemonegggroupBoolExp
  pokemon_v2_pokemonevolutions?: PokemonV2PokemonevolutionBoolExp
  pokemon_v2_pokemonhabitat?: PokemonV2PokemonhabitatBoolExp
  pokemon_v2_pokemons?: PokemonV2PokemonBoolExp
  pokemon_v2_pokemonshape?: PokemonV2PokemonshapeBoolExp
  pokemon_v2_pokemonspecies?: PokemonV2PokemonspeciesBoolExp
  pokemon_v2_pokemonspeciesdescriptions?: PokemonV2PokemonspeciesdescriptionBoolExp
  pokemon_v2_pokemonspeciesflavortexts?: PokemonV2PokemonspeciesflavortextBoolExp
  pokemon_v2_pokemonspeciesnames?: PokemonV2PokemonspeciesnameBoolExp
  pokemon_v2_pokemonspecy?: PokemonV2PokemonspeciesBoolExp
}
export type PokemonV2EvolutionchainBoolExp = {
  _and?: PokemonV2EvolutionchainBoolExp[]
  _not?: PokemonV2EvolutionchainBoolExp
  _or?: PokemonV2EvolutionchainBoolExp[]
  baby_trigger_item_id?: IntComparisonExp
  id?: IntComparisonExp
  pokemon_v2_item?: PokemonV2ItemBoolExp
  pokemon_v2_pokemonspecies?: PokemonV2PokemonspeciesBoolExp
}
export type PokemonV2GrowthrateBoolExp = {
  _and?: PokemonV2GrowthrateBoolExp[]
  _not?: PokemonV2GrowthrateBoolExp
  _or?: PokemonV2GrowthrateBoolExp[]
  formula?: StringComparisonExp
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_experiences?: PokemonV2ExperienceBoolExp
  pokemon_v2_growthratedescriptions?: PokemonV2GrowthratedescriptionBoolExp
  pokemon_v2_machines?: PokemonV2MachineBoolExp
  pokemon_v2_pokemonspecies?: PokemonV2PokemonspeciesBoolExp
}
export type PokemonV2ExperienceBoolExp = {
  _and?: PokemonV2ExperienceBoolExp[]
  _not?: PokemonV2ExperienceBoolExp
  _or?: PokemonV2ExperienceBoolExp[]
  experience?: IntComparisonExp
  growth_rate_id?: IntComparisonExp
  id?: IntComparisonExp
  level?: IntComparisonExp
  pokemon_v2_growthrate?: PokemonV2GrowthrateBoolExp
}
export type PokemonV2GrowthratedescriptionBoolExp = {
  _and?: PokemonV2GrowthratedescriptionBoolExp[]
  _not?: PokemonV2GrowthratedescriptionBoolExp
  _or?: PokemonV2GrowthratedescriptionBoolExp[]
  description?: StringComparisonExp
  growth_rate_id?: IntComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  pokemon_v2_growthrate?: PokemonV2GrowthrateBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2MachineBoolExp = {
  _and?: PokemonV2MachineBoolExp[]
  _not?: PokemonV2MachineBoolExp
  _or?: PokemonV2MachineBoolExp[]
  growth_rate_id?: IntComparisonExp
  id?: IntComparisonExp
  item_id?: IntComparisonExp
  machine_number?: IntComparisonExp
  move_id?: IntComparisonExp
  pokemon_v2_growthrate?: PokemonV2GrowthrateBoolExp
  pokemon_v2_item?: PokemonV2ItemBoolExp
  pokemon_v2_move?: PokemonV2MoveBoolExp
  pokemon_v2_versiongroup?: PokemonV2VersiongroupBoolExp
  version_group_id?: IntComparisonExp
}
export type PokemonV2MoveBoolExp = {
  _and?: PokemonV2MoveBoolExp[]
  _not?: PokemonV2MoveBoolExp
  _or?: PokemonV2MoveBoolExp[]
  accuracy?: IntComparisonExp
  contest_effect_id?: IntComparisonExp
  contest_type_id?: IntComparisonExp
  generation_id?: IntComparisonExp
  id?: IntComparisonExp
  move_damage_class_id?: IntComparisonExp
  move_effect_chance?: IntComparisonExp
  move_effect_id?: IntComparisonExp
  move_target_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemonV2ContestcombosBySecondMoveId?: PokemonV2ContestcomboBoolExp
  pokemonV2SupercontestcombosBySecondMoveId?: PokemonV2SupercontestcomboBoolExp
  pokemon_v2_contestcombos?: PokemonV2ContestcomboBoolExp
  pokemon_v2_contesteffect?: PokemonV2ContesteffectBoolExp
  pokemon_v2_contesttype?: PokemonV2ContesttypeBoolExp
  pokemon_v2_generation?: PokemonV2GenerationBoolExp
  pokemon_v2_machines?: PokemonV2MachineBoolExp
  pokemon_v2_moveattributemaps?: PokemonV2MoveattributemapBoolExp
  pokemon_v2_movechanges?: PokemonV2MovechangeBoolExp
  pokemon_v2_movedamageclass?: PokemonV2MovedamageclassBoolExp
  pokemon_v2_moveeffect?: PokemonV2MoveeffectBoolExp
  pokemon_v2_moveflavortexts?: PokemonV2MoveflavortextBoolExp
  pokemon_v2_movemeta?: PokemonV2MovemetaBoolExp
  pokemon_v2_movemetastatchanges?: PokemonV2MovemetastatchangeBoolExp
  pokemon_v2_movenames?: PokemonV2MovenameBoolExp
  pokemon_v2_movetarget?: PokemonV2MovetargetBoolExp
  pokemon_v2_pokemonevolutions?: PokemonV2PokemonevolutionBoolExp
  pokemon_v2_pokemonmoves?: PokemonV2PokemonmoveBoolExp
  pokemon_v2_supercontestcombos?: PokemonV2SupercontestcomboBoolExp
  pokemon_v2_supercontesteffect?: PokemonV2SupercontesteffectBoolExp
  pokemon_v2_type?: PokemonV2TypeBoolExp
  power?: IntComparisonExp
  pp?: IntComparisonExp
  priority?: IntComparisonExp
  super_contest_effect_id?: IntComparisonExp
  type_id?: IntComparisonExp
}
export type PokemonV2ContestcomboBoolExp = {
  _and?: PokemonV2ContestcomboBoolExp[]
  _not?: PokemonV2ContestcomboBoolExp
  _or?: PokemonV2ContestcomboBoolExp[]
  first_move_id?: IntComparisonExp
  id?: IntComparisonExp
  pokemonV2MoveBySecondMoveId?: PokemonV2MoveBoolExp
  pokemon_v2_move?: PokemonV2MoveBoolExp
  second_move_id?: IntComparisonExp
}
export type PokemonV2SupercontestcomboBoolExp = {
  _and?: PokemonV2SupercontestcomboBoolExp[]
  _not?: PokemonV2SupercontestcomboBoolExp
  _or?: PokemonV2SupercontestcomboBoolExp[]
  first_move_id?: IntComparisonExp
  id?: IntComparisonExp
  pokemonV2MoveBySecondMoveId?: PokemonV2MoveBoolExp
  pokemon_v2_move?: PokemonV2MoveBoolExp
  second_move_id?: IntComparisonExp
}
export type PokemonV2ContesteffectBoolExp = {
  _and?: PokemonV2ContesteffectBoolExp[]
  _not?: PokemonV2ContesteffectBoolExp
  _or?: PokemonV2ContesteffectBoolExp[]
  appeal?: IntComparisonExp
  id?: IntComparisonExp
  jam?: IntComparisonExp
  pokemon_v2_contesteffecteffecttexts?: PokemonV2ContesteffecteffecttextBoolExp
  pokemon_v2_contesteffectflavortexts?: PokemonV2ContesteffectflavortextBoolExp
  pokemon_v2_moves?: PokemonV2MoveBoolExp
}
export type PokemonV2ContesteffecteffecttextBoolExp = {
  _and?: PokemonV2ContesteffecteffecttextBoolExp[]
  _not?: PokemonV2ContesteffecteffecttextBoolExp
  _or?: PokemonV2ContesteffecteffecttextBoolExp[]
  contest_effect_id?: IntComparisonExp
  effect?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  pokemon_v2_contesteffect?: PokemonV2ContesteffectBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2ContesteffectflavortextBoolExp = {
  _and?: PokemonV2ContesteffectflavortextBoolExp[]
  _not?: PokemonV2ContesteffectflavortextBoolExp
  _or?: PokemonV2ContesteffectflavortextBoolExp[]
  contest_effect_id?: IntComparisonExp
  flavor_text?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  pokemon_v2_contesteffect?: PokemonV2ContesteffectBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2ContesttypeBoolExp = {
  _and?: PokemonV2ContesttypeBoolExp[]
  _not?: PokemonV2ContesttypeBoolExp
  _or?: PokemonV2ContesttypeBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_berryflavors?: PokemonV2BerryflavorBoolExp
  pokemon_v2_contesttypenames?: PokemonV2ContesttypenameBoolExp
  pokemon_v2_moves?: PokemonV2MoveBoolExp
}
export type PokemonV2BerryflavorBoolExp = {
  _and?: PokemonV2BerryflavorBoolExp[]
  _not?: PokemonV2BerryflavorBoolExp
  _or?: PokemonV2BerryflavorBoolExp[]
  contest_type_id?: IntComparisonExp
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemonV2NaturesByLikesFlavorId?: PokemonV2NatureBoolExp
  pokemon_v2_berryflavormaps?: PokemonV2BerryflavormapBoolExp
  pokemon_v2_berryflavornames?: PokemonV2BerryflavornameBoolExp
  pokemon_v2_contesttype?: PokemonV2ContesttypeBoolExp
  pokemon_v2_natures?: PokemonV2NatureBoolExp
}
export type PokemonV2NatureBoolExp = {
  _and?: PokemonV2NatureBoolExp[]
  _not?: PokemonV2NatureBoolExp
  _or?: PokemonV2NatureBoolExp[]
  decreased_stat_id?: IntComparisonExp
  game_index?: IntComparisonExp
  hates_flavor_id?: IntComparisonExp
  id?: IntComparisonExp
  increased_stat_id?: IntComparisonExp
  likes_flavor_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemonV2BerryflavorByLikesFlavorId?: PokemonV2BerryflavorBoolExp
  pokemonV2StatByIncreasedStatId?: PokemonV2StatBoolExp
  pokemon_v2_berryflavor?: PokemonV2BerryflavorBoolExp
  pokemon_v2_naturebattlestylepreferences?: PokemonV2NaturebattlestylepreferenceBoolExp
  pokemon_v2_naturenames?: PokemonV2NaturenameBoolExp
  pokemon_v2_naturepokeathlonstats?: PokemonV2NaturepokeathlonstatBoolExp
  pokemon_v2_stat?: PokemonV2StatBoolExp
}
export type PokemonV2StatBoolExp = {
  _and?: PokemonV2StatBoolExp[]
  _not?: PokemonV2StatBoolExp
  _or?: PokemonV2StatBoolExp[]
  game_index?: IntComparisonExp
  id?: IntComparisonExp
  is_battle_only?: BooleanComparisonExp
  move_damage_class_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemonV2NaturesByIncreasedStatId?: PokemonV2NatureBoolExp
  pokemon_v2_characteristics?: PokemonV2CharacteristicBoolExp
  pokemon_v2_movedamageclass?: PokemonV2MovedamageclassBoolExp
  pokemon_v2_movemetastatchanges?: PokemonV2MovemetastatchangeBoolExp
  pokemon_v2_natures?: PokemonV2NatureBoolExp
  pokemon_v2_pokemonstats?: PokemonV2PokemonstatBoolExp
  pokemon_v2_statnames?: PokemonV2StatnameBoolExp
}
export type PokemonV2CharacteristicBoolExp = {
  _and?: PokemonV2CharacteristicBoolExp[]
  _not?: PokemonV2CharacteristicBoolExp
  _or?: PokemonV2CharacteristicBoolExp[]
  gene_mod_5?: IntComparisonExp
  id?: IntComparisonExp
  pokemon_v2_characteristicdescriptions?: PokemonV2CharacteristicdescriptionBoolExp
  pokemon_v2_stat?: PokemonV2StatBoolExp
  stat_id?: IntComparisonExp
}
export type PokemonV2CharacteristicdescriptionBoolExp = {
  _and?: PokemonV2CharacteristicdescriptionBoolExp[]
  _not?: PokemonV2CharacteristicdescriptionBoolExp
  _or?: PokemonV2CharacteristicdescriptionBoolExp[]
  characteristic_id?: IntComparisonExp
  description?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  pokemon_v2_characteristic?: PokemonV2CharacteristicBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2MovedamageclassBoolExp = {
  _and?: PokemonV2MovedamageclassBoolExp[]
  _not?: PokemonV2MovedamageclassBoolExp
  _or?: PokemonV2MovedamageclassBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_movedamageclassdescriptions?: PokemonV2MovedamageclassdescriptionBoolExp
  pokemon_v2_movedamageclassnames?: PokemonV2MovedamageclassnameBoolExp
  pokemon_v2_moves?: PokemonV2MoveBoolExp
  pokemon_v2_stats?: PokemonV2StatBoolExp
  pokemon_v2_types?: PokemonV2TypeBoolExp
}
export type PokemonV2MovedamageclassdescriptionBoolExp = {
  _and?: PokemonV2MovedamageclassdescriptionBoolExp[]
  _not?: PokemonV2MovedamageclassdescriptionBoolExp
  _or?: PokemonV2MovedamageclassdescriptionBoolExp[]
  description?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  move_damage_class_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_movedamageclass?: PokemonV2MovedamageclassBoolExp
}
export type PokemonV2MovedamageclassnameBoolExp = {
  _and?: PokemonV2MovedamageclassnameBoolExp[]
  _not?: PokemonV2MovedamageclassnameBoolExp
  _or?: PokemonV2MovedamageclassnameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  move_damage_class_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_movedamageclass?: PokemonV2MovedamageclassBoolExp
}
export type PokemonV2TypeBoolExp = {
  _and?: PokemonV2TypeBoolExp[]
  _not?: PokemonV2TypeBoolExp
  _or?: PokemonV2TypeBoolExp[]
  generation_id?: IntComparisonExp
  id?: IntComparisonExp
  move_damage_class_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemonV2PokemonevolutionsByPartyTypeId?: PokemonV2PokemonevolutionBoolExp
  pokemonV2TypeefficaciesByTargetTypeId?: PokemonV2TypeefficacyBoolExp
  pokemon_v2_berries?: PokemonV2BerryBoolExp
  pokemon_v2_generation?: PokemonV2GenerationBoolExp
  pokemon_v2_movechanges?: PokemonV2MovechangeBoolExp
  pokemon_v2_movedamageclass?: PokemonV2MovedamageclassBoolExp
  pokemon_v2_moves?: PokemonV2MoveBoolExp
  pokemon_v2_pokemonevolutions?: PokemonV2PokemonevolutionBoolExp
  pokemon_v2_pokemonformtypes?: PokemonV2PokemonformtypeBoolExp
  pokemon_v2_pokemontypepasts?: PokemonV2PokemontypepastBoolExp
  pokemon_v2_pokemontypes?: PokemonV2PokemontypeBoolExp
  pokemon_v2_typeefficacies?: PokemonV2TypeefficacyBoolExp
  pokemon_v2_typegameindices?: PokemonV2TypegameindexBoolExp
  pokemon_v2_typenames?: PokemonV2TypenameBoolExp
}
export type PokemonV2TypeefficacyBoolExp = {
  _and?: PokemonV2TypeefficacyBoolExp[]
  _not?: PokemonV2TypeefficacyBoolExp
  _or?: PokemonV2TypeefficacyBoolExp[]
  damage_factor?: IntComparisonExp
  damage_type_id?: IntComparisonExp
  id?: IntComparisonExp
  pokemonV2TypeByTargetTypeId?: PokemonV2TypeBoolExp
  pokemon_v2_type?: PokemonV2TypeBoolExp
  target_type_id?: IntComparisonExp
}
export type PokemonV2BerryBoolExp = {
  _and?: PokemonV2BerryBoolExp[]
  _not?: PokemonV2BerryBoolExp
  _or?: PokemonV2BerryBoolExp[]
  berry_firmness_id?: IntComparisonExp
  growth_time?: IntComparisonExp
  id?: IntComparisonExp
  item_id?: IntComparisonExp
  max_harvest?: IntComparisonExp
  name?: StringComparisonExp
  natural_gift_power?: IntComparisonExp
  natural_gift_type_id?: IntComparisonExp
  pokemon_v2_berryfirmness?: PokemonV2BerryfirmnessBoolExp
  pokemon_v2_berryflavormaps?: PokemonV2BerryflavormapBoolExp
  pokemon_v2_item?: PokemonV2ItemBoolExp
  pokemon_v2_type?: PokemonV2TypeBoolExp
  size?: IntComparisonExp
  smoothness?: IntComparisonExp
  soil_dryness?: IntComparisonExp
}
export type PokemonV2BerryfirmnessBoolExp = {
  _and?: PokemonV2BerryfirmnessBoolExp[]
  _not?: PokemonV2BerryfirmnessBoolExp
  _or?: PokemonV2BerryfirmnessBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_berries?: PokemonV2BerryBoolExp
  pokemon_v2_berryfirmnessnames?: PokemonV2BerryfirmnessnameBoolExp
}
export type PokemonV2BerryfirmnessnameBoolExp = {
  _and?: PokemonV2BerryfirmnessnameBoolExp[]
  _not?: PokemonV2BerryfirmnessnameBoolExp
  _or?: PokemonV2BerryfirmnessnameBoolExp[]
  berry_firmness_id?: IntComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_berryfirmness?: PokemonV2BerryfirmnessBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2BerryflavormapBoolExp = {
  _and?: PokemonV2BerryflavormapBoolExp[]
  _not?: PokemonV2BerryflavormapBoolExp
  _or?: PokemonV2BerryflavormapBoolExp[]
  berry_flavor_id?: IntComparisonExp
  berry_id?: IntComparisonExp
  id?: IntComparisonExp
  pokemon_v2_berry?: PokemonV2BerryBoolExp
  pokemon_v2_berryflavor?: PokemonV2BerryflavorBoolExp
  potency?: IntComparisonExp
}
export type PokemonV2MovechangeBoolExp = {
  _and?: PokemonV2MovechangeBoolExp[]
  _not?: PokemonV2MovechangeBoolExp
  _or?: PokemonV2MovechangeBoolExp[]
  accuracy?: IntComparisonExp
  id?: IntComparisonExp
  move_effect_chance?: IntComparisonExp
  move_effect_id?: IntComparisonExp
  move_id?: IntComparisonExp
  pokemon_v2_move?: PokemonV2MoveBoolExp
  pokemon_v2_moveeffect?: PokemonV2MoveeffectBoolExp
  pokemon_v2_type?: PokemonV2TypeBoolExp
  pokemon_v2_versiongroup?: PokemonV2VersiongroupBoolExp
  power?: IntComparisonExp
  pp?: IntComparisonExp
  type_id?: IntComparisonExp
  version_group_id?: IntComparisonExp
}
export type PokemonV2MoveeffectBoolExp = {
  _and?: PokemonV2MoveeffectBoolExp[]
  _not?: PokemonV2MoveeffectBoolExp
  _or?: PokemonV2MoveeffectBoolExp[]
  id?: IntComparisonExp
  pokemon_v2_movechanges?: PokemonV2MovechangeBoolExp
  pokemon_v2_moveeffectchanges?: PokemonV2MoveeffectchangeBoolExp
  pokemon_v2_moveeffecteffecttexts?: PokemonV2MoveeffecteffecttextBoolExp
  pokemon_v2_moves?: PokemonV2MoveBoolExp
}
export type PokemonV2MoveeffectchangeBoolExp = {
  _and?: PokemonV2MoveeffectchangeBoolExp[]
  _not?: PokemonV2MoveeffectchangeBoolExp
  _or?: PokemonV2MoveeffectchangeBoolExp[]
  id?: IntComparisonExp
  move_effect_id?: IntComparisonExp
  pokemon_v2_moveeffect?: PokemonV2MoveeffectBoolExp
  pokemon_v2_moveeffectchangeeffecttexts?: PokemonV2MoveeffectchangeeffecttextBoolExp
  pokemon_v2_versiongroup?: PokemonV2VersiongroupBoolExp
  version_group_id?: IntComparisonExp
}
export type PokemonV2MoveeffectchangeeffecttextBoolExp = {
  _and?: PokemonV2MoveeffectchangeeffecttextBoolExp[]
  _not?: PokemonV2MoveeffectchangeeffecttextBoolExp
  _or?: PokemonV2MoveeffectchangeeffecttextBoolExp[]
  effect?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  move_effect_change_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_moveeffectchange?: PokemonV2MoveeffectchangeBoolExp
}
export type PokemonV2MoveeffecteffecttextBoolExp = {
  _and?: PokemonV2MoveeffecteffecttextBoolExp[]
  _not?: PokemonV2MoveeffecteffecttextBoolExp
  _or?: PokemonV2MoveeffecteffecttextBoolExp[]
  effect?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  move_effect_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_moveeffect?: PokemonV2MoveeffectBoolExp
  short_effect?: StringComparisonExp
}
export type PokemonV2PokemonformtypeBoolExp = {
  _and?: PokemonV2PokemonformtypeBoolExp[]
  _not?: PokemonV2PokemonformtypeBoolExp
  _or?: PokemonV2PokemonformtypeBoolExp[]
  id?: IntComparisonExp
  pokemon_form_id?: IntComparisonExp
  pokemon_v2_pokemonform?: PokemonV2PokemonformBoolExp
  pokemon_v2_type?: PokemonV2TypeBoolExp
  slot?: IntComparisonExp
  type_id?: IntComparisonExp
}
export type PokemonV2PokemontypepastBoolExp = {
  _and?: PokemonV2PokemontypepastBoolExp[]
  _not?: PokemonV2PokemontypepastBoolExp
  _or?: PokemonV2PokemontypepastBoolExp[]
  generation_id?: IntComparisonExp
  id?: IntComparisonExp
  pokemon_id?: IntComparisonExp
  pokemon_v2_generation?: PokemonV2GenerationBoolExp
  pokemon_v2_pokemon?: PokemonV2PokemonBoolExp
  pokemon_v2_type?: PokemonV2TypeBoolExp
  slot?: IntComparisonExp
  type_id?: IntComparisonExp
}
export type PokemonV2PokemontypeBoolExp = {
  _and?: PokemonV2PokemontypeBoolExp[]
  _not?: PokemonV2PokemontypeBoolExp
  _or?: PokemonV2PokemontypeBoolExp[]
  id?: IntComparisonExp
  pokemon_id?: IntComparisonExp
  pokemon_v2_pokemon?: PokemonV2PokemonBoolExp
  pokemon_v2_type?: PokemonV2TypeBoolExp
  slot?: IntComparisonExp
  type_id?: IntComparisonExp
}
export type PokemonV2TypegameindexBoolExp = {
  _and?: PokemonV2TypegameindexBoolExp[]
  _not?: PokemonV2TypegameindexBoolExp
  _or?: PokemonV2TypegameindexBoolExp[]
  game_index?: IntComparisonExp
  generation_id?: IntComparisonExp
  id?: IntComparisonExp
  pokemon_v2_generation?: PokemonV2GenerationBoolExp
  pokemon_v2_type?: PokemonV2TypeBoolExp
  type_id?: IntComparisonExp
}
export type PokemonV2TypenameBoolExp = {
  _and?: PokemonV2TypenameBoolExp[]
  _not?: PokemonV2TypenameBoolExp
  _or?: PokemonV2TypenameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_type?: PokemonV2TypeBoolExp
  type_id?: IntComparisonExp
}
export type PokemonV2MovemetastatchangeBoolExp = {
  _and?: PokemonV2MovemetastatchangeBoolExp[]
  _not?: PokemonV2MovemetastatchangeBoolExp
  _or?: PokemonV2MovemetastatchangeBoolExp[]
  change?: IntComparisonExp
  id?: IntComparisonExp
  move_id?: IntComparisonExp
  pokemon_v2_move?: PokemonV2MoveBoolExp
  pokemon_v2_stat?: PokemonV2StatBoolExp
  stat_id?: IntComparisonExp
}
export type PokemonV2PokemonstatBoolExp = {
  _and?: PokemonV2PokemonstatBoolExp[]
  _not?: PokemonV2PokemonstatBoolExp
  _or?: PokemonV2PokemonstatBoolExp[]
  base_stat?: IntComparisonExp
  effort?: IntComparisonExp
  id?: IntComparisonExp
  pokemon_id?: IntComparisonExp
  pokemon_v2_pokemon?: PokemonV2PokemonBoolExp
  pokemon_v2_stat?: PokemonV2StatBoolExp
  stat_id?: IntComparisonExp
}
export type PokemonV2StatnameBoolExp = {
  _and?: PokemonV2StatnameBoolExp[]
  _not?: PokemonV2StatnameBoolExp
  _or?: PokemonV2StatnameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_stat?: PokemonV2StatBoolExp
  stat_id?: IntComparisonExp
}
export type PokemonV2NaturebattlestylepreferenceBoolExp = {
  _and?: PokemonV2NaturebattlestylepreferenceBoolExp[]
  _not?: PokemonV2NaturebattlestylepreferenceBoolExp
  _or?: PokemonV2NaturebattlestylepreferenceBoolExp[]
  high_hp_preference?: IntComparisonExp
  id?: IntComparisonExp
  low_hp_preference?: IntComparisonExp
  move_battle_style_id?: IntComparisonExp
  nature_id?: IntComparisonExp
  pokemon_v2_movebattlestyle?: PokemonV2MovebattlestyleBoolExp
  pokemon_v2_nature?: PokemonV2NatureBoolExp
}
export type PokemonV2MovebattlestyleBoolExp = {
  _and?: PokemonV2MovebattlestyleBoolExp[]
  _not?: PokemonV2MovebattlestyleBoolExp
  _or?: PokemonV2MovebattlestyleBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_movebattlestylenames?: PokemonV2MovebattlestylenameBoolExp
  pokemon_v2_naturebattlestylepreferences?: PokemonV2NaturebattlestylepreferenceBoolExp
}
export type PokemonV2MovebattlestylenameBoolExp = {
  _and?: PokemonV2MovebattlestylenameBoolExp[]
  _not?: PokemonV2MovebattlestylenameBoolExp
  _or?: PokemonV2MovebattlestylenameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  move_battle_style_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_movebattlestyle?: PokemonV2MovebattlestyleBoolExp
}
export type PokemonV2NaturenameBoolExp = {
  _and?: PokemonV2NaturenameBoolExp[]
  _not?: PokemonV2NaturenameBoolExp
  _or?: PokemonV2NaturenameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  nature_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_nature?: PokemonV2NatureBoolExp
}
export type PokemonV2NaturepokeathlonstatBoolExp = {
  _and?: PokemonV2NaturepokeathlonstatBoolExp[]
  _not?: PokemonV2NaturepokeathlonstatBoolExp
  _or?: PokemonV2NaturepokeathlonstatBoolExp[]
  id?: IntComparisonExp
  max_change?: IntComparisonExp
  nature_id?: IntComparisonExp
  pokeathlon_stat_id?: IntComparisonExp
  pokemon_v2_nature?: PokemonV2NatureBoolExp
  pokemon_v2_pokeathlonstat?: PokemonV2PokeathlonstatBoolExp
}
export type PokemonV2PokeathlonstatBoolExp = {
  _and?: PokemonV2PokeathlonstatBoolExp[]
  _not?: PokemonV2PokeathlonstatBoolExp
  _or?: PokemonV2PokeathlonstatBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_naturepokeathlonstats?: PokemonV2NaturepokeathlonstatBoolExp
  pokemon_v2_pokeathlonstatnames?: PokemonV2PokeathlonstatnameBoolExp
}
export type PokemonV2PokeathlonstatnameBoolExp = {
  _and?: PokemonV2PokeathlonstatnameBoolExp[]
  _not?: PokemonV2PokeathlonstatnameBoolExp
  _or?: PokemonV2PokeathlonstatnameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokeathlon_stat_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_pokeathlonstat?: PokemonV2PokeathlonstatBoolExp
}
export type PokemonV2BerryflavornameBoolExp = {
  _and?: PokemonV2BerryflavornameBoolExp[]
  _not?: PokemonV2BerryflavornameBoolExp
  _or?: PokemonV2BerryflavornameBoolExp[]
  berry_flavor_id?: IntComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_berryflavor?: PokemonV2BerryflavorBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2ContesttypenameBoolExp = {
  _and?: PokemonV2ContesttypenameBoolExp[]
  _not?: PokemonV2ContesttypenameBoolExp
  _or?: PokemonV2ContesttypenameBoolExp[]
  color?: StringComparisonExp
  contest_type_id?: IntComparisonExp
  flavor?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_contesttype?: PokemonV2ContesttypeBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2MoveattributemapBoolExp = {
  _and?: PokemonV2MoveattributemapBoolExp[]
  _not?: PokemonV2MoveattributemapBoolExp
  _or?: PokemonV2MoveattributemapBoolExp[]
  id?: IntComparisonExp
  move_attribute_id?: IntComparisonExp
  move_id?: IntComparisonExp
  pokemon_v2_move?: PokemonV2MoveBoolExp
  pokemon_v2_moveattribute?: PokemonV2MoveattributeBoolExp
}
export type PokemonV2MoveattributeBoolExp = {
  _and?: PokemonV2MoveattributeBoolExp[]
  _not?: PokemonV2MoveattributeBoolExp
  _or?: PokemonV2MoveattributeBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_moveattributedescriptions?: PokemonV2MoveattributedescriptionBoolExp
  pokemon_v2_moveattributemaps?: PokemonV2MoveattributemapBoolExp
  pokemon_v2_moveattributenames?: PokemonV2MoveattributenameBoolExp
}
export type PokemonV2MoveattributedescriptionBoolExp = {
  _and?: PokemonV2MoveattributedescriptionBoolExp[]
  _not?: PokemonV2MoveattributedescriptionBoolExp
  _or?: PokemonV2MoveattributedescriptionBoolExp[]
  description?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  move_attribute_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_moveattribute?: PokemonV2MoveattributeBoolExp
}
export type PokemonV2MoveattributenameBoolExp = {
  _and?: PokemonV2MoveattributenameBoolExp[]
  _not?: PokemonV2MoveattributenameBoolExp
  _or?: PokemonV2MoveattributenameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  move_attribute_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_moveattribute?: PokemonV2MoveattributeBoolExp
}
export type PokemonV2MoveflavortextBoolExp = {
  _and?: PokemonV2MoveflavortextBoolExp[]
  _not?: PokemonV2MoveflavortextBoolExp
  _or?: PokemonV2MoveflavortextBoolExp[]
  flavor_text?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  move_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_move?: PokemonV2MoveBoolExp
  pokemon_v2_versiongroup?: PokemonV2VersiongroupBoolExp
  version_group_id?: IntComparisonExp
}
export type PokemonV2MovemetaBoolExp = {
  _and?: PokemonV2MovemetaBoolExp[]
  _not?: PokemonV2MovemetaBoolExp
  _or?: PokemonV2MovemetaBoolExp[]
  ailment_chance?: IntComparisonExp
  crit_rate?: IntComparisonExp
  drain?: IntComparisonExp
  flinch_chance?: IntComparisonExp
  healing?: IntComparisonExp
  id?: IntComparisonExp
  max_hits?: IntComparisonExp
  max_turns?: IntComparisonExp
  min_hits?: IntComparisonExp
  min_turns?: IntComparisonExp
  move_id?: IntComparisonExp
  move_meta_ailment_id?: IntComparisonExp
  move_meta_category_id?: IntComparisonExp
  pokemon_v2_move?: PokemonV2MoveBoolExp
  pokemon_v2_movemetaailment?: PokemonV2MovemetaailmentBoolExp
  pokemon_v2_movemetacategory?: PokemonV2MovemetacategoryBoolExp
  stat_chance?: IntComparisonExp
}
export type PokemonV2MovemetaailmentBoolExp = {
  _and?: PokemonV2MovemetaailmentBoolExp[]
  _not?: PokemonV2MovemetaailmentBoolExp
  _or?: PokemonV2MovemetaailmentBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_movemeta?: PokemonV2MovemetaBoolExp
  pokemon_v2_movemetaailmentnames?: PokemonV2MovemetaailmentnameBoolExp
}
export type PokemonV2MovemetaailmentnameBoolExp = {
  _and?: PokemonV2MovemetaailmentnameBoolExp[]
  _not?: PokemonV2MovemetaailmentnameBoolExp
  _or?: PokemonV2MovemetaailmentnameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  move_meta_ailment_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_movemetaailment?: PokemonV2MovemetaailmentBoolExp
}
export type PokemonV2MovemetacategoryBoolExp = {
  _and?: PokemonV2MovemetacategoryBoolExp[]
  _not?: PokemonV2MovemetacategoryBoolExp
  _or?: PokemonV2MovemetacategoryBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_movemeta?: PokemonV2MovemetaBoolExp
  pokemon_v2_movemetacategorydescriptions?: PokemonV2MovemetacategorydescriptionBoolExp
}
export type PokemonV2MovemetacategorydescriptionBoolExp = {
  _and?: PokemonV2MovemetacategorydescriptionBoolExp[]
  _not?: PokemonV2MovemetacategorydescriptionBoolExp
  _or?: PokemonV2MovemetacategorydescriptionBoolExp[]
  description?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  move_meta_category_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_movemetacategory?: PokemonV2MovemetacategoryBoolExp
}
export type PokemonV2MovenameBoolExp = {
  _and?: PokemonV2MovenameBoolExp[]
  _not?: PokemonV2MovenameBoolExp
  _or?: PokemonV2MovenameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  move_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_move?: PokemonV2MoveBoolExp
}
export type PokemonV2MovetargetBoolExp = {
  _and?: PokemonV2MovetargetBoolExp[]
  _not?: PokemonV2MovetargetBoolExp
  _or?: PokemonV2MovetargetBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_moves?: PokemonV2MoveBoolExp
  pokemon_v2_movetargetdescriptions?: PokemonV2MovetargetdescriptionBoolExp
  pokemon_v2_movetargetnames?: PokemonV2MovetargetnameBoolExp
}
export type PokemonV2MovetargetdescriptionBoolExp = {
  _and?: PokemonV2MovetargetdescriptionBoolExp[]
  _not?: PokemonV2MovetargetdescriptionBoolExp
  _or?: PokemonV2MovetargetdescriptionBoolExp[]
  description?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  move_target_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_movetarget?: PokemonV2MovetargetBoolExp
}
export type PokemonV2MovetargetnameBoolExp = {
  _and?: PokemonV2MovetargetnameBoolExp[]
  _not?: PokemonV2MovetargetnameBoolExp
  _or?: PokemonV2MovetargetnameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  move_target_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_movetarget?: PokemonV2MovetargetBoolExp
}
export type PokemonV2PokemonmoveBoolExp = {
  _and?: PokemonV2PokemonmoveBoolExp[]
  _not?: PokemonV2PokemonmoveBoolExp
  _or?: PokemonV2PokemonmoveBoolExp[]
  id?: IntComparisonExp
  level?: IntComparisonExp
  move_id?: IntComparisonExp
  move_learn_method_id?: IntComparisonExp
  order?: IntComparisonExp
  pokemon_id?: IntComparisonExp
  pokemon_v2_move?: PokemonV2MoveBoolExp
  pokemon_v2_movelearnmethod?: PokemonV2MovelearnmethodBoolExp
  pokemon_v2_pokemon?: PokemonV2PokemonBoolExp
  pokemon_v2_versiongroup?: PokemonV2VersiongroupBoolExp
  version_group_id?: IntComparisonExp
}
export type PokemonV2MovelearnmethodBoolExp = {
  _and?: PokemonV2MovelearnmethodBoolExp[]
  _not?: PokemonV2MovelearnmethodBoolExp
  _or?: PokemonV2MovelearnmethodBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_movelearnmethoddescriptions?: PokemonV2MovelearnmethoddescriptionBoolExp
  pokemon_v2_movelearnmethodnames?: PokemonV2MovelearnmethodnameBoolExp
  pokemon_v2_pokemonmoves?: PokemonV2PokemonmoveBoolExp
  pokemon_v2_versiongroupmovelearnmethods?: PokemonV2VersiongroupmovelearnmethodBoolExp
}
export type PokemonV2MovelearnmethoddescriptionBoolExp = {
  _and?: PokemonV2MovelearnmethoddescriptionBoolExp[]
  _not?: PokemonV2MovelearnmethoddescriptionBoolExp
  _or?: PokemonV2MovelearnmethoddescriptionBoolExp[]
  description?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  move_learn_method_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_movelearnmethod?: PokemonV2MovelearnmethodBoolExp
}
export type PokemonV2MovelearnmethodnameBoolExp = {
  _and?: PokemonV2MovelearnmethodnameBoolExp[]
  _not?: PokemonV2MovelearnmethodnameBoolExp
  _or?: PokemonV2MovelearnmethodnameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  move_learn_method_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_movelearnmethod?: PokemonV2MovelearnmethodBoolExp
}
export type PokemonV2VersiongroupmovelearnmethodBoolExp = {
  _and?: PokemonV2VersiongroupmovelearnmethodBoolExp[]
  _not?: PokemonV2VersiongroupmovelearnmethodBoolExp
  _or?: PokemonV2VersiongroupmovelearnmethodBoolExp[]
  id?: IntComparisonExp
  move_learn_method_id?: IntComparisonExp
  pokemon_v2_movelearnmethod?: PokemonV2MovelearnmethodBoolExp
  pokemon_v2_versiongroup?: PokemonV2VersiongroupBoolExp
  version_group_id?: IntComparisonExp
}
export type PokemonV2SupercontesteffectBoolExp = {
  _and?: PokemonV2SupercontesteffectBoolExp[]
  _not?: PokemonV2SupercontesteffectBoolExp
  _or?: PokemonV2SupercontesteffectBoolExp[]
  appeal?: IntComparisonExp
  id?: IntComparisonExp
  pokemon_v2_moves?: PokemonV2MoveBoolExp
  pokemon_v2_supercontesteffectflavortexts?: PokemonV2SupercontesteffectflavortextBoolExp
}
export type PokemonV2SupercontesteffectflavortextBoolExp = {
  _and?: PokemonV2SupercontesteffectflavortextBoolExp[]
  _not?: PokemonV2SupercontesteffectflavortextBoolExp
  _or?: PokemonV2SupercontesteffectflavortextBoolExp[]
  flavor_text?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_supercontesteffect?: PokemonV2SupercontesteffectBoolExp
  super_contest_effect_id?: IntComparisonExp
}
export type PokemonV2PalparkBoolExp = {
  _and?: PokemonV2PalparkBoolExp[]
  _not?: PokemonV2PalparkBoolExp
  _or?: PokemonV2PalparkBoolExp[]
  base_score?: IntComparisonExp
  id?: IntComparisonExp
  pal_park_area_id?: IntComparisonExp
  pokemon_species_id?: IntComparisonExp
  pokemon_v2_palparkarea?: PokemonV2PalparkareaBoolExp
  pokemon_v2_pokemonspecy?: PokemonV2PokemonspeciesBoolExp
  rate?: IntComparisonExp
}
export type PokemonV2PalparkareaBoolExp = {
  _and?: PokemonV2PalparkareaBoolExp[]
  _not?: PokemonV2PalparkareaBoolExp
  _or?: PokemonV2PalparkareaBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_palparkareanames?: PokemonV2PalparkareanameBoolExp
  pokemon_v2_palparks?: PokemonV2PalparkBoolExp
}
export type PokemonV2PalparkareanameBoolExp = {
  _and?: PokemonV2PalparkareanameBoolExp[]
  _not?: PokemonV2PalparkareanameBoolExp
  _or?: PokemonV2PalparkareanameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pal_park_area_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_palparkarea?: PokemonV2PalparkareaBoolExp
}
export type PokemonV2PokemoncolorBoolExp = {
  _and?: PokemonV2PokemoncolorBoolExp[]
  _not?: PokemonV2PokemoncolorBoolExp
  _or?: PokemonV2PokemoncolorBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_pokemoncolornames?: PokemonV2PokemoncolornameBoolExp
  pokemon_v2_pokemonspecies?: PokemonV2PokemonspeciesBoolExp
}
export type PokemonV2PokemoncolornameBoolExp = {
  _and?: PokemonV2PokemoncolornameBoolExp[]
  _not?: PokemonV2PokemoncolornameBoolExp
  _or?: PokemonV2PokemoncolornameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_color_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_pokemoncolor?: PokemonV2PokemoncolorBoolExp
}
export type PokemonV2PokemondexnumberBoolExp = {
  _and?: PokemonV2PokemondexnumberBoolExp[]
  _not?: PokemonV2PokemondexnumberBoolExp
  _or?: PokemonV2PokemondexnumberBoolExp[]
  id?: IntComparisonExp
  pokedex_id?: IntComparisonExp
  pokedex_number?: IntComparisonExp
  pokemon_species_id?: IntComparisonExp
  pokemon_v2_pokedex?: PokemonV2PokedexBoolExp
  pokemon_v2_pokemonspecy?: PokemonV2PokemonspeciesBoolExp
}
export type PokemonV2PokedexBoolExp = {
  _and?: PokemonV2PokedexBoolExp[]
  _not?: PokemonV2PokedexBoolExp
  _or?: PokemonV2PokedexBoolExp[]
  id?: IntComparisonExp
  is_main_series?: BooleanComparisonExp
  name?: StringComparisonExp
  pokemon_v2_pokedexdescriptions?: PokemonV2PokedexdescriptionBoolExp
  pokemon_v2_pokedexnames?: PokemonV2PokedexnameBoolExp
  pokemon_v2_pokedexversiongroups?: PokemonV2PokedexversiongroupBoolExp
  pokemon_v2_pokemondexnumbers?: PokemonV2PokemondexnumberBoolExp
  pokemon_v2_region?: PokemonV2RegionBoolExp
  region_id?: IntComparisonExp
}
export type PokemonV2PokedexdescriptionBoolExp = {
  _and?: PokemonV2PokedexdescriptionBoolExp[]
  _not?: PokemonV2PokedexdescriptionBoolExp
  _or?: PokemonV2PokedexdescriptionBoolExp[]
  description?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  pokedex_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_pokedex?: PokemonV2PokedexBoolExp
}
export type PokemonV2PokedexnameBoolExp = {
  _and?: PokemonV2PokedexnameBoolExp[]
  _not?: PokemonV2PokedexnameBoolExp
  _or?: PokemonV2PokedexnameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokedex_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_pokedex?: PokemonV2PokedexBoolExp
}
export type PokemonV2PokedexversiongroupBoolExp = {
  _and?: PokemonV2PokedexversiongroupBoolExp[]
  _not?: PokemonV2PokedexversiongroupBoolExp
  _or?: PokemonV2PokedexversiongroupBoolExp[]
  id?: IntComparisonExp
  pokedex_id?: IntComparisonExp
  pokemon_v2_pokedex?: PokemonV2PokedexBoolExp
  pokemon_v2_versiongroup?: PokemonV2VersiongroupBoolExp
  version_group_id?: IntComparisonExp
}
export type PokemonV2RegionBoolExp = {
  _and?: PokemonV2RegionBoolExp[]
  _not?: PokemonV2RegionBoolExp
  _or?: PokemonV2RegionBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_generations?: PokemonV2GenerationBoolExp
  pokemon_v2_locations?: PokemonV2LocationBoolExp
  pokemon_v2_pokedexes?: PokemonV2PokedexBoolExp
  pokemon_v2_regionnames?: PokemonV2RegionnameBoolExp
  pokemon_v2_versiongroupregions?: PokemonV2VersiongroupregionBoolExp
}
export type PokemonV2LocationBoolExp = {
  _and?: PokemonV2LocationBoolExp[]
  _not?: PokemonV2LocationBoolExp
  _or?: PokemonV2LocationBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_locationareas?: PokemonV2LocationareaBoolExp
  pokemon_v2_locationgameindices?: PokemonV2LocationgameindexBoolExp
  pokemon_v2_locationnames?: PokemonV2LocationnameBoolExp
  pokemon_v2_pokemonevolutions?: PokemonV2PokemonevolutionBoolExp
  pokemon_v2_region?: PokemonV2RegionBoolExp
  region_id?: IntComparisonExp
}
export type PokemonV2LocationgameindexBoolExp = {
  _and?: PokemonV2LocationgameindexBoolExp[]
  _not?: PokemonV2LocationgameindexBoolExp
  _or?: PokemonV2LocationgameindexBoolExp[]
  game_index?: IntComparisonExp
  generation_id?: IntComparisonExp
  id?: IntComparisonExp
  location_id?: IntComparisonExp
  pokemon_v2_generation?: PokemonV2GenerationBoolExp
  pokemon_v2_location?: PokemonV2LocationBoolExp
}
export type PokemonV2LocationnameBoolExp = {
  _and?: PokemonV2LocationnameBoolExp[]
  _not?: PokemonV2LocationnameBoolExp
  _or?: PokemonV2LocationnameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  location_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_location?: PokemonV2LocationBoolExp
}
export type PokemonV2RegionnameBoolExp = {
  _and?: PokemonV2RegionnameBoolExp[]
  _not?: PokemonV2RegionnameBoolExp
  _or?: PokemonV2RegionnameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_region?: PokemonV2RegionBoolExp
  region_id?: IntComparisonExp
}
export type PokemonV2VersiongroupregionBoolExp = {
  _and?: PokemonV2VersiongroupregionBoolExp[]
  _not?: PokemonV2VersiongroupregionBoolExp
  _or?: PokemonV2VersiongroupregionBoolExp[]
  id?: IntComparisonExp
  pokemon_v2_region?: PokemonV2RegionBoolExp
  pokemon_v2_versiongroup?: PokemonV2VersiongroupBoolExp
  region_id?: IntComparisonExp
  version_group_id?: IntComparisonExp
}
export type PokemonV2PokemonegggroupBoolExp = {
  _and?: PokemonV2PokemonegggroupBoolExp[]
  _not?: PokemonV2PokemonegggroupBoolExp
  _or?: PokemonV2PokemonegggroupBoolExp[]
  egg_group_id?: IntComparisonExp
  id?: IntComparisonExp
  pokemon_species_id?: IntComparisonExp
  pokemon_v2_egggroup?: PokemonV2EgggroupBoolExp
  pokemon_v2_pokemonspecy?: PokemonV2PokemonspeciesBoolExp
}
export type PokemonV2EgggroupBoolExp = {
  _and?: PokemonV2EgggroupBoolExp[]
  _not?: PokemonV2EgggroupBoolExp
  _or?: PokemonV2EgggroupBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_egggroupnames?: PokemonV2EgggroupnameBoolExp
  pokemon_v2_pokemonegggroups?: PokemonV2PokemonegggroupBoolExp
}
export type PokemonV2EgggroupnameBoolExp = {
  _and?: PokemonV2EgggroupnameBoolExp[]
  _not?: PokemonV2EgggroupnameBoolExp
  _or?: PokemonV2EgggroupnameBoolExp[]
  egg_group_id?: IntComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_egggroup?: PokemonV2EgggroupBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2PokemonhabitatBoolExp = {
  _and?: PokemonV2PokemonhabitatBoolExp[]
  _not?: PokemonV2PokemonhabitatBoolExp
  _or?: PokemonV2PokemonhabitatBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_pokemonhabitatnames?: PokemonV2PokemonhabitatnameBoolExp
  pokemon_v2_pokemonspecies?: PokemonV2PokemonspeciesBoolExp
}
export type PokemonV2PokemonhabitatnameBoolExp = {
  _and?: PokemonV2PokemonhabitatnameBoolExp[]
  _not?: PokemonV2PokemonhabitatnameBoolExp
  _or?: PokemonV2PokemonhabitatnameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_habitat_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_pokemonhabitat?: PokemonV2PokemonhabitatBoolExp
}
export type PokemonV2PokemonshapeBoolExp = {
  _and?: PokemonV2PokemonshapeBoolExp[]
  _not?: PokemonV2PokemonshapeBoolExp
  _or?: PokemonV2PokemonshapeBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_pokemonshapenames?: PokemonV2PokemonshapenameBoolExp
  pokemon_v2_pokemonspecies?: PokemonV2PokemonspeciesBoolExp
}
export type PokemonV2PokemonshapenameBoolExp = {
  _and?: PokemonV2PokemonshapenameBoolExp[]
  _not?: PokemonV2PokemonshapenameBoolExp
  _or?: PokemonV2PokemonshapenameBoolExp[]
  awesome_name?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_shape_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_pokemonshape?: PokemonV2PokemonshapeBoolExp
}
export type PokemonV2PokemonspeciesdescriptionBoolExp = {
  _and?: PokemonV2PokemonspeciesdescriptionBoolExp[]
  _not?: PokemonV2PokemonspeciesdescriptionBoolExp
  _or?: PokemonV2PokemonspeciesdescriptionBoolExp[]
  description?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  pokemon_species_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_pokemonspecy?: PokemonV2PokemonspeciesBoolExp
}
export type PokemonV2PokemonspeciesflavortextBoolExp = {
  _and?: PokemonV2PokemonspeciesflavortextBoolExp[]
  _not?: PokemonV2PokemonspeciesflavortextBoolExp
  _or?: PokemonV2PokemonspeciesflavortextBoolExp[]
  flavor_text?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  pokemon_species_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_pokemonspecy?: PokemonV2PokemonspeciesBoolExp
  pokemon_v2_version?: PokemonV2VersionBoolExp
  version_id?: IntComparisonExp
}
export type PokemonV2VersionBoolExp = {
  _and?: PokemonV2VersionBoolExp[]
  _not?: PokemonV2VersionBoolExp
  _or?: PokemonV2VersionBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_encounters?: PokemonV2EncounterBoolExp
  pokemon_v2_locationareaencounterrates?: PokemonV2LocationareaencounterrateBoolExp
  pokemon_v2_pokemongameindices?: PokemonV2PokemongameindexBoolExp
  pokemon_v2_pokemonitems?: PokemonV2PokemonitemBoolExp
  pokemon_v2_pokemonspeciesflavortexts?: PokemonV2PokemonspeciesflavortextBoolExp
  pokemon_v2_versiongroup?: PokemonV2VersiongroupBoolExp
  pokemon_v2_versionnames?: PokemonV2VersionnameBoolExp
  version_group_id?: IntComparisonExp
}
export type PokemonV2PokemongameindexBoolExp = {
  _and?: PokemonV2PokemongameindexBoolExp[]
  _not?: PokemonV2PokemongameindexBoolExp
  _or?: PokemonV2PokemongameindexBoolExp[]
  game_index?: IntComparisonExp
  id?: IntComparisonExp
  pokemon_id?: IntComparisonExp
  pokemon_v2_pokemon?: PokemonV2PokemonBoolExp
  pokemon_v2_version?: PokemonV2VersionBoolExp
  version_id?: IntComparisonExp
}
export type PokemonV2PokemonitemBoolExp = {
  _and?: PokemonV2PokemonitemBoolExp[]
  _not?: PokemonV2PokemonitemBoolExp
  _or?: PokemonV2PokemonitemBoolExp[]
  id?: IntComparisonExp
  item_id?: IntComparisonExp
  pokemon_id?: IntComparisonExp
  pokemon_v2_item?: PokemonV2ItemBoolExp
  pokemon_v2_pokemon?: PokemonV2PokemonBoolExp
  pokemon_v2_version?: PokemonV2VersionBoolExp
  rarity?: IntComparisonExp
  version_id?: IntComparisonExp
}
export type PokemonV2VersionnameBoolExp = {
  _and?: PokemonV2VersionnameBoolExp[]
  _not?: PokemonV2VersionnameBoolExp
  _or?: PokemonV2VersionnameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_version?: PokemonV2VersionBoolExp
  version_id?: IntComparisonExp
}
export type PokemonV2PokemonspeciesnameBoolExp = {
  _and?: PokemonV2PokemonspeciesnameBoolExp[]
  _not?: PokemonV2PokemonspeciesnameBoolExp
  _or?: PokemonV2PokemonspeciesnameBoolExp[]
  genus?: StringComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_species_id?: IntComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_pokemonspecy?: PokemonV2PokemonspeciesBoolExp
}
export type PokemonV2EvolutiontriggerBoolExp = {
  _and?: PokemonV2EvolutiontriggerBoolExp[]
  _not?: PokemonV2EvolutiontriggerBoolExp
  _or?: PokemonV2EvolutiontriggerBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_evolutiontriggernames?: PokemonV2EvolutiontriggernameBoolExp
  pokemon_v2_pokemonevolutions?: PokemonV2PokemonevolutionBoolExp
}
export type PokemonV2EvolutiontriggernameBoolExp = {
  _and?: PokemonV2EvolutiontriggernameBoolExp[]
  _not?: PokemonV2EvolutiontriggernameBoolExp
  _or?: PokemonV2EvolutiontriggernameBoolExp[]
  evolution_trigger_id?: IntComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_evolutiontrigger?: PokemonV2EvolutiontriggerBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2GenderBoolExp = {
  _and?: PokemonV2GenderBoolExp[]
  _not?: PokemonV2GenderBoolExp
  _or?: PokemonV2GenderBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_pokemonevolutions?: PokemonV2PokemonevolutionBoolExp
}
export type PokemonV2ItemattributemapBoolExp = {
  _and?: PokemonV2ItemattributemapBoolExp[]
  _not?: PokemonV2ItemattributemapBoolExp
  _or?: PokemonV2ItemattributemapBoolExp[]
  id?: IntComparisonExp
  item_attribute_id?: IntComparisonExp
  item_id?: IntComparisonExp
  pokemon_v2_item?: PokemonV2ItemBoolExp
  pokemon_v2_itemattribute?: PokemonV2ItemattributeBoolExp
}
export type PokemonV2ItemattributeBoolExp = {
  _and?: PokemonV2ItemattributeBoolExp[]
  _not?: PokemonV2ItemattributeBoolExp
  _or?: PokemonV2ItemattributeBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_itemattributedescriptions?: PokemonV2ItemattributedescriptionBoolExp
  pokemon_v2_itemattributemaps?: PokemonV2ItemattributemapBoolExp
  pokemon_v2_itemattributenames?: PokemonV2ItemattributenameBoolExp
}
export type PokemonV2ItemattributedescriptionBoolExp = {
  _and?: PokemonV2ItemattributedescriptionBoolExp[]
  _not?: PokemonV2ItemattributedescriptionBoolExp
  _or?: PokemonV2ItemattributedescriptionBoolExp[]
  description?: StringComparisonExp
  id?: IntComparisonExp
  item_attribute_id?: IntComparisonExp
  language_id?: IntComparisonExp
  pokemon_v2_itemattribute?: PokemonV2ItemattributeBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2ItemattributenameBoolExp = {
  _and?: PokemonV2ItemattributenameBoolExp[]
  _not?: PokemonV2ItemattributenameBoolExp
  _or?: PokemonV2ItemattributenameBoolExp[]
  id?: IntComparisonExp
  item_attribute_id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_itemattribute?: PokemonV2ItemattributeBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2ItemcategoryBoolExp = {
  _and?: PokemonV2ItemcategoryBoolExp[]
  _not?: PokemonV2ItemcategoryBoolExp
  _or?: PokemonV2ItemcategoryBoolExp[]
  id?: IntComparisonExp
  item_pocket_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_itemcategorynames?: PokemonV2ItemcategorynameBoolExp
  pokemon_v2_itempocket?: PokemonV2ItempocketBoolExp
  pokemon_v2_items?: PokemonV2ItemBoolExp
}
export type PokemonV2ItemcategorynameBoolExp = {
  _and?: PokemonV2ItemcategorynameBoolExp[]
  _not?: PokemonV2ItemcategorynameBoolExp
  _or?: PokemonV2ItemcategorynameBoolExp[]
  id?: IntComparisonExp
  item_category_id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_itemcategory?: PokemonV2ItemcategoryBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2ItempocketBoolExp = {
  _and?: PokemonV2ItempocketBoolExp[]
  _not?: PokemonV2ItempocketBoolExp
  _or?: PokemonV2ItempocketBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_itemcategories?: PokemonV2ItemcategoryBoolExp
  pokemon_v2_itempocketnames?: PokemonV2ItempocketnameBoolExp
}
export type PokemonV2ItempocketnameBoolExp = {
  _and?: PokemonV2ItempocketnameBoolExp[]
  _not?: PokemonV2ItempocketnameBoolExp
  _or?: PokemonV2ItempocketnameBoolExp[]
  id?: IntComparisonExp
  item_pocket_id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_itempocket?: PokemonV2ItempocketBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2ItemeffecttextBoolExp = {
  _and?: PokemonV2ItemeffecttextBoolExp[]
  _not?: PokemonV2ItemeffecttextBoolExp
  _or?: PokemonV2ItemeffecttextBoolExp[]
  effect?: StringComparisonExp
  id?: IntComparisonExp
  item_id?: IntComparisonExp
  language_id?: IntComparisonExp
  pokemon_v2_item?: PokemonV2ItemBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  short_effect?: StringComparisonExp
}
export type PokemonV2ItemflavortextBoolExp = {
  _and?: PokemonV2ItemflavortextBoolExp[]
  _not?: PokemonV2ItemflavortextBoolExp
  _or?: PokemonV2ItemflavortextBoolExp[]
  flavor_text?: StringComparisonExp
  id?: IntComparisonExp
  item_id?: IntComparisonExp
  language_id?: IntComparisonExp
  pokemon_v2_item?: PokemonV2ItemBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_versiongroup?: PokemonV2VersiongroupBoolExp
  version_group_id?: IntComparisonExp
}
export type PokemonV2ItemflingeffectBoolExp = {
  _and?: PokemonV2ItemflingeffectBoolExp[]
  _not?: PokemonV2ItemflingeffectBoolExp
  _or?: PokemonV2ItemflingeffectBoolExp[]
  id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_itemflingeffecteffecttexts?: PokemonV2ItemflingeffecteffecttextBoolExp
  pokemon_v2_items?: PokemonV2ItemBoolExp
}
export type PokemonV2ItemflingeffecteffecttextBoolExp = {
  _and?: PokemonV2ItemflingeffecteffecttextBoolExp[]
  _not?: PokemonV2ItemflingeffecteffecttextBoolExp
  _or?: PokemonV2ItemflingeffecteffecttextBoolExp[]
  effect?: StringComparisonExp
  id?: IntComparisonExp
  item_fling_effect_id?: IntComparisonExp
  language_id?: IntComparisonExp
  pokemon_v2_itemflingeffect?: PokemonV2ItemflingeffectBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2ItemnameBoolExp = {
  _and?: PokemonV2ItemnameBoolExp[]
  _not?: PokemonV2ItemnameBoolExp
  _or?: PokemonV2ItemnameBoolExp[]
  id?: IntComparisonExp
  item_id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_item?: PokemonV2ItemBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2ItemspritesBoolExp = {
  _and?: PokemonV2ItemspritesBoolExp[]
  _not?: PokemonV2ItemspritesBoolExp
  _or?: PokemonV2ItemspritesBoolExp[]
  id?: IntComparisonExp
  item_id?: IntComparisonExp
  pokemon_v2_item?: PokemonV2ItemBoolExp
  sprites?: StringComparisonExp
}
export type PokemonV2PokemonformnameBoolExp = {
  _and?: PokemonV2PokemonformnameBoolExp[]
  _not?: PokemonV2PokemonformnameBoolExp
  _or?: PokemonV2PokemonformnameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_form_id?: IntComparisonExp
  pokemon_name?: StringComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_pokemonform?: PokemonV2PokemonformBoolExp
}
export type PokemonV2PokemonformspritesBoolExp = {
  _and?: PokemonV2PokemonformspritesBoolExp[]
  _not?: PokemonV2PokemonformspritesBoolExp
  _or?: PokemonV2PokemonformspritesBoolExp[]
  id?: IntComparisonExp
  pokemon_form_id?: IntComparisonExp
  pokemon_v2_pokemonform?: PokemonV2PokemonformBoolExp
  sprites?: StringComparisonExp
}
export type PokemonV2PokemonspritesBoolExp = {
  _and?: PokemonV2PokemonspritesBoolExp[]
  _not?: PokemonV2PokemonspritesBoolExp
  _or?: PokemonV2PokemonspritesBoolExp[]
  id?: IntComparisonExp
  pokemon_id?: IntComparisonExp
  pokemon_v2_pokemon?: PokemonV2PokemonBoolExp
  sprites?: StringComparisonExp
}
export type PokemonV2LocationareanameBoolExp = {
  _and?: PokemonV2LocationareanameBoolExp[]
  _not?: PokemonV2LocationareanameBoolExp
  _or?: PokemonV2LocationareanameBoolExp[]
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  location_area_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
  pokemon_v2_locationarea?: PokemonV2LocationareaBoolExp
}
export type PokemonV2AbilitynameBoolExp = {
  _and?: PokemonV2AbilitynameBoolExp[]
  _not?: PokemonV2AbilitynameBoolExp
  _or?: PokemonV2AbilitynameBoolExp[]
  ability_id?: IntComparisonExp
  id?: IntComparisonExp
  language_id?: IntComparisonExp
  name?: StringComparisonExp
  pokemon_v2_ability?: PokemonV2AbilityBoolExp
  pokemon_v2_language?: PokemonV2LanguageBoolExp
}
export type PokemonV2AbilitychangeOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  pokemon_v2_ability?: PokemonV2AbilityOrderBy
  pokemon_v2_abilitychangeeffecttexts_aggregate?: PokemonV2AbilitychangeeffecttextAggregateOrderBy
  pokemon_v2_versiongroup?: PokemonV2VersiongroupOrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilitychangeeffecttextAggregateOrderBy = {
  avg?: PokemonV2AbilitychangeeffecttextAvgOrderBy
  count?: OrderBy
  max?: PokemonV2AbilitychangeeffecttextMaxOrderBy
  min?: PokemonV2AbilitychangeeffecttextMinOrderBy
  stddev?: PokemonV2AbilitychangeeffecttextStddevOrderBy
  stddev_pop?: PokemonV2AbilitychangeeffecttextStddevPopOrderBy
  stddev_samp?: PokemonV2AbilitychangeeffecttextStddevSampOrderBy
  sum?: PokemonV2AbilitychangeeffecttextSumOrderBy
  var_pop?: PokemonV2AbilitychangeeffecttextVarPopOrderBy
  var_samp?: PokemonV2AbilitychangeeffecttextVarSampOrderBy
  variance?: PokemonV2AbilitychangeeffecttextVarianceOrderBy
}
export type PokemonV2AbilitychangeeffecttextAvgOrderBy = {
  ability_change_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilitychangeeffecttextMaxOrderBy = {
  ability_change_id?: OrderBy
  effect?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilitychangeeffecttextMinOrderBy = {
  ability_change_id?: OrderBy
  effect?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilitychangeeffecttextStddevOrderBy = {
  ability_change_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilitychangeeffecttextStddevPopOrderBy = {
  ability_change_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilitychangeeffecttextStddevSampOrderBy = {
  ability_change_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilitychangeeffecttextSumOrderBy = {
  ability_change_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilitychangeeffecttextVarPopOrderBy = {
  ability_change_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilitychangeeffecttextVarSampOrderBy = {
  ability_change_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2AbilitychangeeffecttextVarianceOrderBy = {
  ability_change_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2VersiongroupOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  name?: OrderBy
  order?: OrderBy
  pokemon_v2_abilitychanges_aggregate?: PokemonV2AbilitychangeAggregateOrderBy
  pokemon_v2_abilityflavortexts_aggregate?: PokemonV2AbilityflavortextAggregateOrderBy
  pokemon_v2_encounterslots_aggregate?: PokemonV2EncounterslotAggregateOrderBy
  pokemon_v2_generation?: PokemonV2GenerationOrderBy
  pokemon_v2_itemflavortexts_aggregate?: PokemonV2ItemflavortextAggregateOrderBy
  pokemon_v2_machines_aggregate?: PokemonV2MachineAggregateOrderBy
  pokemon_v2_movechanges_aggregate?: PokemonV2MovechangeAggregateOrderBy
  pokemon_v2_moveeffectchanges_aggregate?: PokemonV2MoveeffectchangeAggregateOrderBy
  pokemon_v2_moveflavortexts_aggregate?: PokemonV2MoveflavortextAggregateOrderBy
  pokemon_v2_pokedexversiongroups_aggregate?: PokemonV2PokedexversiongroupAggregateOrderBy
  pokemon_v2_pokemonforms_aggregate?: PokemonV2PokemonformAggregateOrderBy
  pokemon_v2_pokemonmoves_aggregate?: PokemonV2PokemonmoveAggregateOrderBy
  pokemon_v2_versiongroupmovelearnmethods_aggregate?: PokemonV2VersiongroupmovelearnmethodAggregateOrderBy
  pokemon_v2_versiongroupregions_aggregate?: PokemonV2VersiongroupregionAggregateOrderBy
  pokemon_v2_versions_aggregate?: PokemonV2VersionAggregateOrderBy
}
export type PokemonV2EncounterslotAggregateOrderBy = {
  avg?: PokemonV2EncounterslotAvgOrderBy
  count?: OrderBy
  max?: PokemonV2EncounterslotMaxOrderBy
  min?: PokemonV2EncounterslotMinOrderBy
  stddev?: PokemonV2EncounterslotStddevOrderBy
  stddev_pop?: PokemonV2EncounterslotStddevPopOrderBy
  stddev_samp?: PokemonV2EncounterslotStddevSampOrderBy
  sum?: PokemonV2EncounterslotSumOrderBy
  var_pop?: PokemonV2EncounterslotVarPopOrderBy
  var_samp?: PokemonV2EncounterslotVarSampOrderBy
  variance?: PokemonV2EncounterslotVarianceOrderBy
}
export type PokemonV2EncounterslotAvgOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  rarity?: OrderBy
  slot?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2EncounterslotMaxOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  rarity?: OrderBy
  slot?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2EncounterslotMinOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  rarity?: OrderBy
  slot?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2EncounterslotStddevOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  rarity?: OrderBy
  slot?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2EncounterslotStddevPopOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  rarity?: OrderBy
  slot?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2EncounterslotStddevSampOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  rarity?: OrderBy
  slot?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2EncounterslotSumOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  rarity?: OrderBy
  slot?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2EncounterslotVarPopOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  rarity?: OrderBy
  slot?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2EncounterslotVarSampOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  rarity?: OrderBy
  slot?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2EncounterslotVarianceOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  rarity?: OrderBy
  slot?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2ItemflavortextAggregateOrderBy = {
  avg?: PokemonV2ItemflavortextAvgOrderBy
  count?: OrderBy
  max?: PokemonV2ItemflavortextMaxOrderBy
  min?: PokemonV2ItemflavortextMinOrderBy
  stddev?: PokemonV2ItemflavortextStddevOrderBy
  stddev_pop?: PokemonV2ItemflavortextStddevPopOrderBy
  stddev_samp?: PokemonV2ItemflavortextStddevSampOrderBy
  sum?: PokemonV2ItemflavortextSumOrderBy
  var_pop?: PokemonV2ItemflavortextVarPopOrderBy
  var_samp?: PokemonV2ItemflavortextVarSampOrderBy
  variance?: PokemonV2ItemflavortextVarianceOrderBy
}
export type PokemonV2ItemflavortextAvgOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2ItemflavortextMaxOrderBy = {
  flavor_text?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2ItemflavortextMinOrderBy = {
  flavor_text?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2ItemflavortextStddevOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2ItemflavortextStddevPopOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2ItemflavortextStddevSampOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2ItemflavortextSumOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2ItemflavortextVarPopOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2ItemflavortextVarSampOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2ItemflavortextVarianceOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MachineAggregateOrderBy = {
  avg?: PokemonV2MachineAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MachineMaxOrderBy
  min?: PokemonV2MachineMinOrderBy
  stddev?: PokemonV2MachineStddevOrderBy
  stddev_pop?: PokemonV2MachineStddevPopOrderBy
  stddev_samp?: PokemonV2MachineStddevSampOrderBy
  sum?: PokemonV2MachineSumOrderBy
  var_pop?: PokemonV2MachineVarPopOrderBy
  var_samp?: PokemonV2MachineVarSampOrderBy
  variance?: PokemonV2MachineVarianceOrderBy
}
export type PokemonV2MachineAvgOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  machine_number?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MachineMaxOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  machine_number?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MachineMinOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  machine_number?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MachineStddevOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  machine_number?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MachineStddevPopOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  machine_number?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MachineStddevSampOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  machine_number?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MachineSumOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  machine_number?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MachineVarPopOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  machine_number?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MachineVarSampOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  machine_number?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MachineVarianceOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  machine_number?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MovechangeAggregateOrderBy = {
  avg?: PokemonV2MovechangeAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MovechangeMaxOrderBy
  min?: PokemonV2MovechangeMinOrderBy
  stddev?: PokemonV2MovechangeStddevOrderBy
  stddev_pop?: PokemonV2MovechangeStddevPopOrderBy
  stddev_samp?: PokemonV2MovechangeStddevSampOrderBy
  sum?: PokemonV2MovechangeSumOrderBy
  var_pop?: PokemonV2MovechangeVarPopOrderBy
  var_samp?: PokemonV2MovechangeVarSampOrderBy
  variance?: PokemonV2MovechangeVarianceOrderBy
}
export type PokemonV2MovechangeAvgOrderBy = {
  accuracy?: OrderBy
  id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_id?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  type_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MovechangeMaxOrderBy = {
  accuracy?: OrderBy
  id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_id?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  type_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MovechangeMinOrderBy = {
  accuracy?: OrderBy
  id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_id?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  type_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MovechangeStddevOrderBy = {
  accuracy?: OrderBy
  id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_id?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  type_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MovechangeStddevPopOrderBy = {
  accuracy?: OrderBy
  id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_id?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  type_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MovechangeStddevSampOrderBy = {
  accuracy?: OrderBy
  id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_id?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  type_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MovechangeSumOrderBy = {
  accuracy?: OrderBy
  id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_id?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  type_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MovechangeVarPopOrderBy = {
  accuracy?: OrderBy
  id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_id?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  type_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MovechangeVarSampOrderBy = {
  accuracy?: OrderBy
  id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_id?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  type_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MovechangeVarianceOrderBy = {
  accuracy?: OrderBy
  id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_id?: OrderBy
  power?: OrderBy
  pp?: OrderBy
  type_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveeffectchangeAggregateOrderBy = {
  avg?: PokemonV2MoveeffectchangeAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MoveeffectchangeMaxOrderBy
  min?: PokemonV2MoveeffectchangeMinOrderBy
  stddev?: PokemonV2MoveeffectchangeStddevOrderBy
  stddev_pop?: PokemonV2MoveeffectchangeStddevPopOrderBy
  stddev_samp?: PokemonV2MoveeffectchangeStddevSampOrderBy
  sum?: PokemonV2MoveeffectchangeSumOrderBy
  var_pop?: PokemonV2MoveeffectchangeVarPopOrderBy
  var_samp?: PokemonV2MoveeffectchangeVarSampOrderBy
  variance?: PokemonV2MoveeffectchangeVarianceOrderBy
}
export type PokemonV2MoveeffectchangeAvgOrderBy = {
  id?: OrderBy
  move_effect_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveeffectchangeMaxOrderBy = {
  id?: OrderBy
  move_effect_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveeffectchangeMinOrderBy = {
  id?: OrderBy
  move_effect_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveeffectchangeStddevOrderBy = {
  id?: OrderBy
  move_effect_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveeffectchangeStddevPopOrderBy = {
  id?: OrderBy
  move_effect_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveeffectchangeStddevSampOrderBy = {
  id?: OrderBy
  move_effect_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveeffectchangeSumOrderBy = {
  id?: OrderBy
  move_effect_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveeffectchangeVarPopOrderBy = {
  id?: OrderBy
  move_effect_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveeffectchangeVarSampOrderBy = {
  id?: OrderBy
  move_effect_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveeffectchangeVarianceOrderBy = {
  id?: OrderBy
  move_effect_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveflavortextAggregateOrderBy = {
  avg?: PokemonV2MoveflavortextAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MoveflavortextMaxOrderBy
  min?: PokemonV2MoveflavortextMinOrderBy
  stddev?: PokemonV2MoveflavortextStddevOrderBy
  stddev_pop?: PokemonV2MoveflavortextStddevPopOrderBy
  stddev_samp?: PokemonV2MoveflavortextStddevSampOrderBy
  sum?: PokemonV2MoveflavortextSumOrderBy
  var_pop?: PokemonV2MoveflavortextVarPopOrderBy
  var_samp?: PokemonV2MoveflavortextVarSampOrderBy
  variance?: PokemonV2MoveflavortextVarianceOrderBy
}
export type PokemonV2MoveflavortextAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveflavortextMaxOrderBy = {
  flavor_text?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveflavortextMinOrderBy = {
  flavor_text?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveflavortextStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveflavortextStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveflavortextStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveflavortextSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveflavortextVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveflavortextVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveflavortextVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokedexversiongroupAggregateOrderBy = {
  avg?: PokemonV2PokedexversiongroupAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokedexversiongroupMaxOrderBy
  min?: PokemonV2PokedexversiongroupMinOrderBy
  stddev?: PokemonV2PokedexversiongroupStddevOrderBy
  stddev_pop?: PokemonV2PokedexversiongroupStddevPopOrderBy
  stddev_samp?: PokemonV2PokedexversiongroupStddevSampOrderBy
  sum?: PokemonV2PokedexversiongroupSumOrderBy
  var_pop?: PokemonV2PokedexversiongroupVarPopOrderBy
  var_samp?: PokemonV2PokedexversiongroupVarSampOrderBy
  variance?: PokemonV2PokedexversiongroupVarianceOrderBy
}
export type PokemonV2PokedexversiongroupAvgOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokedexversiongroupMaxOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokedexversiongroupMinOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokedexversiongroupStddevOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokedexversiongroupStddevPopOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokedexversiongroupStddevSampOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokedexversiongroupSumOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokedexversiongroupVarPopOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokedexversiongroupVarSampOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokedexversiongroupVarianceOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonformAggregateOrderBy = {
  avg?: PokemonV2PokemonformAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonformMaxOrderBy
  min?: PokemonV2PokemonformMinOrderBy
  stddev?: PokemonV2PokemonformStddevOrderBy
  stddev_pop?: PokemonV2PokemonformStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonformStddevSampOrderBy
  sum?: PokemonV2PokemonformSumOrderBy
  var_pop?: PokemonV2PokemonformVarPopOrderBy
  var_samp?: PokemonV2PokemonformVarSampOrderBy
  variance?: PokemonV2PokemonformVarianceOrderBy
}
export type PokemonV2PokemonformAvgOrderBy = {
  form_order?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonformMaxOrderBy = {
  form_name?: OrderBy
  form_order?: OrderBy
  id?: OrderBy
  name?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonformMinOrderBy = {
  form_name?: OrderBy
  form_order?: OrderBy
  id?: OrderBy
  name?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonformStddevOrderBy = {
  form_order?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonformStddevPopOrderBy = {
  form_order?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonformStddevSampOrderBy = {
  form_order?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonformSumOrderBy = {
  form_order?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonformVarPopOrderBy = {
  form_order?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonformVarSampOrderBy = {
  form_order?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonformVarianceOrderBy = {
  form_order?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonmoveAggregateOrderBy = {
  avg?: PokemonV2PokemonmoveAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonmoveMaxOrderBy
  min?: PokemonV2PokemonmoveMinOrderBy
  stddev?: PokemonV2PokemonmoveStddevOrderBy
  stddev_pop?: PokemonV2PokemonmoveStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonmoveStddevSampOrderBy
  sum?: PokemonV2PokemonmoveSumOrderBy
  var_pop?: PokemonV2PokemonmoveVarPopOrderBy
  var_samp?: PokemonV2PokemonmoveVarSampOrderBy
  variance?: PokemonV2PokemonmoveVarianceOrderBy
}
export type PokemonV2PokemonmoveAvgOrderBy = {
  id?: OrderBy
  level?: OrderBy
  move_id?: OrderBy
  move_learn_method_id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonmoveMaxOrderBy = {
  id?: OrderBy
  level?: OrderBy
  move_id?: OrderBy
  move_learn_method_id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonmoveMinOrderBy = {
  id?: OrderBy
  level?: OrderBy
  move_id?: OrderBy
  move_learn_method_id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonmoveStddevOrderBy = {
  id?: OrderBy
  level?: OrderBy
  move_id?: OrderBy
  move_learn_method_id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonmoveStddevPopOrderBy = {
  id?: OrderBy
  level?: OrderBy
  move_id?: OrderBy
  move_learn_method_id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonmoveStddevSampOrderBy = {
  id?: OrderBy
  level?: OrderBy
  move_id?: OrderBy
  move_learn_method_id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonmoveSumOrderBy = {
  id?: OrderBy
  level?: OrderBy
  move_id?: OrderBy
  move_learn_method_id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonmoveVarPopOrderBy = {
  id?: OrderBy
  level?: OrderBy
  move_id?: OrderBy
  move_learn_method_id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonmoveVarSampOrderBy = {
  id?: OrderBy
  level?: OrderBy
  move_id?: OrderBy
  move_learn_method_id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonmoveVarianceOrderBy = {
  id?: OrderBy
  level?: OrderBy
  move_id?: OrderBy
  move_learn_method_id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupmovelearnmethodAggregateOrderBy = {
  avg?: PokemonV2VersiongroupmovelearnmethodAvgOrderBy
  count?: OrderBy
  max?: PokemonV2VersiongroupmovelearnmethodMaxOrderBy
  min?: PokemonV2VersiongroupmovelearnmethodMinOrderBy
  stddev?: PokemonV2VersiongroupmovelearnmethodStddevOrderBy
  stddev_pop?: PokemonV2VersiongroupmovelearnmethodStddevPopOrderBy
  stddev_samp?: PokemonV2VersiongroupmovelearnmethodStddevSampOrderBy
  sum?: PokemonV2VersiongroupmovelearnmethodSumOrderBy
  var_pop?: PokemonV2VersiongroupmovelearnmethodVarPopOrderBy
  var_samp?: PokemonV2VersiongroupmovelearnmethodVarSampOrderBy
  variance?: PokemonV2VersiongroupmovelearnmethodVarianceOrderBy
}
export type PokemonV2VersiongroupmovelearnmethodAvgOrderBy = {
  id?: OrderBy
  move_learn_method_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupmovelearnmethodMaxOrderBy = {
  id?: OrderBy
  move_learn_method_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupmovelearnmethodMinOrderBy = {
  id?: OrderBy
  move_learn_method_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupmovelearnmethodStddevOrderBy = {
  id?: OrderBy
  move_learn_method_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupmovelearnmethodStddevPopOrderBy = {
  id?: OrderBy
  move_learn_method_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupmovelearnmethodStddevSampOrderBy = {
  id?: OrderBy
  move_learn_method_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupmovelearnmethodSumOrderBy = {
  id?: OrderBy
  move_learn_method_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupmovelearnmethodVarPopOrderBy = {
  id?: OrderBy
  move_learn_method_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupmovelearnmethodVarSampOrderBy = {
  id?: OrderBy
  move_learn_method_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersiongroupmovelearnmethodVarianceOrderBy = {
  id?: OrderBy
  move_learn_method_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersionAggregateOrderBy = {
  avg?: PokemonV2VersionAvgOrderBy
  count?: OrderBy
  max?: PokemonV2VersionMaxOrderBy
  min?: PokemonV2VersionMinOrderBy
  stddev?: PokemonV2VersionStddevOrderBy
  stddev_pop?: PokemonV2VersionStddevPopOrderBy
  stddev_samp?: PokemonV2VersionStddevSampOrderBy
  sum?: PokemonV2VersionSumOrderBy
  var_pop?: PokemonV2VersionVarPopOrderBy
  var_samp?: PokemonV2VersionVarSampOrderBy
  variance?: PokemonV2VersionVarianceOrderBy
}
export type PokemonV2VersionAvgOrderBy = {
  id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersionMaxOrderBy = {
  id?: OrderBy
  name?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersionMinOrderBy = {
  id?: OrderBy
  name?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersionStddevOrderBy = {
  id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersionStddevPopOrderBy = {
  id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersionStddevSampOrderBy = {
  id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersionSumOrderBy = {
  id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersionVarPopOrderBy = {
  id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersionVarSampOrderBy = {
  id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2VersionVarianceOrderBy = {
  id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2AbilitychangeeffecttextOrderBy = {
  ability_change_id?: OrderBy
  effect?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  pokemon_v2_abilitychange?: PokemonV2AbilitychangeOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2LanguageOrderBy = {
  id?: OrderBy
  iso3166?: OrderBy
  iso639?: OrderBy
  name?: OrderBy
  official?: OrderBy
  order?: OrderBy
  pokemonV2LanguagenamesByLocalLanguageId_aggregate?: PokemonV2LanguagenameAggregateOrderBy
  pokemon_v2_abilitychangeeffecttexts_aggregate?: PokemonV2AbilitychangeeffecttextAggregateOrderBy
  pokemon_v2_abilityeffecttexts_aggregate?: PokemonV2AbilityeffecttextAggregateOrderBy
  pokemon_v2_abilityflavortexts_aggregate?: PokemonV2AbilityflavortextAggregateOrderBy
  pokemon_v2_abilitynames_aggregate?: PokemonV2AbilitynameAggregateOrderBy
  pokemon_v2_berryfirmnessnames_aggregate?: PokemonV2BerryfirmnessnameAggregateOrderBy
  pokemon_v2_berryflavornames_aggregate?: PokemonV2BerryflavornameAggregateOrderBy
  pokemon_v2_characteristicdescriptions_aggregate?: PokemonV2CharacteristicdescriptionAggregateOrderBy
  pokemon_v2_contesteffecteffecttexts_aggregate?: PokemonV2ContesteffecteffecttextAggregateOrderBy
  pokemon_v2_contesteffectflavortexts_aggregate?: PokemonV2ContesteffectflavortextAggregateOrderBy
  pokemon_v2_contesttypenames_aggregate?: PokemonV2ContesttypenameAggregateOrderBy
  pokemon_v2_egggroupnames_aggregate?: PokemonV2EgggroupnameAggregateOrderBy
  pokemon_v2_encounterconditionnames_aggregate?: PokemonV2EncounterconditionnameAggregateOrderBy
  pokemon_v2_encounterconditionvaluenames_aggregate?: PokemonV2EncounterconditionvaluenameAggregateOrderBy
  pokemon_v2_encountermethodnames_aggregate?: PokemonV2EncountermethodnameAggregateOrderBy
  pokemon_v2_evolutiontriggernames_aggregate?: PokemonV2EvolutiontriggernameAggregateOrderBy
  pokemon_v2_generationnames_aggregate?: PokemonV2GenerationnameAggregateOrderBy
  pokemon_v2_growthratedescriptions_aggregate?: PokemonV2GrowthratedescriptionAggregateOrderBy
  pokemon_v2_itemattributedescriptions_aggregate?: PokemonV2ItemattributedescriptionAggregateOrderBy
  pokemon_v2_itemattributenames_aggregate?: PokemonV2ItemattributenameAggregateOrderBy
  pokemon_v2_itemcategorynames_aggregate?: PokemonV2ItemcategorynameAggregateOrderBy
  pokemon_v2_itemeffecttexts_aggregate?: PokemonV2ItemeffecttextAggregateOrderBy
  pokemon_v2_itemflavortexts_aggregate?: PokemonV2ItemflavortextAggregateOrderBy
  pokemon_v2_itemflingeffecteffecttexts_aggregate?: PokemonV2ItemflingeffecteffecttextAggregateOrderBy
  pokemon_v2_itemnames_aggregate?: PokemonV2ItemnameAggregateOrderBy
  pokemon_v2_itempocketnames_aggregate?: PokemonV2ItempocketnameAggregateOrderBy
  pokemon_v2_languagenames_aggregate?: PokemonV2LanguagenameAggregateOrderBy
  pokemon_v2_locationareanames_aggregate?: PokemonV2LocationareanameAggregateOrderBy
  pokemon_v2_locationnames_aggregate?: PokemonV2LocationnameAggregateOrderBy
  pokemon_v2_moveattributedescriptions_aggregate?: PokemonV2MoveattributedescriptionAggregateOrderBy
  pokemon_v2_moveattributenames_aggregate?: PokemonV2MoveattributenameAggregateOrderBy
  pokemon_v2_movebattlestylenames_aggregate?: PokemonV2MovebattlestylenameAggregateOrderBy
  pokemon_v2_movedamageclassdescriptions_aggregate?: PokemonV2MovedamageclassdescriptionAggregateOrderBy
  pokemon_v2_movedamageclassnames_aggregate?: PokemonV2MovedamageclassnameAggregateOrderBy
  pokemon_v2_moveeffectchangeeffecttexts_aggregate?: PokemonV2MoveeffectchangeeffecttextAggregateOrderBy
  pokemon_v2_moveeffecteffecttexts_aggregate?: PokemonV2MoveeffecteffecttextAggregateOrderBy
  pokemon_v2_moveflavortexts_aggregate?: PokemonV2MoveflavortextAggregateOrderBy
  pokemon_v2_movelearnmethoddescriptions_aggregate?: PokemonV2MovelearnmethoddescriptionAggregateOrderBy
  pokemon_v2_movelearnmethodnames_aggregate?: PokemonV2MovelearnmethodnameAggregateOrderBy
  pokemon_v2_movemetaailmentnames_aggregate?: PokemonV2MovemetaailmentnameAggregateOrderBy
  pokemon_v2_movemetacategorydescriptions_aggregate?: PokemonV2MovemetacategorydescriptionAggregateOrderBy
  pokemon_v2_movenames_aggregate?: PokemonV2MovenameAggregateOrderBy
  pokemon_v2_movetargetdescriptions_aggregate?: PokemonV2MovetargetdescriptionAggregateOrderBy
  pokemon_v2_movetargetnames_aggregate?: PokemonV2MovetargetnameAggregateOrderBy
  pokemon_v2_naturenames_aggregate?: PokemonV2NaturenameAggregateOrderBy
  pokemon_v2_palparkareanames_aggregate?: PokemonV2PalparkareanameAggregateOrderBy
  pokemon_v2_pokeathlonstatnames_aggregate?: PokemonV2PokeathlonstatnameAggregateOrderBy
  pokemon_v2_pokedexdescriptions_aggregate?: PokemonV2PokedexdescriptionAggregateOrderBy
  pokemon_v2_pokedexnames_aggregate?: PokemonV2PokedexnameAggregateOrderBy
  pokemon_v2_pokemoncolornames_aggregate?: PokemonV2PokemoncolornameAggregateOrderBy
  pokemon_v2_pokemonformnames_aggregate?: PokemonV2PokemonformnameAggregateOrderBy
  pokemon_v2_pokemonhabitatnames_aggregate?: PokemonV2PokemonhabitatnameAggregateOrderBy
  pokemon_v2_pokemonshapenames_aggregate?: PokemonV2PokemonshapenameAggregateOrderBy
  pokemon_v2_pokemonspeciesdescriptions_aggregate?: PokemonV2PokemonspeciesdescriptionAggregateOrderBy
  pokemon_v2_pokemonspeciesflavortexts_aggregate?: PokemonV2PokemonspeciesflavortextAggregateOrderBy
  pokemon_v2_pokemonspeciesnames_aggregate?: PokemonV2PokemonspeciesnameAggregateOrderBy
  pokemon_v2_regionnames_aggregate?: PokemonV2RegionnameAggregateOrderBy
  pokemon_v2_statnames_aggregate?: PokemonV2StatnameAggregateOrderBy
  pokemon_v2_supercontesteffectflavortexts_aggregate?: PokemonV2SupercontesteffectflavortextAggregateOrderBy
  pokemon_v2_typenames_aggregate?: PokemonV2TypenameAggregateOrderBy
  pokemon_v2_versionnames_aggregate?: PokemonV2VersionnameAggregateOrderBy
}
export type PokemonV2LanguagenameAggregateOrderBy = {
  avg?: PokemonV2LanguagenameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2LanguagenameMaxOrderBy
  min?: PokemonV2LanguagenameMinOrderBy
  stddev?: PokemonV2LanguagenameStddevOrderBy
  stddev_pop?: PokemonV2LanguagenameStddevPopOrderBy
  stddev_samp?: PokemonV2LanguagenameStddevSampOrderBy
  sum?: PokemonV2LanguagenameSumOrderBy
  var_pop?: PokemonV2LanguagenameVarPopOrderBy
  var_samp?: PokemonV2LanguagenameVarSampOrderBy
  variance?: PokemonV2LanguagenameVarianceOrderBy
}
export type PokemonV2LanguagenameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  local_language_id?: OrderBy
}
export type PokemonV2LanguagenameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  local_language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2LanguagenameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  local_language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2LanguagenameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  local_language_id?: OrderBy
}
export type PokemonV2LanguagenameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  local_language_id?: OrderBy
}
export type PokemonV2LanguagenameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  local_language_id?: OrderBy
}
export type PokemonV2LanguagenameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  local_language_id?: OrderBy
}
export type PokemonV2LanguagenameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  local_language_id?: OrderBy
}
export type PokemonV2LanguagenameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  local_language_id?: OrderBy
}
export type PokemonV2LanguagenameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  local_language_id?: OrderBy
}
export type PokemonV2BerryfirmnessnameAggregateOrderBy = {
  avg?: PokemonV2BerryfirmnessnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2BerryfirmnessnameMaxOrderBy
  min?: PokemonV2BerryfirmnessnameMinOrderBy
  stddev?: PokemonV2BerryfirmnessnameStddevOrderBy
  stddev_pop?: PokemonV2BerryfirmnessnameStddevPopOrderBy
  stddev_samp?: PokemonV2BerryfirmnessnameStddevSampOrderBy
  sum?: PokemonV2BerryfirmnessnameSumOrderBy
  var_pop?: PokemonV2BerryfirmnessnameVarPopOrderBy
  var_samp?: PokemonV2BerryfirmnessnameVarSampOrderBy
  variance?: PokemonV2BerryfirmnessnameVarianceOrderBy
}
export type PokemonV2BerryfirmnessnameAvgOrderBy = {
  berry_firmness_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2BerryfirmnessnameMaxOrderBy = {
  berry_firmness_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2BerryfirmnessnameMinOrderBy = {
  berry_firmness_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2BerryfirmnessnameStddevOrderBy = {
  berry_firmness_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2BerryfirmnessnameStddevPopOrderBy = {
  berry_firmness_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2BerryfirmnessnameStddevSampOrderBy = {
  berry_firmness_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2BerryfirmnessnameSumOrderBy = {
  berry_firmness_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2BerryfirmnessnameVarPopOrderBy = {
  berry_firmness_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2BerryfirmnessnameVarSampOrderBy = {
  berry_firmness_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2BerryfirmnessnameVarianceOrderBy = {
  berry_firmness_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2BerryflavornameAggregateOrderBy = {
  avg?: PokemonV2BerryflavornameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2BerryflavornameMaxOrderBy
  min?: PokemonV2BerryflavornameMinOrderBy
  stddev?: PokemonV2BerryflavornameStddevOrderBy
  stddev_pop?: PokemonV2BerryflavornameStddevPopOrderBy
  stddev_samp?: PokemonV2BerryflavornameStddevSampOrderBy
  sum?: PokemonV2BerryflavornameSumOrderBy
  var_pop?: PokemonV2BerryflavornameVarPopOrderBy
  var_samp?: PokemonV2BerryflavornameVarSampOrderBy
  variance?: PokemonV2BerryflavornameVarianceOrderBy
}
export type PokemonV2BerryflavornameAvgOrderBy = {
  berry_flavor_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2BerryflavornameMaxOrderBy = {
  berry_flavor_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2BerryflavornameMinOrderBy = {
  berry_flavor_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2BerryflavornameStddevOrderBy = {
  berry_flavor_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2BerryflavornameStddevPopOrderBy = {
  berry_flavor_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2BerryflavornameStddevSampOrderBy = {
  berry_flavor_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2BerryflavornameSumOrderBy = {
  berry_flavor_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2BerryflavornameVarPopOrderBy = {
  berry_flavor_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2BerryflavornameVarSampOrderBy = {
  berry_flavor_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2BerryflavornameVarianceOrderBy = {
  berry_flavor_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2CharacteristicdescriptionAggregateOrderBy = {
  avg?: PokemonV2CharacteristicdescriptionAvgOrderBy
  count?: OrderBy
  max?: PokemonV2CharacteristicdescriptionMaxOrderBy
  min?: PokemonV2CharacteristicdescriptionMinOrderBy
  stddev?: PokemonV2CharacteristicdescriptionStddevOrderBy
  stddev_pop?: PokemonV2CharacteristicdescriptionStddevPopOrderBy
  stddev_samp?: PokemonV2CharacteristicdescriptionStddevSampOrderBy
  sum?: PokemonV2CharacteristicdescriptionSumOrderBy
  var_pop?: PokemonV2CharacteristicdescriptionVarPopOrderBy
  var_samp?: PokemonV2CharacteristicdescriptionVarSampOrderBy
  variance?: PokemonV2CharacteristicdescriptionVarianceOrderBy
}
export type PokemonV2CharacteristicdescriptionAvgOrderBy = {
  characteristic_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2CharacteristicdescriptionMaxOrderBy = {
  characteristic_id?: OrderBy
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2CharacteristicdescriptionMinOrderBy = {
  characteristic_id?: OrderBy
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2CharacteristicdescriptionStddevOrderBy = {
  characteristic_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2CharacteristicdescriptionStddevPopOrderBy = {
  characteristic_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2CharacteristicdescriptionStddevSampOrderBy = {
  characteristic_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2CharacteristicdescriptionSumOrderBy = {
  characteristic_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2CharacteristicdescriptionVarPopOrderBy = {
  characteristic_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2CharacteristicdescriptionVarSampOrderBy = {
  characteristic_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2CharacteristicdescriptionVarianceOrderBy = {
  characteristic_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffecteffecttextAggregateOrderBy = {
  avg?: PokemonV2ContesteffecteffecttextAvgOrderBy
  count?: OrderBy
  max?: PokemonV2ContesteffecteffecttextMaxOrderBy
  min?: PokemonV2ContesteffecteffecttextMinOrderBy
  stddev?: PokemonV2ContesteffecteffecttextStddevOrderBy
  stddev_pop?: PokemonV2ContesteffecteffecttextStddevPopOrderBy
  stddev_samp?: PokemonV2ContesteffecteffecttextStddevSampOrderBy
  sum?: PokemonV2ContesteffecteffecttextSumOrderBy
  var_pop?: PokemonV2ContesteffecteffecttextVarPopOrderBy
  var_samp?: PokemonV2ContesteffecteffecttextVarSampOrderBy
  variance?: PokemonV2ContesteffecteffecttextVarianceOrderBy
}
export type PokemonV2ContesteffecteffecttextAvgOrderBy = {
  contest_effect_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffecteffecttextMaxOrderBy = {
  contest_effect_id?: OrderBy
  effect?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffecteffecttextMinOrderBy = {
  contest_effect_id?: OrderBy
  effect?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffecteffecttextStddevOrderBy = {
  contest_effect_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffecteffecttextStddevPopOrderBy = {
  contest_effect_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffecteffecttextStddevSampOrderBy = {
  contest_effect_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffecteffecttextSumOrderBy = {
  contest_effect_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffecteffecttextVarPopOrderBy = {
  contest_effect_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffecteffecttextVarSampOrderBy = {
  contest_effect_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffecteffecttextVarianceOrderBy = {
  contest_effect_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffectflavortextAggregateOrderBy = {
  avg?: PokemonV2ContesteffectflavortextAvgOrderBy
  count?: OrderBy
  max?: PokemonV2ContesteffectflavortextMaxOrderBy
  min?: PokemonV2ContesteffectflavortextMinOrderBy
  stddev?: PokemonV2ContesteffectflavortextStddevOrderBy
  stddev_pop?: PokemonV2ContesteffectflavortextStddevPopOrderBy
  stddev_samp?: PokemonV2ContesteffectflavortextStddevSampOrderBy
  sum?: PokemonV2ContesteffectflavortextSumOrderBy
  var_pop?: PokemonV2ContesteffectflavortextVarPopOrderBy
  var_samp?: PokemonV2ContesteffectflavortextVarSampOrderBy
  variance?: PokemonV2ContesteffectflavortextVarianceOrderBy
}
export type PokemonV2ContesteffectflavortextAvgOrderBy = {
  contest_effect_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffectflavortextMaxOrderBy = {
  contest_effect_id?: OrderBy
  flavor_text?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffectflavortextMinOrderBy = {
  contest_effect_id?: OrderBy
  flavor_text?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffectflavortextStddevOrderBy = {
  contest_effect_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffectflavortextStddevPopOrderBy = {
  contest_effect_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffectflavortextStddevSampOrderBy = {
  contest_effect_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffectflavortextSumOrderBy = {
  contest_effect_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffectflavortextVarPopOrderBy = {
  contest_effect_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffectflavortextVarSampOrderBy = {
  contest_effect_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesteffectflavortextVarianceOrderBy = {
  contest_effect_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesttypenameAggregateOrderBy = {
  avg?: PokemonV2ContesttypenameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2ContesttypenameMaxOrderBy
  min?: PokemonV2ContesttypenameMinOrderBy
  stddev?: PokemonV2ContesttypenameStddevOrderBy
  stddev_pop?: PokemonV2ContesttypenameStddevPopOrderBy
  stddev_samp?: PokemonV2ContesttypenameStddevSampOrderBy
  sum?: PokemonV2ContesttypenameSumOrderBy
  var_pop?: PokemonV2ContesttypenameVarPopOrderBy
  var_samp?: PokemonV2ContesttypenameVarSampOrderBy
  variance?: PokemonV2ContesttypenameVarianceOrderBy
}
export type PokemonV2ContesttypenameAvgOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesttypenameMaxOrderBy = {
  color?: OrderBy
  contest_type_id?: OrderBy
  flavor?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2ContesttypenameMinOrderBy = {
  color?: OrderBy
  contest_type_id?: OrderBy
  flavor?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2ContesttypenameStddevOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesttypenameStddevPopOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesttypenameStddevSampOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesttypenameSumOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesttypenameVarPopOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesttypenameVarSampOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ContesttypenameVarianceOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EgggroupnameAggregateOrderBy = {
  avg?: PokemonV2EgggroupnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2EgggroupnameMaxOrderBy
  min?: PokemonV2EgggroupnameMinOrderBy
  stddev?: PokemonV2EgggroupnameStddevOrderBy
  stddev_pop?: PokemonV2EgggroupnameStddevPopOrderBy
  stddev_samp?: PokemonV2EgggroupnameStddevSampOrderBy
  sum?: PokemonV2EgggroupnameSumOrderBy
  var_pop?: PokemonV2EgggroupnameVarPopOrderBy
  var_samp?: PokemonV2EgggroupnameVarSampOrderBy
  variance?: PokemonV2EgggroupnameVarianceOrderBy
}
export type PokemonV2EgggroupnameAvgOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EgggroupnameMaxOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2EgggroupnameMinOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2EgggroupnameStddevOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EgggroupnameStddevPopOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EgggroupnameStddevSampOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EgggroupnameSumOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EgggroupnameVarPopOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EgggroupnameVarSampOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EgggroupnameVarianceOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncounterconditionnameAggregateOrderBy = {
  avg?: PokemonV2EncounterconditionnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2EncounterconditionnameMaxOrderBy
  min?: PokemonV2EncounterconditionnameMinOrderBy
  stddev?: PokemonV2EncounterconditionnameStddevOrderBy
  stddev_pop?: PokemonV2EncounterconditionnameStddevPopOrderBy
  stddev_samp?: PokemonV2EncounterconditionnameStddevSampOrderBy
  sum?: PokemonV2EncounterconditionnameSumOrderBy
  var_pop?: PokemonV2EncounterconditionnameVarPopOrderBy
  var_samp?: PokemonV2EncounterconditionnameVarSampOrderBy
  variance?: PokemonV2EncounterconditionnameVarianceOrderBy
}
export type PokemonV2EncounterconditionnameAvgOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncounterconditionnameMaxOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2EncounterconditionnameMinOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2EncounterconditionnameStddevOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncounterconditionnameStddevPopOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncounterconditionnameStddevSampOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncounterconditionnameSumOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncounterconditionnameVarPopOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncounterconditionnameVarSampOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncounterconditionnameVarianceOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncounterconditionvaluenameAggregateOrderBy = {
  avg?: PokemonV2EncounterconditionvaluenameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2EncounterconditionvaluenameMaxOrderBy
  min?: PokemonV2EncounterconditionvaluenameMinOrderBy
  stddev?: PokemonV2EncounterconditionvaluenameStddevOrderBy
  stddev_pop?: PokemonV2EncounterconditionvaluenameStddevPopOrderBy
  stddev_samp?: PokemonV2EncounterconditionvaluenameStddevSampOrderBy
  sum?: PokemonV2EncounterconditionvaluenameSumOrderBy
  var_pop?: PokemonV2EncounterconditionvaluenameVarPopOrderBy
  var_samp?: PokemonV2EncounterconditionvaluenameVarSampOrderBy
  variance?: PokemonV2EncounterconditionvaluenameVarianceOrderBy
}
export type PokemonV2EncounterconditionvaluenameAvgOrderBy = {
  encounter_condition_value_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncounterconditionvaluenameMaxOrderBy = {
  encounter_condition_value_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2EncounterconditionvaluenameMinOrderBy = {
  encounter_condition_value_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2EncounterconditionvaluenameStddevOrderBy = {
  encounter_condition_value_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncounterconditionvaluenameStddevPopOrderBy = {
  encounter_condition_value_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncounterconditionvaluenameStddevSampOrderBy = {
  encounter_condition_value_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncounterconditionvaluenameSumOrderBy = {
  encounter_condition_value_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncounterconditionvaluenameVarPopOrderBy = {
  encounter_condition_value_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncounterconditionvaluenameVarSampOrderBy = {
  encounter_condition_value_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncounterconditionvaluenameVarianceOrderBy = {
  encounter_condition_value_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncountermethodnameAggregateOrderBy = {
  avg?: PokemonV2EncountermethodnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2EncountermethodnameMaxOrderBy
  min?: PokemonV2EncountermethodnameMinOrderBy
  stddev?: PokemonV2EncountermethodnameStddevOrderBy
  stddev_pop?: PokemonV2EncountermethodnameStddevPopOrderBy
  stddev_samp?: PokemonV2EncountermethodnameStddevSampOrderBy
  sum?: PokemonV2EncountermethodnameSumOrderBy
  var_pop?: PokemonV2EncountermethodnameVarPopOrderBy
  var_samp?: PokemonV2EncountermethodnameVarSampOrderBy
  variance?: PokemonV2EncountermethodnameVarianceOrderBy
}
export type PokemonV2EncountermethodnameAvgOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncountermethodnameMaxOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2EncountermethodnameMinOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2EncountermethodnameStddevOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncountermethodnameStddevPopOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncountermethodnameStddevSampOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncountermethodnameSumOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncountermethodnameVarPopOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncountermethodnameVarSampOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EncountermethodnameVarianceOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EvolutiontriggernameAggregateOrderBy = {
  avg?: PokemonV2EvolutiontriggernameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2EvolutiontriggernameMaxOrderBy
  min?: PokemonV2EvolutiontriggernameMinOrderBy
  stddev?: PokemonV2EvolutiontriggernameStddevOrderBy
  stddev_pop?: PokemonV2EvolutiontriggernameStddevPopOrderBy
  stddev_samp?: PokemonV2EvolutiontriggernameStddevSampOrderBy
  sum?: PokemonV2EvolutiontriggernameSumOrderBy
  var_pop?: PokemonV2EvolutiontriggernameVarPopOrderBy
  var_samp?: PokemonV2EvolutiontriggernameVarSampOrderBy
  variance?: PokemonV2EvolutiontriggernameVarianceOrderBy
}
export type PokemonV2EvolutiontriggernameAvgOrderBy = {
  evolution_trigger_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EvolutiontriggernameMaxOrderBy = {
  evolution_trigger_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2EvolutiontriggernameMinOrderBy = {
  evolution_trigger_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2EvolutiontriggernameStddevOrderBy = {
  evolution_trigger_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EvolutiontriggernameStddevPopOrderBy = {
  evolution_trigger_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EvolutiontriggernameStddevSampOrderBy = {
  evolution_trigger_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EvolutiontriggernameSumOrderBy = {
  evolution_trigger_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EvolutiontriggernameVarPopOrderBy = {
  evolution_trigger_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EvolutiontriggernameVarSampOrderBy = {
  evolution_trigger_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2EvolutiontriggernameVarianceOrderBy = {
  evolution_trigger_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2GrowthratedescriptionAggregateOrderBy = {
  avg?: PokemonV2GrowthratedescriptionAvgOrderBy
  count?: OrderBy
  max?: PokemonV2GrowthratedescriptionMaxOrderBy
  min?: PokemonV2GrowthratedescriptionMinOrderBy
  stddev?: PokemonV2GrowthratedescriptionStddevOrderBy
  stddev_pop?: PokemonV2GrowthratedescriptionStddevPopOrderBy
  stddev_samp?: PokemonV2GrowthratedescriptionStddevSampOrderBy
  sum?: PokemonV2GrowthratedescriptionSumOrderBy
  var_pop?: PokemonV2GrowthratedescriptionVarPopOrderBy
  var_samp?: PokemonV2GrowthratedescriptionVarSampOrderBy
  variance?: PokemonV2GrowthratedescriptionVarianceOrderBy
}
export type PokemonV2GrowthratedescriptionAvgOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2GrowthratedescriptionMaxOrderBy = {
  description?: OrderBy
  growth_rate_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2GrowthratedescriptionMinOrderBy = {
  description?: OrderBy
  growth_rate_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2GrowthratedescriptionStddevOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2GrowthratedescriptionStddevPopOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2GrowthratedescriptionStddevSampOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2GrowthratedescriptionSumOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2GrowthratedescriptionVarPopOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2GrowthratedescriptionVarSampOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2GrowthratedescriptionVarianceOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemattributedescriptionAggregateOrderBy = {
  avg?: PokemonV2ItemattributedescriptionAvgOrderBy
  count?: OrderBy
  max?: PokemonV2ItemattributedescriptionMaxOrderBy
  min?: PokemonV2ItemattributedescriptionMinOrderBy
  stddev?: PokemonV2ItemattributedescriptionStddevOrderBy
  stddev_pop?: PokemonV2ItemattributedescriptionStddevPopOrderBy
  stddev_samp?: PokemonV2ItemattributedescriptionStddevSampOrderBy
  sum?: PokemonV2ItemattributedescriptionSumOrderBy
  var_pop?: PokemonV2ItemattributedescriptionVarPopOrderBy
  var_samp?: PokemonV2ItemattributedescriptionVarSampOrderBy
  variance?: PokemonV2ItemattributedescriptionVarianceOrderBy
}
export type PokemonV2ItemattributedescriptionAvgOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemattributedescriptionMaxOrderBy = {
  description?: OrderBy
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemattributedescriptionMinOrderBy = {
  description?: OrderBy
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemattributedescriptionStddevOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemattributedescriptionStddevPopOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemattributedescriptionStddevSampOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemattributedescriptionSumOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemattributedescriptionVarPopOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemattributedescriptionVarSampOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemattributedescriptionVarianceOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemattributenameAggregateOrderBy = {
  avg?: PokemonV2ItemattributenameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2ItemattributenameMaxOrderBy
  min?: PokemonV2ItemattributenameMinOrderBy
  stddev?: PokemonV2ItemattributenameStddevOrderBy
  stddev_pop?: PokemonV2ItemattributenameStddevPopOrderBy
  stddev_samp?: PokemonV2ItemattributenameStddevSampOrderBy
  sum?: PokemonV2ItemattributenameSumOrderBy
  var_pop?: PokemonV2ItemattributenameVarPopOrderBy
  var_samp?: PokemonV2ItemattributenameVarSampOrderBy
  variance?: PokemonV2ItemattributenameVarianceOrderBy
}
export type PokemonV2ItemattributenameAvgOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemattributenameMaxOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2ItemattributenameMinOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2ItemattributenameStddevOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemattributenameStddevPopOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemattributenameStddevSampOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemattributenameSumOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemattributenameVarPopOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemattributenameVarSampOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemattributenameVarianceOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemcategorynameAggregateOrderBy = {
  avg?: PokemonV2ItemcategorynameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2ItemcategorynameMaxOrderBy
  min?: PokemonV2ItemcategorynameMinOrderBy
  stddev?: PokemonV2ItemcategorynameStddevOrderBy
  stddev_pop?: PokemonV2ItemcategorynameStddevPopOrderBy
  stddev_samp?: PokemonV2ItemcategorynameStddevSampOrderBy
  sum?: PokemonV2ItemcategorynameSumOrderBy
  var_pop?: PokemonV2ItemcategorynameVarPopOrderBy
  var_samp?: PokemonV2ItemcategorynameVarSampOrderBy
  variance?: PokemonV2ItemcategorynameVarianceOrderBy
}
export type PokemonV2ItemcategorynameAvgOrderBy = {
  id?: OrderBy
  item_category_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemcategorynameMaxOrderBy = {
  id?: OrderBy
  item_category_id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2ItemcategorynameMinOrderBy = {
  id?: OrderBy
  item_category_id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2ItemcategorynameStddevOrderBy = {
  id?: OrderBy
  item_category_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemcategorynameStddevPopOrderBy = {
  id?: OrderBy
  item_category_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemcategorynameStddevSampOrderBy = {
  id?: OrderBy
  item_category_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemcategorynameSumOrderBy = {
  id?: OrderBy
  item_category_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemcategorynameVarPopOrderBy = {
  id?: OrderBy
  item_category_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemcategorynameVarSampOrderBy = {
  id?: OrderBy
  item_category_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemcategorynameVarianceOrderBy = {
  id?: OrderBy
  item_category_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemeffecttextAggregateOrderBy = {
  avg?: PokemonV2ItemeffecttextAvgOrderBy
  count?: OrderBy
  max?: PokemonV2ItemeffecttextMaxOrderBy
  min?: PokemonV2ItemeffecttextMinOrderBy
  stddev?: PokemonV2ItemeffecttextStddevOrderBy
  stddev_pop?: PokemonV2ItemeffecttextStddevPopOrderBy
  stddev_samp?: PokemonV2ItemeffecttextStddevSampOrderBy
  sum?: PokemonV2ItemeffecttextSumOrderBy
  var_pop?: PokemonV2ItemeffecttextVarPopOrderBy
  var_samp?: PokemonV2ItemeffecttextVarSampOrderBy
  variance?: PokemonV2ItemeffecttextVarianceOrderBy
}
export type PokemonV2ItemeffecttextAvgOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemeffecttextMaxOrderBy = {
  effect?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
  short_effect?: OrderBy
}
export type PokemonV2ItemeffecttextMinOrderBy = {
  effect?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
  short_effect?: OrderBy
}
export type PokemonV2ItemeffecttextStddevOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemeffecttextStddevPopOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemeffecttextStddevSampOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemeffecttextSumOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemeffecttextVarPopOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemeffecttextVarSampOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemeffecttextVarianceOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemflingeffecteffecttextAggregateOrderBy = {
  avg?: PokemonV2ItemflingeffecteffecttextAvgOrderBy
  count?: OrderBy
  max?: PokemonV2ItemflingeffecteffecttextMaxOrderBy
  min?: PokemonV2ItemflingeffecteffecttextMinOrderBy
  stddev?: PokemonV2ItemflingeffecteffecttextStddevOrderBy
  stddev_pop?: PokemonV2ItemflingeffecteffecttextStddevPopOrderBy
  stddev_samp?: PokemonV2ItemflingeffecteffecttextStddevSampOrderBy
  sum?: PokemonV2ItemflingeffecteffecttextSumOrderBy
  var_pop?: PokemonV2ItemflingeffecteffecttextVarPopOrderBy
  var_samp?: PokemonV2ItemflingeffecteffecttextVarSampOrderBy
  variance?: PokemonV2ItemflingeffecteffecttextVarianceOrderBy
}
export type PokemonV2ItemflingeffecteffecttextAvgOrderBy = {
  id?: OrderBy
  item_fling_effect_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemflingeffecteffecttextMaxOrderBy = {
  effect?: OrderBy
  id?: OrderBy
  item_fling_effect_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemflingeffecteffecttextMinOrderBy = {
  effect?: OrderBy
  id?: OrderBy
  item_fling_effect_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemflingeffecteffecttextStddevOrderBy = {
  id?: OrderBy
  item_fling_effect_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemflingeffecteffecttextStddevPopOrderBy = {
  id?: OrderBy
  item_fling_effect_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemflingeffecteffecttextStddevSampOrderBy = {
  id?: OrderBy
  item_fling_effect_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemflingeffecteffecttextSumOrderBy = {
  id?: OrderBy
  item_fling_effect_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemflingeffecteffecttextVarPopOrderBy = {
  id?: OrderBy
  item_fling_effect_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemflingeffecteffecttextVarSampOrderBy = {
  id?: OrderBy
  item_fling_effect_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemflingeffecteffecttextVarianceOrderBy = {
  id?: OrderBy
  item_fling_effect_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemnameAggregateOrderBy = {
  avg?: PokemonV2ItemnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2ItemnameMaxOrderBy
  min?: PokemonV2ItemnameMinOrderBy
  stddev?: PokemonV2ItemnameStddevOrderBy
  stddev_pop?: PokemonV2ItemnameStddevPopOrderBy
  stddev_samp?: PokemonV2ItemnameStddevSampOrderBy
  sum?: PokemonV2ItemnameSumOrderBy
  var_pop?: PokemonV2ItemnameVarPopOrderBy
  var_samp?: PokemonV2ItemnameVarSampOrderBy
  variance?: PokemonV2ItemnameVarianceOrderBy
}
export type PokemonV2ItemnameAvgOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemnameMaxOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2ItemnameMinOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2ItemnameStddevOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemnameStddevPopOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemnameStddevSampOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemnameSumOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemnameVarPopOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemnameVarSampOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItemnameVarianceOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItempocketnameAggregateOrderBy = {
  avg?: PokemonV2ItempocketnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2ItempocketnameMaxOrderBy
  min?: PokemonV2ItempocketnameMinOrderBy
  stddev?: PokemonV2ItempocketnameStddevOrderBy
  stddev_pop?: PokemonV2ItempocketnameStddevPopOrderBy
  stddev_samp?: PokemonV2ItempocketnameStddevSampOrderBy
  sum?: PokemonV2ItempocketnameSumOrderBy
  var_pop?: PokemonV2ItempocketnameVarPopOrderBy
  var_samp?: PokemonV2ItempocketnameVarSampOrderBy
  variance?: PokemonV2ItempocketnameVarianceOrderBy
}
export type PokemonV2ItempocketnameAvgOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItempocketnameMaxOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2ItempocketnameMinOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2ItempocketnameStddevOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItempocketnameStddevPopOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItempocketnameStddevSampOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItempocketnameSumOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItempocketnameVarPopOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItempocketnameVarSampOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2ItempocketnameVarianceOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
  language_id?: OrderBy
}
export type PokemonV2LocationareanameAggregateOrderBy = {
  avg?: PokemonV2LocationareanameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2LocationareanameMaxOrderBy
  min?: PokemonV2LocationareanameMinOrderBy
  stddev?: PokemonV2LocationareanameStddevOrderBy
  stddev_pop?: PokemonV2LocationareanameStddevPopOrderBy
  stddev_samp?: PokemonV2LocationareanameStddevSampOrderBy
  sum?: PokemonV2LocationareanameSumOrderBy
  var_pop?: PokemonV2LocationareanameVarPopOrderBy
  var_samp?: PokemonV2LocationareanameVarSampOrderBy
  variance?: PokemonV2LocationareanameVarianceOrderBy
}
export type PokemonV2LocationareanameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_area_id?: OrderBy
}
export type PokemonV2LocationareanameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_area_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2LocationareanameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_area_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2LocationareanameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_area_id?: OrderBy
}
export type PokemonV2LocationareanameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_area_id?: OrderBy
}
export type PokemonV2LocationareanameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_area_id?: OrderBy
}
export type PokemonV2LocationareanameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_area_id?: OrderBy
}
export type PokemonV2LocationareanameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_area_id?: OrderBy
}
export type PokemonV2LocationareanameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_area_id?: OrderBy
}
export type PokemonV2LocationareanameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_area_id?: OrderBy
}
export type PokemonV2LocationnameAggregateOrderBy = {
  avg?: PokemonV2LocationnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2LocationnameMaxOrderBy
  min?: PokemonV2LocationnameMinOrderBy
  stddev?: PokemonV2LocationnameStddevOrderBy
  stddev_pop?: PokemonV2LocationnameStddevPopOrderBy
  stddev_samp?: PokemonV2LocationnameStddevSampOrderBy
  sum?: PokemonV2LocationnameSumOrderBy
  var_pop?: PokemonV2LocationnameVarPopOrderBy
  var_samp?: PokemonV2LocationnameVarSampOrderBy
  variance?: PokemonV2LocationnameVarianceOrderBy
}
export type PokemonV2LocationnameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationnameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2LocationnameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2LocationnameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationnameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationnameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationnameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationnameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationnameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationnameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2MoveattributedescriptionAggregateOrderBy = {
  avg?: PokemonV2MoveattributedescriptionAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MoveattributedescriptionMaxOrderBy
  min?: PokemonV2MoveattributedescriptionMinOrderBy
  stddev?: PokemonV2MoveattributedescriptionStddevOrderBy
  stddev_pop?: PokemonV2MoveattributedescriptionStddevPopOrderBy
  stddev_samp?: PokemonV2MoveattributedescriptionStddevSampOrderBy
  sum?: PokemonV2MoveattributedescriptionSumOrderBy
  var_pop?: PokemonV2MoveattributedescriptionVarPopOrderBy
  var_samp?: PokemonV2MoveattributedescriptionVarSampOrderBy
  variance?: PokemonV2MoveattributedescriptionVarianceOrderBy
}
export type PokemonV2MoveattributedescriptionAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
}
export type PokemonV2MoveattributedescriptionMaxOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
}
export type PokemonV2MoveattributedescriptionMinOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
}
export type PokemonV2MoveattributedescriptionStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
}
export type PokemonV2MoveattributedescriptionStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
}
export type PokemonV2MoveattributedescriptionStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
}
export type PokemonV2MoveattributedescriptionSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
}
export type PokemonV2MoveattributedescriptionVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
}
export type PokemonV2MoveattributedescriptionVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
}
export type PokemonV2MoveattributedescriptionVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
}
export type PokemonV2MoveattributenameAggregateOrderBy = {
  avg?: PokemonV2MoveattributenameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MoveattributenameMaxOrderBy
  min?: PokemonV2MoveattributenameMinOrderBy
  stddev?: PokemonV2MoveattributenameStddevOrderBy
  stddev_pop?: PokemonV2MoveattributenameStddevPopOrderBy
  stddev_samp?: PokemonV2MoveattributenameStddevSampOrderBy
  sum?: PokemonV2MoveattributenameSumOrderBy
  var_pop?: PokemonV2MoveattributenameVarPopOrderBy
  var_samp?: PokemonV2MoveattributenameVarSampOrderBy
  variance?: PokemonV2MoveattributenameVarianceOrderBy
}
export type PokemonV2MoveattributenameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
}
export type PokemonV2MoveattributenameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2MoveattributenameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2MoveattributenameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
}
export type PokemonV2MoveattributenameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
}
export type PokemonV2MoveattributenameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
}
export type PokemonV2MoveattributenameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
}
export type PokemonV2MoveattributenameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
}
export type PokemonV2MoveattributenameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
}
export type PokemonV2MoveattributenameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
}
export type PokemonV2MovebattlestylenameAggregateOrderBy = {
  avg?: PokemonV2MovebattlestylenameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MovebattlestylenameMaxOrderBy
  min?: PokemonV2MovebattlestylenameMinOrderBy
  stddev?: PokemonV2MovebattlestylenameStddevOrderBy
  stddev_pop?: PokemonV2MovebattlestylenameStddevPopOrderBy
  stddev_samp?: PokemonV2MovebattlestylenameStddevSampOrderBy
  sum?: PokemonV2MovebattlestylenameSumOrderBy
  var_pop?: PokemonV2MovebattlestylenameVarPopOrderBy
  var_samp?: PokemonV2MovebattlestylenameVarSampOrderBy
  variance?: PokemonV2MovebattlestylenameVarianceOrderBy
}
export type PokemonV2MovebattlestylenameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_battle_style_id?: OrderBy
}
export type PokemonV2MovebattlestylenameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_battle_style_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2MovebattlestylenameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_battle_style_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2MovebattlestylenameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_battle_style_id?: OrderBy
}
export type PokemonV2MovebattlestylenameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_battle_style_id?: OrderBy
}
export type PokemonV2MovebattlestylenameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_battle_style_id?: OrderBy
}
export type PokemonV2MovebattlestylenameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_battle_style_id?: OrderBy
}
export type PokemonV2MovebattlestylenameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_battle_style_id?: OrderBy
}
export type PokemonV2MovebattlestylenameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_battle_style_id?: OrderBy
}
export type PokemonV2MovebattlestylenameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_battle_style_id?: OrderBy
}
export type PokemonV2MovedamageclassdescriptionAggregateOrderBy = {
  avg?: PokemonV2MovedamageclassdescriptionAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MovedamageclassdescriptionMaxOrderBy
  min?: PokemonV2MovedamageclassdescriptionMinOrderBy
  stddev?: PokemonV2MovedamageclassdescriptionStddevOrderBy
  stddev_pop?: PokemonV2MovedamageclassdescriptionStddevPopOrderBy
  stddev_samp?: PokemonV2MovedamageclassdescriptionStddevSampOrderBy
  sum?: PokemonV2MovedamageclassdescriptionSumOrderBy
  var_pop?: PokemonV2MovedamageclassdescriptionVarPopOrderBy
  var_samp?: PokemonV2MovedamageclassdescriptionVarSampOrderBy
  variance?: PokemonV2MovedamageclassdescriptionVarianceOrderBy
}
export type PokemonV2MovedamageclassdescriptionAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2MovedamageclassdescriptionMaxOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2MovedamageclassdescriptionMinOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2MovedamageclassdescriptionStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2MovedamageclassdescriptionStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2MovedamageclassdescriptionStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2MovedamageclassdescriptionSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2MovedamageclassdescriptionVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2MovedamageclassdescriptionVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2MovedamageclassdescriptionVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2MovedamageclassnameAggregateOrderBy = {
  avg?: PokemonV2MovedamageclassnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MovedamageclassnameMaxOrderBy
  min?: PokemonV2MovedamageclassnameMinOrderBy
  stddev?: PokemonV2MovedamageclassnameStddevOrderBy
  stddev_pop?: PokemonV2MovedamageclassnameStddevPopOrderBy
  stddev_samp?: PokemonV2MovedamageclassnameStddevSampOrderBy
  sum?: PokemonV2MovedamageclassnameSumOrderBy
  var_pop?: PokemonV2MovedamageclassnameVarPopOrderBy
  var_samp?: PokemonV2MovedamageclassnameVarSampOrderBy
  variance?: PokemonV2MovedamageclassnameVarianceOrderBy
}
export type PokemonV2MovedamageclassnameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2MovedamageclassnameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2MovedamageclassnameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2MovedamageclassnameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2MovedamageclassnameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2MovedamageclassnameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2MovedamageclassnameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2MovedamageclassnameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2MovedamageclassnameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2MovedamageclassnameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2MoveeffectchangeeffecttextAggregateOrderBy = {
  avg?: PokemonV2MoveeffectchangeeffecttextAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MoveeffectchangeeffecttextMaxOrderBy
  min?: PokemonV2MoveeffectchangeeffecttextMinOrderBy
  stddev?: PokemonV2MoveeffectchangeeffecttextStddevOrderBy
  stddev_pop?: PokemonV2MoveeffectchangeeffecttextStddevPopOrderBy
  stddev_samp?: PokemonV2MoveeffectchangeeffecttextStddevSampOrderBy
  sum?: PokemonV2MoveeffectchangeeffecttextSumOrderBy
  var_pop?: PokemonV2MoveeffectchangeeffecttextVarPopOrderBy
  var_samp?: PokemonV2MoveeffectchangeeffecttextVarSampOrderBy
  variance?: PokemonV2MoveeffectchangeeffecttextVarianceOrderBy
}
export type PokemonV2MoveeffectchangeeffecttextAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_effect_change_id?: OrderBy
}
export type PokemonV2MoveeffectchangeeffecttextMaxOrderBy = {
  effect?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_effect_change_id?: OrderBy
}
export type PokemonV2MoveeffectchangeeffecttextMinOrderBy = {
  effect?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_effect_change_id?: OrderBy
}
export type PokemonV2MoveeffectchangeeffecttextStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_effect_change_id?: OrderBy
}
export type PokemonV2MoveeffectchangeeffecttextStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_effect_change_id?: OrderBy
}
export type PokemonV2MoveeffectchangeeffecttextStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_effect_change_id?: OrderBy
}
export type PokemonV2MoveeffectchangeeffecttextSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_effect_change_id?: OrderBy
}
export type PokemonV2MoveeffectchangeeffecttextVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_effect_change_id?: OrderBy
}
export type PokemonV2MoveeffectchangeeffecttextVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_effect_change_id?: OrderBy
}
export type PokemonV2MoveeffectchangeeffecttextVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_effect_change_id?: OrderBy
}
export type PokemonV2MoveeffecteffecttextAggregateOrderBy = {
  avg?: PokemonV2MoveeffecteffecttextAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MoveeffecteffecttextMaxOrderBy
  min?: PokemonV2MoveeffecteffecttextMinOrderBy
  stddev?: PokemonV2MoveeffecteffecttextStddevOrderBy
  stddev_pop?: PokemonV2MoveeffecteffecttextStddevPopOrderBy
  stddev_samp?: PokemonV2MoveeffecteffecttextStddevSampOrderBy
  sum?: PokemonV2MoveeffecteffecttextSumOrderBy
  var_pop?: PokemonV2MoveeffecteffecttextVarPopOrderBy
  var_samp?: PokemonV2MoveeffecteffecttextVarSampOrderBy
  variance?: PokemonV2MoveeffecteffecttextVarianceOrderBy
}
export type PokemonV2MoveeffecteffecttextAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_effect_id?: OrderBy
}
export type PokemonV2MoveeffecteffecttextMaxOrderBy = {
  effect?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_effect_id?: OrderBy
  short_effect?: OrderBy
}
export type PokemonV2MoveeffecteffecttextMinOrderBy = {
  effect?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_effect_id?: OrderBy
  short_effect?: OrderBy
}
export type PokemonV2MoveeffecteffecttextStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_effect_id?: OrderBy
}
export type PokemonV2MoveeffecteffecttextStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_effect_id?: OrderBy
}
export type PokemonV2MoveeffecteffecttextStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_effect_id?: OrderBy
}
export type PokemonV2MoveeffecteffecttextSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_effect_id?: OrderBy
}
export type PokemonV2MoveeffecteffecttextVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_effect_id?: OrderBy
}
export type PokemonV2MoveeffecteffecttextVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_effect_id?: OrderBy
}
export type PokemonV2MoveeffecteffecttextVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_effect_id?: OrderBy
}
export type PokemonV2MovelearnmethoddescriptionAggregateOrderBy = {
  avg?: PokemonV2MovelearnmethoddescriptionAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MovelearnmethoddescriptionMaxOrderBy
  min?: PokemonV2MovelearnmethoddescriptionMinOrderBy
  stddev?: PokemonV2MovelearnmethoddescriptionStddevOrderBy
  stddev_pop?: PokemonV2MovelearnmethoddescriptionStddevPopOrderBy
  stddev_samp?: PokemonV2MovelearnmethoddescriptionStddevSampOrderBy
  sum?: PokemonV2MovelearnmethoddescriptionSumOrderBy
  var_pop?: PokemonV2MovelearnmethoddescriptionVarPopOrderBy
  var_samp?: PokemonV2MovelearnmethoddescriptionVarSampOrderBy
  variance?: PokemonV2MovelearnmethoddescriptionVarianceOrderBy
}
export type PokemonV2MovelearnmethoddescriptionAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
}
export type PokemonV2MovelearnmethoddescriptionMaxOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
}
export type PokemonV2MovelearnmethoddescriptionMinOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
}
export type PokemonV2MovelearnmethoddescriptionStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
}
export type PokemonV2MovelearnmethoddescriptionStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
}
export type PokemonV2MovelearnmethoddescriptionStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
}
export type PokemonV2MovelearnmethoddescriptionSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
}
export type PokemonV2MovelearnmethoddescriptionVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
}
export type PokemonV2MovelearnmethoddescriptionVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
}
export type PokemonV2MovelearnmethoddescriptionVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
}
export type PokemonV2MovelearnmethodnameAggregateOrderBy = {
  avg?: PokemonV2MovelearnmethodnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MovelearnmethodnameMaxOrderBy
  min?: PokemonV2MovelearnmethodnameMinOrderBy
  stddev?: PokemonV2MovelearnmethodnameStddevOrderBy
  stddev_pop?: PokemonV2MovelearnmethodnameStddevPopOrderBy
  stddev_samp?: PokemonV2MovelearnmethodnameStddevSampOrderBy
  sum?: PokemonV2MovelearnmethodnameSumOrderBy
  var_pop?: PokemonV2MovelearnmethodnameVarPopOrderBy
  var_samp?: PokemonV2MovelearnmethodnameVarSampOrderBy
  variance?: PokemonV2MovelearnmethodnameVarianceOrderBy
}
export type PokemonV2MovelearnmethodnameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
}
export type PokemonV2MovelearnmethodnameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2MovelearnmethodnameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2MovelearnmethodnameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
}
export type PokemonV2MovelearnmethodnameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
}
export type PokemonV2MovelearnmethodnameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
}
export type PokemonV2MovelearnmethodnameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
}
export type PokemonV2MovelearnmethodnameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
}
export type PokemonV2MovelearnmethodnameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
}
export type PokemonV2MovelearnmethodnameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
}
export type PokemonV2MovemetaailmentnameAggregateOrderBy = {
  avg?: PokemonV2MovemetaailmentnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MovemetaailmentnameMaxOrderBy
  min?: PokemonV2MovemetaailmentnameMinOrderBy
  stddev?: PokemonV2MovemetaailmentnameStddevOrderBy
  stddev_pop?: PokemonV2MovemetaailmentnameStddevPopOrderBy
  stddev_samp?: PokemonV2MovemetaailmentnameStddevSampOrderBy
  sum?: PokemonV2MovemetaailmentnameSumOrderBy
  var_pop?: PokemonV2MovemetaailmentnameVarPopOrderBy
  var_samp?: PokemonV2MovemetaailmentnameVarSampOrderBy
  variance?: PokemonV2MovemetaailmentnameVarianceOrderBy
}
export type PokemonV2MovemetaailmentnameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_ailment_id?: OrderBy
}
export type PokemonV2MovemetaailmentnameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_ailment_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2MovemetaailmentnameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_ailment_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2MovemetaailmentnameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_ailment_id?: OrderBy
}
export type PokemonV2MovemetaailmentnameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_ailment_id?: OrderBy
}
export type PokemonV2MovemetaailmentnameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_ailment_id?: OrderBy
}
export type PokemonV2MovemetaailmentnameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_ailment_id?: OrderBy
}
export type PokemonV2MovemetaailmentnameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_ailment_id?: OrderBy
}
export type PokemonV2MovemetaailmentnameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_ailment_id?: OrderBy
}
export type PokemonV2MovemetaailmentnameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_ailment_id?: OrderBy
}
export type PokemonV2MovemetacategorydescriptionAggregateOrderBy = {
  avg?: PokemonV2MovemetacategorydescriptionAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MovemetacategorydescriptionMaxOrderBy
  min?: PokemonV2MovemetacategorydescriptionMinOrderBy
  stddev?: PokemonV2MovemetacategorydescriptionStddevOrderBy
  stddev_pop?: PokemonV2MovemetacategorydescriptionStddevPopOrderBy
  stddev_samp?: PokemonV2MovemetacategorydescriptionStddevSampOrderBy
  sum?: PokemonV2MovemetacategorydescriptionSumOrderBy
  var_pop?: PokemonV2MovemetacategorydescriptionVarPopOrderBy
  var_samp?: PokemonV2MovemetacategorydescriptionVarSampOrderBy
  variance?: PokemonV2MovemetacategorydescriptionVarianceOrderBy
}
export type PokemonV2MovemetacategorydescriptionAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_category_id?: OrderBy
}
export type PokemonV2MovemetacategorydescriptionMaxOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_meta_category_id?: OrderBy
}
export type PokemonV2MovemetacategorydescriptionMinOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_meta_category_id?: OrderBy
}
export type PokemonV2MovemetacategorydescriptionStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_category_id?: OrderBy
}
export type PokemonV2MovemetacategorydescriptionStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_category_id?: OrderBy
}
export type PokemonV2MovemetacategorydescriptionStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_category_id?: OrderBy
}
export type PokemonV2MovemetacategorydescriptionSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_category_id?: OrderBy
}
export type PokemonV2MovemetacategorydescriptionVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_category_id?: OrderBy
}
export type PokemonV2MovemetacategorydescriptionVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_category_id?: OrderBy
}
export type PokemonV2MovemetacategorydescriptionVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_category_id?: OrderBy
}
export type PokemonV2MovenameAggregateOrderBy = {
  avg?: PokemonV2MovenameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MovenameMaxOrderBy
  min?: PokemonV2MovenameMinOrderBy
  stddev?: PokemonV2MovenameStddevOrderBy
  stddev_pop?: PokemonV2MovenameStddevPopOrderBy
  stddev_samp?: PokemonV2MovenameStddevSampOrderBy
  sum?: PokemonV2MovenameSumOrderBy
  var_pop?: PokemonV2MovenameVarPopOrderBy
  var_samp?: PokemonV2MovenameVarSampOrderBy
  variance?: PokemonV2MovenameVarianceOrderBy
}
export type PokemonV2MovenameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
}
export type PokemonV2MovenameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2MovenameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2MovenameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
}
export type PokemonV2MovenameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
}
export type PokemonV2MovenameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
}
export type PokemonV2MovenameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
}
export type PokemonV2MovenameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
}
export type PokemonV2MovenameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
}
export type PokemonV2MovenameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
}
export type PokemonV2MovetargetdescriptionAggregateOrderBy = {
  avg?: PokemonV2MovetargetdescriptionAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MovetargetdescriptionMaxOrderBy
  min?: PokemonV2MovetargetdescriptionMinOrderBy
  stddev?: PokemonV2MovetargetdescriptionStddevOrderBy
  stddev_pop?: PokemonV2MovetargetdescriptionStddevPopOrderBy
  stddev_samp?: PokemonV2MovetargetdescriptionStddevSampOrderBy
  sum?: PokemonV2MovetargetdescriptionSumOrderBy
  var_pop?: PokemonV2MovetargetdescriptionVarPopOrderBy
  var_samp?: PokemonV2MovetargetdescriptionVarSampOrderBy
  variance?: PokemonV2MovetargetdescriptionVarianceOrderBy
}
export type PokemonV2MovetargetdescriptionAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
}
export type PokemonV2MovetargetdescriptionMaxOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
}
export type PokemonV2MovetargetdescriptionMinOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
}
export type PokemonV2MovetargetdescriptionStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
}
export type PokemonV2MovetargetdescriptionStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
}
export type PokemonV2MovetargetdescriptionStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
}
export type PokemonV2MovetargetdescriptionSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
}
export type PokemonV2MovetargetdescriptionVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
}
export type PokemonV2MovetargetdescriptionVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
}
export type PokemonV2MovetargetdescriptionVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
}
export type PokemonV2MovetargetnameAggregateOrderBy = {
  avg?: PokemonV2MovetargetnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MovetargetnameMaxOrderBy
  min?: PokemonV2MovetargetnameMinOrderBy
  stddev?: PokemonV2MovetargetnameStddevOrderBy
  stddev_pop?: PokemonV2MovetargetnameStddevPopOrderBy
  stddev_samp?: PokemonV2MovetargetnameStddevSampOrderBy
  sum?: PokemonV2MovetargetnameSumOrderBy
  var_pop?: PokemonV2MovetargetnameVarPopOrderBy
  var_samp?: PokemonV2MovetargetnameVarSampOrderBy
  variance?: PokemonV2MovetargetnameVarianceOrderBy
}
export type PokemonV2MovetargetnameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
}
export type PokemonV2MovetargetnameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2MovetargetnameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2MovetargetnameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
}
export type PokemonV2MovetargetnameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
}
export type PokemonV2MovetargetnameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
}
export type PokemonV2MovetargetnameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
}
export type PokemonV2MovetargetnameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
}
export type PokemonV2MovetargetnameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
}
export type PokemonV2MovetargetnameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
}
export type PokemonV2NaturenameAggregateOrderBy = {
  avg?: PokemonV2NaturenameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2NaturenameMaxOrderBy
  min?: PokemonV2NaturenameMinOrderBy
  stddev?: PokemonV2NaturenameStddevOrderBy
  stddev_pop?: PokemonV2NaturenameStddevPopOrderBy
  stddev_samp?: PokemonV2NaturenameStddevSampOrderBy
  sum?: PokemonV2NaturenameSumOrderBy
  var_pop?: PokemonV2NaturenameVarPopOrderBy
  var_samp?: PokemonV2NaturenameVarSampOrderBy
  variance?: PokemonV2NaturenameVarianceOrderBy
}
export type PokemonV2NaturenameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturenameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturenameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturenameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturenameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturenameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturenameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturenameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturenameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturenameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2PalparkareanameAggregateOrderBy = {
  avg?: PokemonV2PalparkareanameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PalparkareanameMaxOrderBy
  min?: PokemonV2PalparkareanameMinOrderBy
  stddev?: PokemonV2PalparkareanameStddevOrderBy
  stddev_pop?: PokemonV2PalparkareanameStddevPopOrderBy
  stddev_samp?: PokemonV2PalparkareanameStddevSampOrderBy
  sum?: PokemonV2PalparkareanameSumOrderBy
  var_pop?: PokemonV2PalparkareanameVarPopOrderBy
  var_samp?: PokemonV2PalparkareanameVarSampOrderBy
  variance?: PokemonV2PalparkareanameVarianceOrderBy
}
export type PokemonV2PalparkareanameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pal_park_area_id?: OrderBy
}
export type PokemonV2PalparkareanameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pal_park_area_id?: OrderBy
}
export type PokemonV2PalparkareanameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pal_park_area_id?: OrderBy
}
export type PokemonV2PalparkareanameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pal_park_area_id?: OrderBy
}
export type PokemonV2PalparkareanameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pal_park_area_id?: OrderBy
}
export type PokemonV2PalparkareanameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pal_park_area_id?: OrderBy
}
export type PokemonV2PalparkareanameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pal_park_area_id?: OrderBy
}
export type PokemonV2PalparkareanameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pal_park_area_id?: OrderBy
}
export type PokemonV2PalparkareanameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pal_park_area_id?: OrderBy
}
export type PokemonV2PalparkareanameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pal_park_area_id?: OrderBy
}
export type PokemonV2PokeathlonstatnameAggregateOrderBy = {
  avg?: PokemonV2PokeathlonstatnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokeathlonstatnameMaxOrderBy
  min?: PokemonV2PokeathlonstatnameMinOrderBy
  stddev?: PokemonV2PokeathlonstatnameStddevOrderBy
  stddev_pop?: PokemonV2PokeathlonstatnameStddevPopOrderBy
  stddev_samp?: PokemonV2PokeathlonstatnameStddevSampOrderBy
  sum?: PokemonV2PokeathlonstatnameSumOrderBy
  var_pop?: PokemonV2PokeathlonstatnameVarPopOrderBy
  var_samp?: PokemonV2PokeathlonstatnameVarSampOrderBy
  variance?: PokemonV2PokeathlonstatnameVarianceOrderBy
}
export type PokemonV2PokeathlonstatnameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2PokeathlonstatnameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2PokeathlonstatnameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2PokeathlonstatnameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2PokeathlonstatnameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2PokeathlonstatnameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2PokeathlonstatnameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2PokeathlonstatnameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2PokeathlonstatnameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2PokeathlonstatnameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2PokedexdescriptionAggregateOrderBy = {
  avg?: PokemonV2PokedexdescriptionAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokedexdescriptionMaxOrderBy
  min?: PokemonV2PokedexdescriptionMinOrderBy
  stddev?: PokemonV2PokedexdescriptionStddevOrderBy
  stddev_pop?: PokemonV2PokedexdescriptionStddevPopOrderBy
  stddev_samp?: PokemonV2PokedexdescriptionStddevSampOrderBy
  sum?: PokemonV2PokedexdescriptionSumOrderBy
  var_pop?: PokemonV2PokedexdescriptionVarPopOrderBy
  var_samp?: PokemonV2PokedexdescriptionVarSampOrderBy
  variance?: PokemonV2PokedexdescriptionVarianceOrderBy
}
export type PokemonV2PokedexdescriptionAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexdescriptionMaxOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexdescriptionMinOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexdescriptionStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexdescriptionStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexdescriptionStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexdescriptionSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexdescriptionVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexdescriptionVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexdescriptionVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexnameAggregateOrderBy = {
  avg?: PokemonV2PokedexnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokedexnameMaxOrderBy
  min?: PokemonV2PokedexnameMinOrderBy
  stddev?: PokemonV2PokedexnameStddevOrderBy
  stddev_pop?: PokemonV2PokedexnameStddevPopOrderBy
  stddev_samp?: PokemonV2PokedexnameStddevSampOrderBy
  sum?: PokemonV2PokedexnameSumOrderBy
  var_pop?: PokemonV2PokedexnameVarPopOrderBy
  var_samp?: PokemonV2PokedexnameVarSampOrderBy
  variance?: PokemonV2PokedexnameVarianceOrderBy
}
export type PokemonV2PokedexnameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexnameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexnameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexnameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexnameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexnameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexnameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexnameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexnameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokedexnameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
}
export type PokemonV2PokemoncolornameAggregateOrderBy = {
  avg?: PokemonV2PokemoncolornameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemoncolornameMaxOrderBy
  min?: PokemonV2PokemoncolornameMinOrderBy
  stddev?: PokemonV2PokemoncolornameStddevOrderBy
  stddev_pop?: PokemonV2PokemoncolornameStddevPopOrderBy
  stddev_samp?: PokemonV2PokemoncolornameStddevSampOrderBy
  sum?: PokemonV2PokemoncolornameSumOrderBy
  var_pop?: PokemonV2PokemoncolornameVarPopOrderBy
  var_samp?: PokemonV2PokemoncolornameVarSampOrderBy
  variance?: PokemonV2PokemoncolornameVarianceOrderBy
}
export type PokemonV2PokemoncolornameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_color_id?: OrderBy
}
export type PokemonV2PokemoncolornameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_color_id?: OrderBy
}
export type PokemonV2PokemoncolornameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_color_id?: OrderBy
}
export type PokemonV2PokemoncolornameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_color_id?: OrderBy
}
export type PokemonV2PokemoncolornameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_color_id?: OrderBy
}
export type PokemonV2PokemoncolornameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_color_id?: OrderBy
}
export type PokemonV2PokemoncolornameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_color_id?: OrderBy
}
export type PokemonV2PokemoncolornameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_color_id?: OrderBy
}
export type PokemonV2PokemoncolornameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_color_id?: OrderBy
}
export type PokemonV2PokemoncolornameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_color_id?: OrderBy
}
export type PokemonV2PokemonformnameAggregateOrderBy = {
  avg?: PokemonV2PokemonformnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonformnameMaxOrderBy
  min?: PokemonV2PokemonformnameMinOrderBy
  stddev?: PokemonV2PokemonformnameStddevOrderBy
  stddev_pop?: PokemonV2PokemonformnameStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonformnameStddevSampOrderBy
  sum?: PokemonV2PokemonformnameSumOrderBy
  var_pop?: PokemonV2PokemonformnameVarPopOrderBy
  var_samp?: PokemonV2PokemonformnameVarSampOrderBy
  variance?: PokemonV2PokemonformnameVarianceOrderBy
}
export type PokemonV2PokemonformnameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformnameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_form_id?: OrderBy
  pokemon_name?: OrderBy
}
export type PokemonV2PokemonformnameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_form_id?: OrderBy
  pokemon_name?: OrderBy
}
export type PokemonV2PokemonformnameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformnameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformnameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformnameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformnameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformnameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformnameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonhabitatnameAggregateOrderBy = {
  avg?: PokemonV2PokemonhabitatnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonhabitatnameMaxOrderBy
  min?: PokemonV2PokemonhabitatnameMinOrderBy
  stddev?: PokemonV2PokemonhabitatnameStddevOrderBy
  stddev_pop?: PokemonV2PokemonhabitatnameStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonhabitatnameStddevSampOrderBy
  sum?: PokemonV2PokemonhabitatnameSumOrderBy
  var_pop?: PokemonV2PokemonhabitatnameVarPopOrderBy
  var_samp?: PokemonV2PokemonhabitatnameVarSampOrderBy
  variance?: PokemonV2PokemonhabitatnameVarianceOrderBy
}
export type PokemonV2PokemonhabitatnameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_habitat_id?: OrderBy
}
export type PokemonV2PokemonhabitatnameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_habitat_id?: OrderBy
}
export type PokemonV2PokemonhabitatnameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_habitat_id?: OrderBy
}
export type PokemonV2PokemonhabitatnameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_habitat_id?: OrderBy
}
export type PokemonV2PokemonhabitatnameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_habitat_id?: OrderBy
}
export type PokemonV2PokemonhabitatnameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_habitat_id?: OrderBy
}
export type PokemonV2PokemonhabitatnameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_habitat_id?: OrderBy
}
export type PokemonV2PokemonhabitatnameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_habitat_id?: OrderBy
}
export type PokemonV2PokemonhabitatnameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_habitat_id?: OrderBy
}
export type PokemonV2PokemonhabitatnameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_habitat_id?: OrderBy
}
export type PokemonV2PokemonshapenameAggregateOrderBy = {
  avg?: PokemonV2PokemonshapenameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonshapenameMaxOrderBy
  min?: PokemonV2PokemonshapenameMinOrderBy
  stddev?: PokemonV2PokemonshapenameStddevOrderBy
  stddev_pop?: PokemonV2PokemonshapenameStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonshapenameStddevSampOrderBy
  sum?: PokemonV2PokemonshapenameSumOrderBy
  var_pop?: PokemonV2PokemonshapenameVarPopOrderBy
  var_samp?: PokemonV2PokemonshapenameVarSampOrderBy
  variance?: PokemonV2PokemonshapenameVarianceOrderBy
}
export type PokemonV2PokemonshapenameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonshapenameMaxOrderBy = {
  awesome_name?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonshapenameMinOrderBy = {
  awesome_name?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonshapenameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonshapenameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonshapenameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonshapenameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonshapenameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonshapenameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonshapenameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_shape_id?: OrderBy
}
export type PokemonV2PokemonspeciesdescriptionAggregateOrderBy = {
  avg?: PokemonV2PokemonspeciesdescriptionAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonspeciesdescriptionMaxOrderBy
  min?: PokemonV2PokemonspeciesdescriptionMinOrderBy
  stddev?: PokemonV2PokemonspeciesdescriptionStddevOrderBy
  stddev_pop?: PokemonV2PokemonspeciesdescriptionStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonspeciesdescriptionStddevSampOrderBy
  sum?: PokemonV2PokemonspeciesdescriptionSumOrderBy
  var_pop?: PokemonV2PokemonspeciesdescriptionVarPopOrderBy
  var_samp?: PokemonV2PokemonspeciesdescriptionVarSampOrderBy
  variance?: PokemonV2PokemonspeciesdescriptionVarianceOrderBy
}
export type PokemonV2PokemonspeciesdescriptionAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesdescriptionMaxOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesdescriptionMinOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesdescriptionStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesdescriptionStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesdescriptionStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesdescriptionSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesdescriptionVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesdescriptionVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesdescriptionVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesflavortextAggregateOrderBy = {
  avg?: PokemonV2PokemonspeciesflavortextAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonspeciesflavortextMaxOrderBy
  min?: PokemonV2PokemonspeciesflavortextMinOrderBy
  stddev?: PokemonV2PokemonspeciesflavortextStddevOrderBy
  stddev_pop?: PokemonV2PokemonspeciesflavortextStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonspeciesflavortextStddevSampOrderBy
  sum?: PokemonV2PokemonspeciesflavortextSumOrderBy
  var_pop?: PokemonV2PokemonspeciesflavortextVarPopOrderBy
  var_samp?: PokemonV2PokemonspeciesflavortextVarSampOrderBy
  variance?: PokemonV2PokemonspeciesflavortextVarianceOrderBy
}
export type PokemonV2PokemonspeciesflavortextAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonspeciesflavortextMaxOrderBy = {
  flavor_text?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonspeciesflavortextMinOrderBy = {
  flavor_text?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonspeciesflavortextStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonspeciesflavortextStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonspeciesflavortextStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonspeciesflavortextSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonspeciesflavortextVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonspeciesflavortextVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonspeciesflavortextVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonspeciesnameAggregateOrderBy = {
  avg?: PokemonV2PokemonspeciesnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonspeciesnameMaxOrderBy
  min?: PokemonV2PokemonspeciesnameMinOrderBy
  stddev?: PokemonV2PokemonspeciesnameStddevOrderBy
  stddev_pop?: PokemonV2PokemonspeciesnameStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonspeciesnameStddevSampOrderBy
  sum?: PokemonV2PokemonspeciesnameSumOrderBy
  var_pop?: PokemonV2PokemonspeciesnameVarPopOrderBy
  var_samp?: PokemonV2PokemonspeciesnameVarSampOrderBy
  variance?: PokemonV2PokemonspeciesnameVarianceOrderBy
}
export type PokemonV2PokemonspeciesnameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesnameMaxOrderBy = {
  genus?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesnameMinOrderBy = {
  genus?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesnameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesnameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesnameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesnameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesnameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesnameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonspeciesnameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2StatnameAggregateOrderBy = {
  avg?: PokemonV2StatnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2StatnameMaxOrderBy
  min?: PokemonV2StatnameMinOrderBy
  stddev?: PokemonV2StatnameStddevOrderBy
  stddev_pop?: PokemonV2StatnameStddevPopOrderBy
  stddev_samp?: PokemonV2StatnameStddevSampOrderBy
  sum?: PokemonV2StatnameSumOrderBy
  var_pop?: PokemonV2StatnameVarPopOrderBy
  var_samp?: PokemonV2StatnameVarSampOrderBy
  variance?: PokemonV2StatnameVarianceOrderBy
}
export type PokemonV2StatnameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2StatnameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2StatnameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2StatnameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2StatnameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2StatnameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2StatnameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2StatnameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2StatnameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2StatnameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2SupercontesteffectflavortextAggregateOrderBy = {
  avg?: PokemonV2SupercontesteffectflavortextAvgOrderBy
  count?: OrderBy
  max?: PokemonV2SupercontesteffectflavortextMaxOrderBy
  min?: PokemonV2SupercontesteffectflavortextMinOrderBy
  stddev?: PokemonV2SupercontesteffectflavortextStddevOrderBy
  stddev_pop?: PokemonV2SupercontesteffectflavortextStddevPopOrderBy
  stddev_samp?: PokemonV2SupercontesteffectflavortextStddevSampOrderBy
  sum?: PokemonV2SupercontesteffectflavortextSumOrderBy
  var_pop?: PokemonV2SupercontesteffectflavortextVarPopOrderBy
  var_samp?: PokemonV2SupercontesteffectflavortextVarSampOrderBy
  variance?: PokemonV2SupercontesteffectflavortextVarianceOrderBy
}
export type PokemonV2SupercontesteffectflavortextAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  super_contest_effect_id?: OrderBy
}
export type PokemonV2SupercontesteffectflavortextMaxOrderBy = {
  flavor_text?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  super_contest_effect_id?: OrderBy
}
export type PokemonV2SupercontesteffectflavortextMinOrderBy = {
  flavor_text?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  super_contest_effect_id?: OrderBy
}
export type PokemonV2SupercontesteffectflavortextStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  super_contest_effect_id?: OrderBy
}
export type PokemonV2SupercontesteffectflavortextStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  super_contest_effect_id?: OrderBy
}
export type PokemonV2SupercontesteffectflavortextStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  super_contest_effect_id?: OrderBy
}
export type PokemonV2SupercontesteffectflavortextSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  super_contest_effect_id?: OrderBy
}
export type PokemonV2SupercontesteffectflavortextVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  super_contest_effect_id?: OrderBy
}
export type PokemonV2SupercontesteffectflavortextVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  super_contest_effect_id?: OrderBy
}
export type PokemonV2SupercontesteffectflavortextVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  super_contest_effect_id?: OrderBy
}
export type PokemonV2TypenameAggregateOrderBy = {
  avg?: PokemonV2TypenameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2TypenameMaxOrderBy
  min?: PokemonV2TypenameMinOrderBy
  stddev?: PokemonV2TypenameStddevOrderBy
  stddev_pop?: PokemonV2TypenameStddevPopOrderBy
  stddev_samp?: PokemonV2TypenameStddevSampOrderBy
  sum?: PokemonV2TypenameSumOrderBy
  var_pop?: PokemonV2TypenameVarPopOrderBy
  var_samp?: PokemonV2TypenameVarSampOrderBy
  variance?: PokemonV2TypenameVarianceOrderBy
}
export type PokemonV2TypenameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypenameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypenameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypenameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypenameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypenameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypenameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypenameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypenameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypenameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2VersionnameAggregateOrderBy = {
  avg?: PokemonV2VersionnameAvgOrderBy
  count?: OrderBy
  max?: PokemonV2VersionnameMaxOrderBy
  min?: PokemonV2VersionnameMinOrderBy
  stddev?: PokemonV2VersionnameStddevOrderBy
  stddev_pop?: PokemonV2VersionnameStddevPopOrderBy
  stddev_samp?: PokemonV2VersionnameStddevSampOrderBy
  sum?: PokemonV2VersionnameSumOrderBy
  var_pop?: PokemonV2VersionnameVarPopOrderBy
  var_samp?: PokemonV2VersionnameVarSampOrderBy
  variance?: PokemonV2VersionnameVarianceOrderBy
}
export type PokemonV2VersionnameAvgOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2VersionnameMaxOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2VersionnameMinOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2VersionnameStddevOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2VersionnameStddevPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2VersionnameStddevSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2VersionnameSumOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2VersionnameVarPopOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2VersionnameVarSampOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2VersionnameVarianceOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2LanguagenameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  local_language_id?: OrderBy
  name?: OrderBy
  pokemonV2LanguageByLocalLanguageId?: PokemonV2LanguageOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2AbilityeffecttextOrderBy = {
  ability_id?: OrderBy
  effect?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  pokemon_v2_ability?: PokemonV2AbilityOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  short_effect?: OrderBy
}
export type PokemonV2AbilityflavortextOrderBy = {
  ability_id?: OrderBy
  flavor_text?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  pokemon_v2_ability?: PokemonV2AbilityOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_versiongroup?: PokemonV2VersiongroupOrderBy
  version_group_id?: OrderBy
}
export type PokemonV2EncounterslotOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  pokemon_v2_encountermethod?: PokemonV2EncountermethodOrderBy
  pokemon_v2_encounters_aggregate?: PokemonV2EncounterAggregateOrderBy
  pokemon_v2_versiongroup?: PokemonV2VersiongroupOrderBy
  rarity?: OrderBy
  slot?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2EncountermethodOrderBy = {
  id?: OrderBy
  name?: OrderBy
  order?: OrderBy
  pokemon_v2_encountermethodnames_aggregate?: PokemonV2EncountermethodnameAggregateOrderBy
  pokemon_v2_encounterslots_aggregate?: PokemonV2EncounterslotAggregateOrderBy
  pokemon_v2_locationareaencounterrates_aggregate?: PokemonV2LocationareaencounterrateAggregateOrderBy
}
export type PokemonV2LocationareaencounterrateAggregateOrderBy = {
  avg?: PokemonV2LocationareaencounterrateAvgOrderBy
  count?: OrderBy
  max?: PokemonV2LocationareaencounterrateMaxOrderBy
  min?: PokemonV2LocationareaencounterrateMinOrderBy
  stddev?: PokemonV2LocationareaencounterrateStddevOrderBy
  stddev_pop?: PokemonV2LocationareaencounterrateStddevPopOrderBy
  stddev_samp?: PokemonV2LocationareaencounterrateStddevSampOrderBy
  sum?: PokemonV2LocationareaencounterrateSumOrderBy
  var_pop?: PokemonV2LocationareaencounterrateVarPopOrderBy
  var_samp?: PokemonV2LocationareaencounterrateVarSampOrderBy
  variance?: PokemonV2LocationareaencounterrateVarianceOrderBy
}
export type PokemonV2LocationareaencounterrateAvgOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  rate?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2LocationareaencounterrateMaxOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  rate?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2LocationareaencounterrateMinOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  rate?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2LocationareaencounterrateStddevOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  rate?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2LocationareaencounterrateStddevPopOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  rate?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2LocationareaencounterrateStddevSampOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  rate?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2LocationareaencounterrateSumOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  rate?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2LocationareaencounterrateVarPopOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  rate?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2LocationareaencounterrateVarSampOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  rate?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2LocationareaencounterrateVarianceOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  rate?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2EncounterAggregateOrderBy = {
  avg?: PokemonV2EncounterAvgOrderBy
  count?: OrderBy
  max?: PokemonV2EncounterMaxOrderBy
  min?: PokemonV2EncounterMinOrderBy
  stddev?: PokemonV2EncounterStddevOrderBy
  stddev_pop?: PokemonV2EncounterStddevPopOrderBy
  stddev_samp?: PokemonV2EncounterStddevSampOrderBy
  sum?: PokemonV2EncounterSumOrderBy
  var_pop?: PokemonV2EncounterVarPopOrderBy
  var_samp?: PokemonV2EncounterVarSampOrderBy
  variance?: PokemonV2EncounterVarianceOrderBy
}
export type PokemonV2EncounterAvgOrderBy = {
  encounter_slot_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  max_level?: OrderBy
  min_level?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2EncounterMaxOrderBy = {
  encounter_slot_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  max_level?: OrderBy
  min_level?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2EncounterMinOrderBy = {
  encounter_slot_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  max_level?: OrderBy
  min_level?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2EncounterStddevOrderBy = {
  encounter_slot_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  max_level?: OrderBy
  min_level?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2EncounterStddevPopOrderBy = {
  encounter_slot_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  max_level?: OrderBy
  min_level?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2EncounterStddevSampOrderBy = {
  encounter_slot_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  max_level?: OrderBy
  min_level?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2EncounterSumOrderBy = {
  encounter_slot_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  max_level?: OrderBy
  min_level?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2EncounterVarPopOrderBy = {
  encounter_slot_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  max_level?: OrderBy
  min_level?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2EncounterVarSampOrderBy = {
  encounter_slot_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  max_level?: OrderBy
  min_level?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2EncounterVarianceOrderBy = {
  encounter_slot_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  max_level?: OrderBy
  min_level?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2EncountermethodnameOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_v2_encountermethod?: PokemonV2EncountermethodOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2LocationareaencounterrateOrderBy = {
  encounter_method_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  pokemon_v2_encountermethod?: PokemonV2EncountermethodOrderBy
  pokemon_v2_locationarea?: PokemonV2LocationareaOrderBy
  pokemon_v2_version?: PokemonV2VersionOrderBy
  rate?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2LocationareaOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
  name?: OrderBy
  pokemon_v2_encounters_aggregate?: PokemonV2EncounterAggregateOrderBy
  pokemon_v2_location?: PokemonV2LocationOrderBy
  pokemon_v2_locationareaencounterrates_aggregate?: PokemonV2LocationareaencounterrateAggregateOrderBy
  pokemon_v2_locationareanames_aggregate?: PokemonV2LocationareanameAggregateOrderBy
}
export type PokemonV2LocationOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_locationareas_aggregate?: PokemonV2LocationareaAggregateOrderBy
  pokemon_v2_locationgameindices_aggregate?: PokemonV2LocationgameindexAggregateOrderBy
  pokemon_v2_locationnames_aggregate?: PokemonV2LocationnameAggregateOrderBy
  pokemon_v2_pokemonevolutions_aggregate?: PokemonV2PokemonevolutionAggregateOrderBy
  pokemon_v2_region?: PokemonV2RegionOrderBy
  region_id?: OrderBy
}
export type PokemonV2LocationareaAggregateOrderBy = {
  avg?: PokemonV2LocationareaAvgOrderBy
  count?: OrderBy
  max?: PokemonV2LocationareaMaxOrderBy
  min?: PokemonV2LocationareaMinOrderBy
  stddev?: PokemonV2LocationareaStddevOrderBy
  stddev_pop?: PokemonV2LocationareaStddevPopOrderBy
  stddev_samp?: PokemonV2LocationareaStddevSampOrderBy
  sum?: PokemonV2LocationareaSumOrderBy
  var_pop?: PokemonV2LocationareaVarPopOrderBy
  var_samp?: PokemonV2LocationareaVarSampOrderBy
  variance?: PokemonV2LocationareaVarianceOrderBy
}
export type PokemonV2LocationareaAvgOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationareaMaxOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2LocationareaMinOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2LocationareaStddevOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationareaStddevPopOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationareaStddevSampOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationareaSumOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationareaVarPopOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationareaVarSampOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2LocationareaVarianceOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
}
export type PokemonV2PokemonevolutionAggregateOrderBy = {
  avg?: PokemonV2PokemonevolutionAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonevolutionMaxOrderBy
  min?: PokemonV2PokemonevolutionMinOrderBy
  stddev?: PokemonV2PokemonevolutionStddevOrderBy
  stddev_pop?: PokemonV2PokemonevolutionStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonevolutionStddevSampOrderBy
  sum?: PokemonV2PokemonevolutionSumOrderBy
  var_pop?: PokemonV2PokemonevolutionVarPopOrderBy
  var_samp?: PokemonV2PokemonevolutionVarSampOrderBy
  variance?: PokemonV2PokemonevolutionVarianceOrderBy
}
export type PokemonV2PokemonevolutionAvgOrderBy = {
  evolution_item_id?: OrderBy
  evolution_trigger_id?: OrderBy
  evolved_species_id?: OrderBy
  gender_id?: OrderBy
  held_item_id?: OrderBy
  id?: OrderBy
  known_move_id?: OrderBy
  known_move_type_id?: OrderBy
  location_id?: OrderBy
  min_affection?: OrderBy
  min_beauty?: OrderBy
  min_happiness?: OrderBy
  min_level?: OrderBy
  party_species_id?: OrderBy
  party_type_id?: OrderBy
  relative_physical_stats?: OrderBy
  trade_species_id?: OrderBy
}
export type PokemonV2PokemonevolutionMaxOrderBy = {
  evolution_item_id?: OrderBy
  evolution_trigger_id?: OrderBy
  evolved_species_id?: OrderBy
  gender_id?: OrderBy
  held_item_id?: OrderBy
  id?: OrderBy
  known_move_id?: OrderBy
  known_move_type_id?: OrderBy
  location_id?: OrderBy
  min_affection?: OrderBy
  min_beauty?: OrderBy
  min_happiness?: OrderBy
  min_level?: OrderBy
  party_species_id?: OrderBy
  party_type_id?: OrderBy
  relative_physical_stats?: OrderBy
  time_of_day?: OrderBy
  trade_species_id?: OrderBy
}
export type PokemonV2PokemonevolutionMinOrderBy = {
  evolution_item_id?: OrderBy
  evolution_trigger_id?: OrderBy
  evolved_species_id?: OrderBy
  gender_id?: OrderBy
  held_item_id?: OrderBy
  id?: OrderBy
  known_move_id?: OrderBy
  known_move_type_id?: OrderBy
  location_id?: OrderBy
  min_affection?: OrderBy
  min_beauty?: OrderBy
  min_happiness?: OrderBy
  min_level?: OrderBy
  party_species_id?: OrderBy
  party_type_id?: OrderBy
  relative_physical_stats?: OrderBy
  time_of_day?: OrderBy
  trade_species_id?: OrderBy
}
export type PokemonV2PokemonevolutionStddevOrderBy = {
  evolution_item_id?: OrderBy
  evolution_trigger_id?: OrderBy
  evolved_species_id?: OrderBy
  gender_id?: OrderBy
  held_item_id?: OrderBy
  id?: OrderBy
  known_move_id?: OrderBy
  known_move_type_id?: OrderBy
  location_id?: OrderBy
  min_affection?: OrderBy
  min_beauty?: OrderBy
  min_happiness?: OrderBy
  min_level?: OrderBy
  party_species_id?: OrderBy
  party_type_id?: OrderBy
  relative_physical_stats?: OrderBy
  trade_species_id?: OrderBy
}
export type PokemonV2PokemonevolutionStddevPopOrderBy = {
  evolution_item_id?: OrderBy
  evolution_trigger_id?: OrderBy
  evolved_species_id?: OrderBy
  gender_id?: OrderBy
  held_item_id?: OrderBy
  id?: OrderBy
  known_move_id?: OrderBy
  known_move_type_id?: OrderBy
  location_id?: OrderBy
  min_affection?: OrderBy
  min_beauty?: OrderBy
  min_happiness?: OrderBy
  min_level?: OrderBy
  party_species_id?: OrderBy
  party_type_id?: OrderBy
  relative_physical_stats?: OrderBy
  trade_species_id?: OrderBy
}
export type PokemonV2PokemonevolutionStddevSampOrderBy = {
  evolution_item_id?: OrderBy
  evolution_trigger_id?: OrderBy
  evolved_species_id?: OrderBy
  gender_id?: OrderBy
  held_item_id?: OrderBy
  id?: OrderBy
  known_move_id?: OrderBy
  known_move_type_id?: OrderBy
  location_id?: OrderBy
  min_affection?: OrderBy
  min_beauty?: OrderBy
  min_happiness?: OrderBy
  min_level?: OrderBy
  party_species_id?: OrderBy
  party_type_id?: OrderBy
  relative_physical_stats?: OrderBy
  trade_species_id?: OrderBy
}
export type PokemonV2PokemonevolutionSumOrderBy = {
  evolution_item_id?: OrderBy
  evolution_trigger_id?: OrderBy
  evolved_species_id?: OrderBy
  gender_id?: OrderBy
  held_item_id?: OrderBy
  id?: OrderBy
  known_move_id?: OrderBy
  known_move_type_id?: OrderBy
  location_id?: OrderBy
  min_affection?: OrderBy
  min_beauty?: OrderBy
  min_happiness?: OrderBy
  min_level?: OrderBy
  party_species_id?: OrderBy
  party_type_id?: OrderBy
  relative_physical_stats?: OrderBy
  trade_species_id?: OrderBy
}
export type PokemonV2PokemonevolutionVarPopOrderBy = {
  evolution_item_id?: OrderBy
  evolution_trigger_id?: OrderBy
  evolved_species_id?: OrderBy
  gender_id?: OrderBy
  held_item_id?: OrderBy
  id?: OrderBy
  known_move_id?: OrderBy
  known_move_type_id?: OrderBy
  location_id?: OrderBy
  min_affection?: OrderBy
  min_beauty?: OrderBy
  min_happiness?: OrderBy
  min_level?: OrderBy
  party_species_id?: OrderBy
  party_type_id?: OrderBy
  relative_physical_stats?: OrderBy
  trade_species_id?: OrderBy
}
export type PokemonV2PokemonevolutionVarSampOrderBy = {
  evolution_item_id?: OrderBy
  evolution_trigger_id?: OrderBy
  evolved_species_id?: OrderBy
  gender_id?: OrderBy
  held_item_id?: OrderBy
  id?: OrderBy
  known_move_id?: OrderBy
  known_move_type_id?: OrderBy
  location_id?: OrderBy
  min_affection?: OrderBy
  min_beauty?: OrderBy
  min_happiness?: OrderBy
  min_level?: OrderBy
  party_species_id?: OrderBy
  party_type_id?: OrderBy
  relative_physical_stats?: OrderBy
  trade_species_id?: OrderBy
}
export type PokemonV2PokemonevolutionVarianceOrderBy = {
  evolution_item_id?: OrderBy
  evolution_trigger_id?: OrderBy
  evolved_species_id?: OrderBy
  gender_id?: OrderBy
  held_item_id?: OrderBy
  id?: OrderBy
  known_move_id?: OrderBy
  known_move_type_id?: OrderBy
  location_id?: OrderBy
  min_affection?: OrderBy
  min_beauty?: OrderBy
  min_happiness?: OrderBy
  min_level?: OrderBy
  party_species_id?: OrderBy
  party_type_id?: OrderBy
  relative_physical_stats?: OrderBy
  trade_species_id?: OrderBy
}
export type PokemonV2VersionOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_encounters_aggregate?: PokemonV2EncounterAggregateOrderBy
  pokemon_v2_locationareaencounterrates_aggregate?: PokemonV2LocationareaencounterrateAggregateOrderBy
  pokemon_v2_pokemongameindices_aggregate?: PokemonV2PokemongameindexAggregateOrderBy
  pokemon_v2_pokemonitems_aggregate?: PokemonV2PokemonitemAggregateOrderBy
  pokemon_v2_pokemonspeciesflavortexts_aggregate?: PokemonV2PokemonspeciesflavortextAggregateOrderBy
  pokemon_v2_versiongroup?: PokemonV2VersiongroupOrderBy
  pokemon_v2_versionnames_aggregate?: PokemonV2VersionnameAggregateOrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemongameindexAggregateOrderBy = {
  avg?: PokemonV2PokemongameindexAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemongameindexMaxOrderBy
  min?: PokemonV2PokemongameindexMinOrderBy
  stddev?: PokemonV2PokemongameindexStddevOrderBy
  stddev_pop?: PokemonV2PokemongameindexStddevPopOrderBy
  stddev_samp?: PokemonV2PokemongameindexStddevSampOrderBy
  sum?: PokemonV2PokemongameindexSumOrderBy
  var_pop?: PokemonV2PokemongameindexVarPopOrderBy
  var_samp?: PokemonV2PokemongameindexVarSampOrderBy
  variance?: PokemonV2PokemongameindexVarianceOrderBy
}
export type PokemonV2PokemongameindexAvgOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemongameindexMaxOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemongameindexMinOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemongameindexStddevOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemongameindexStddevPopOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemongameindexStddevSampOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemongameindexSumOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemongameindexVarPopOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemongameindexVarSampOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemongameindexVarianceOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonitemAggregateOrderBy = {
  avg?: PokemonV2PokemonitemAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonitemMaxOrderBy
  min?: PokemonV2PokemonitemMinOrderBy
  stddev?: PokemonV2PokemonitemStddevOrderBy
  stddev_pop?: PokemonV2PokemonitemStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonitemStddevSampOrderBy
  sum?: PokemonV2PokemonitemSumOrderBy
  var_pop?: PokemonV2PokemonitemVarPopOrderBy
  var_samp?: PokemonV2PokemonitemVarSampOrderBy
  variance?: PokemonV2PokemonitemVarianceOrderBy
}
export type PokemonV2PokemonitemAvgOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  pokemon_id?: OrderBy
  rarity?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonitemMaxOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  pokemon_id?: OrderBy
  rarity?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonitemMinOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  pokemon_id?: OrderBy
  rarity?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonitemStddevOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  pokemon_id?: OrderBy
  rarity?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonitemStddevPopOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  pokemon_id?: OrderBy
  rarity?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonitemStddevSampOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  pokemon_id?: OrderBy
  rarity?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonitemSumOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  pokemon_id?: OrderBy
  rarity?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonitemVarPopOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  pokemon_id?: OrderBy
  rarity?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonitemVarSampOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  pokemon_id?: OrderBy
  rarity?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonitemVarianceOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  pokemon_id?: OrderBy
  rarity?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2EncounterOrderBy = {
  encounter_slot_id?: OrderBy
  id?: OrderBy
  location_area_id?: OrderBy
  max_level?: OrderBy
  min_level?: OrderBy
  pokemon_id?: OrderBy
  pokemon_v2_encounterconditionvaluemaps_aggregate?: PokemonV2EncounterconditionvaluemapAggregateOrderBy
  pokemon_v2_encounterslot?: PokemonV2EncounterslotOrderBy
  pokemon_v2_locationarea?: PokemonV2LocationareaOrderBy
  pokemon_v2_pokemon?: PokemonV2PokemonOrderBy
  pokemon_v2_version?: PokemonV2VersionOrderBy
  version_id?: OrderBy
}
export type PokemonV2EncounterconditionvaluemapAggregateOrderBy = {
  avg?: PokemonV2EncounterconditionvaluemapAvgOrderBy
  count?: OrderBy
  max?: PokemonV2EncounterconditionvaluemapMaxOrderBy
  min?: PokemonV2EncounterconditionvaluemapMinOrderBy
  stddev?: PokemonV2EncounterconditionvaluemapStddevOrderBy
  stddev_pop?: PokemonV2EncounterconditionvaluemapStddevPopOrderBy
  stddev_samp?: PokemonV2EncounterconditionvaluemapStddevSampOrderBy
  sum?: PokemonV2EncounterconditionvaluemapSumOrderBy
  var_pop?: PokemonV2EncounterconditionvaluemapVarPopOrderBy
  var_samp?: PokemonV2EncounterconditionvaluemapVarSampOrderBy
  variance?: PokemonV2EncounterconditionvaluemapVarianceOrderBy
}
export type PokemonV2EncounterconditionvaluemapAvgOrderBy = {
  encounter_condition_value_id?: OrderBy
  encounter_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EncounterconditionvaluemapMaxOrderBy = {
  encounter_condition_value_id?: OrderBy
  encounter_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EncounterconditionvaluemapMinOrderBy = {
  encounter_condition_value_id?: OrderBy
  encounter_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EncounterconditionvaluemapStddevOrderBy = {
  encounter_condition_value_id?: OrderBy
  encounter_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EncounterconditionvaluemapStddevPopOrderBy = {
  encounter_condition_value_id?: OrderBy
  encounter_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EncounterconditionvaluemapStddevSampOrderBy = {
  encounter_condition_value_id?: OrderBy
  encounter_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EncounterconditionvaluemapSumOrderBy = {
  encounter_condition_value_id?: OrderBy
  encounter_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EncounterconditionvaluemapVarPopOrderBy = {
  encounter_condition_value_id?: OrderBy
  encounter_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EncounterconditionvaluemapVarSampOrderBy = {
  encounter_condition_value_id?: OrderBy
  encounter_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EncounterconditionvaluemapVarianceOrderBy = {
  encounter_condition_value_id?: OrderBy
  encounter_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2PokemonOrderBy = {
  base_experience?: OrderBy
  height?: OrderBy
  id?: OrderBy
  is_default?: OrderBy
  name?: OrderBy
  order?: OrderBy
  pokemon_species_id?: OrderBy
  pokemon_v2_encounters_aggregate?: PokemonV2EncounterAggregateOrderBy
  pokemon_v2_pokemonabilities_aggregate?: PokemonV2PokemonabilityAggregateOrderBy
  pokemon_v2_pokemonforms_aggregate?: PokemonV2PokemonformAggregateOrderBy
  pokemon_v2_pokemongameindices_aggregate?: PokemonV2PokemongameindexAggregateOrderBy
  pokemon_v2_pokemonitems_aggregate?: PokemonV2PokemonitemAggregateOrderBy
  pokemon_v2_pokemonmoves_aggregate?: PokemonV2PokemonmoveAggregateOrderBy
  pokemon_v2_pokemonspecy?: PokemonV2PokemonspeciesOrderBy
  pokemon_v2_pokemonsprites_aggregate?: PokemonV2PokemonspritesAggregateOrderBy
  pokemon_v2_pokemonstats_aggregate?: PokemonV2PokemonstatAggregateOrderBy
  pokemon_v2_pokemontypepasts_aggregate?: PokemonV2PokemontypepastAggregateOrderBy
  pokemon_v2_pokemontypes_aggregate?: PokemonV2PokemontypeAggregateOrderBy
  weight?: OrderBy
}
export type PokemonV2PokemonspeciesOrderBy = {
  base_happiness?: OrderBy
  capture_rate?: OrderBy
  evolution_chain_id?: OrderBy
  evolves_from_species_id?: OrderBy
  forms_switchable?: OrderBy
  gender_rate?: OrderBy
  generation_id?: OrderBy
  growth_rate_id?: OrderBy
  has_gender_differences?: OrderBy
  hatch_counter?: OrderBy
  id?: OrderBy
  is_baby?: OrderBy
  is_legendary?: OrderBy
  is_mythical?: OrderBy
  name?: OrderBy
  order?: OrderBy
  pokemonV2PokemonevolutionsByPartySpeciesId_aggregate?: PokemonV2PokemonevolutionAggregateOrderBy
  pokemonV2PokemonevolutionsByTradeSpeciesId_aggregate?: PokemonV2PokemonevolutionAggregateOrderBy
  pokemon_color_id?: OrderBy
  pokemon_habitat_id?: OrderBy
  pokemon_shape_id?: OrderBy
  pokemon_v2_evolutionchain?: PokemonV2EvolutionchainOrderBy
  pokemon_v2_generation?: PokemonV2GenerationOrderBy
  pokemon_v2_growthrate?: PokemonV2GrowthrateOrderBy
  pokemon_v2_palparks_aggregate?: PokemonV2PalparkAggregateOrderBy
  pokemon_v2_pokemoncolor?: PokemonV2PokemoncolorOrderBy
  pokemon_v2_pokemondexnumbers_aggregate?: PokemonV2PokemondexnumberAggregateOrderBy
  pokemon_v2_pokemonegggroups_aggregate?: PokemonV2PokemonegggroupAggregateOrderBy
  pokemon_v2_pokemonevolutions_aggregate?: PokemonV2PokemonevolutionAggregateOrderBy
  pokemon_v2_pokemonhabitat?: PokemonV2PokemonhabitatOrderBy
  pokemon_v2_pokemons_aggregate?: PokemonV2PokemonAggregateOrderBy
  pokemon_v2_pokemonshape?: PokemonV2PokemonshapeOrderBy
  pokemon_v2_pokemonspecies_aggregate?: PokemonV2PokemonspeciesAggregateOrderBy
  pokemon_v2_pokemonspeciesdescriptions_aggregate?: PokemonV2PokemonspeciesdescriptionAggregateOrderBy
  pokemon_v2_pokemonspeciesflavortexts_aggregate?: PokemonV2PokemonspeciesflavortextAggregateOrderBy
  pokemon_v2_pokemonspeciesnames_aggregate?: PokemonV2PokemonspeciesnameAggregateOrderBy
  pokemon_v2_pokemonspecy?: PokemonV2PokemonspeciesOrderBy
}
export type PokemonV2EvolutionchainOrderBy = {
  baby_trigger_item_id?: OrderBy
  id?: OrderBy
  pokemon_v2_item?: PokemonV2ItemOrderBy
  pokemon_v2_pokemonspecies_aggregate?: PokemonV2PokemonspeciesAggregateOrderBy
}
export type PokemonV2ItemOrderBy = {
  cost?: OrderBy
  fling_power?: OrderBy
  id?: OrderBy
  item_category_id?: OrderBy
  item_fling_effect_id?: OrderBy
  name?: OrderBy
  pokemonV2PokemonevolutionsByHeldItemId_aggregate?: PokemonV2PokemonevolutionAggregateOrderBy
  pokemon_v2_berries_aggregate?: PokemonV2BerryAggregateOrderBy
  pokemon_v2_evolutionchains_aggregate?: PokemonV2EvolutionchainAggregateOrderBy
  pokemon_v2_itemattributemaps_aggregate?: PokemonV2ItemattributemapAggregateOrderBy
  pokemon_v2_itemcategory?: PokemonV2ItemcategoryOrderBy
  pokemon_v2_itemeffecttexts_aggregate?: PokemonV2ItemeffecttextAggregateOrderBy
  pokemon_v2_itemflavortexts_aggregate?: PokemonV2ItemflavortextAggregateOrderBy
  pokemon_v2_itemflingeffect?: PokemonV2ItemflingeffectOrderBy
  pokemon_v2_itemgameindices_aggregate?: PokemonV2ItemgameindexAggregateOrderBy
  pokemon_v2_itemnames_aggregate?: PokemonV2ItemnameAggregateOrderBy
  pokemon_v2_itemsprites_aggregate?: PokemonV2ItemspritesAggregateOrderBy
  pokemon_v2_machines_aggregate?: PokemonV2MachineAggregateOrderBy
  pokemon_v2_pokemonevolutions_aggregate?: PokemonV2PokemonevolutionAggregateOrderBy
  pokemon_v2_pokemonitems_aggregate?: PokemonV2PokemonitemAggregateOrderBy
}
export type PokemonV2BerryAggregateOrderBy = {
  avg?: PokemonV2BerryAvgOrderBy
  count?: OrderBy
  max?: PokemonV2BerryMaxOrderBy
  min?: PokemonV2BerryMinOrderBy
  stddev?: PokemonV2BerryStddevOrderBy
  stddev_pop?: PokemonV2BerryStddevPopOrderBy
  stddev_samp?: PokemonV2BerryStddevSampOrderBy
  sum?: PokemonV2BerrySumOrderBy
  var_pop?: PokemonV2BerryVarPopOrderBy
  var_samp?: PokemonV2BerryVarSampOrderBy
  variance?: PokemonV2BerryVarianceOrderBy
}
export type PokemonV2BerryAvgOrderBy = {
  berry_firmness_id?: OrderBy
  growth_time?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  max_harvest?: OrderBy
  natural_gift_power?: OrderBy
  natural_gift_type_id?: OrderBy
  size?: OrderBy
  smoothness?: OrderBy
  soil_dryness?: OrderBy
}
export type PokemonV2BerryMaxOrderBy = {
  berry_firmness_id?: OrderBy
  growth_time?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  max_harvest?: OrderBy
  name?: OrderBy
  natural_gift_power?: OrderBy
  natural_gift_type_id?: OrderBy
  size?: OrderBy
  smoothness?: OrderBy
  soil_dryness?: OrderBy
}
export type PokemonV2BerryMinOrderBy = {
  berry_firmness_id?: OrderBy
  growth_time?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  max_harvest?: OrderBy
  name?: OrderBy
  natural_gift_power?: OrderBy
  natural_gift_type_id?: OrderBy
  size?: OrderBy
  smoothness?: OrderBy
  soil_dryness?: OrderBy
}
export type PokemonV2BerryStddevOrderBy = {
  berry_firmness_id?: OrderBy
  growth_time?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  max_harvest?: OrderBy
  natural_gift_power?: OrderBy
  natural_gift_type_id?: OrderBy
  size?: OrderBy
  smoothness?: OrderBy
  soil_dryness?: OrderBy
}
export type PokemonV2BerryStddevPopOrderBy = {
  berry_firmness_id?: OrderBy
  growth_time?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  max_harvest?: OrderBy
  natural_gift_power?: OrderBy
  natural_gift_type_id?: OrderBy
  size?: OrderBy
  smoothness?: OrderBy
  soil_dryness?: OrderBy
}
export type PokemonV2BerryStddevSampOrderBy = {
  berry_firmness_id?: OrderBy
  growth_time?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  max_harvest?: OrderBy
  natural_gift_power?: OrderBy
  natural_gift_type_id?: OrderBy
  size?: OrderBy
  smoothness?: OrderBy
  soil_dryness?: OrderBy
}
export type PokemonV2BerrySumOrderBy = {
  berry_firmness_id?: OrderBy
  growth_time?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  max_harvest?: OrderBy
  natural_gift_power?: OrderBy
  natural_gift_type_id?: OrderBy
  size?: OrderBy
  smoothness?: OrderBy
  soil_dryness?: OrderBy
}
export type PokemonV2BerryVarPopOrderBy = {
  berry_firmness_id?: OrderBy
  growth_time?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  max_harvest?: OrderBy
  natural_gift_power?: OrderBy
  natural_gift_type_id?: OrderBy
  size?: OrderBy
  smoothness?: OrderBy
  soil_dryness?: OrderBy
}
export type PokemonV2BerryVarSampOrderBy = {
  berry_firmness_id?: OrderBy
  growth_time?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  max_harvest?: OrderBy
  natural_gift_power?: OrderBy
  natural_gift_type_id?: OrderBy
  size?: OrderBy
  smoothness?: OrderBy
  soil_dryness?: OrderBy
}
export type PokemonV2BerryVarianceOrderBy = {
  berry_firmness_id?: OrderBy
  growth_time?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  max_harvest?: OrderBy
  natural_gift_power?: OrderBy
  natural_gift_type_id?: OrderBy
  size?: OrderBy
  smoothness?: OrderBy
  soil_dryness?: OrderBy
}
export type PokemonV2EvolutionchainAggregateOrderBy = {
  avg?: PokemonV2EvolutionchainAvgOrderBy
  count?: OrderBy
  max?: PokemonV2EvolutionchainMaxOrderBy
  min?: PokemonV2EvolutionchainMinOrderBy
  stddev?: PokemonV2EvolutionchainStddevOrderBy
  stddev_pop?: PokemonV2EvolutionchainStddevPopOrderBy
  stddev_samp?: PokemonV2EvolutionchainStddevSampOrderBy
  sum?: PokemonV2EvolutionchainSumOrderBy
  var_pop?: PokemonV2EvolutionchainVarPopOrderBy
  var_samp?: PokemonV2EvolutionchainVarSampOrderBy
  variance?: PokemonV2EvolutionchainVarianceOrderBy
}
export type PokemonV2EvolutionchainAvgOrderBy = {
  baby_trigger_item_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EvolutionchainMaxOrderBy = {
  baby_trigger_item_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EvolutionchainMinOrderBy = {
  baby_trigger_item_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EvolutionchainStddevOrderBy = {
  baby_trigger_item_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EvolutionchainStddevPopOrderBy = {
  baby_trigger_item_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EvolutionchainStddevSampOrderBy = {
  baby_trigger_item_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EvolutionchainSumOrderBy = {
  baby_trigger_item_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EvolutionchainVarPopOrderBy = {
  baby_trigger_item_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EvolutionchainVarSampOrderBy = {
  baby_trigger_item_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EvolutionchainVarianceOrderBy = {
  baby_trigger_item_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2ItemattributemapAggregateOrderBy = {
  avg?: PokemonV2ItemattributemapAvgOrderBy
  count?: OrderBy
  max?: PokemonV2ItemattributemapMaxOrderBy
  min?: PokemonV2ItemattributemapMinOrderBy
  stddev?: PokemonV2ItemattributemapStddevOrderBy
  stddev_pop?: PokemonV2ItemattributemapStddevPopOrderBy
  stddev_samp?: PokemonV2ItemattributemapStddevSampOrderBy
  sum?: PokemonV2ItemattributemapSumOrderBy
  var_pop?: PokemonV2ItemattributemapVarPopOrderBy
  var_samp?: PokemonV2ItemattributemapVarSampOrderBy
  variance?: PokemonV2ItemattributemapVarianceOrderBy
}
export type PokemonV2ItemattributemapAvgOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemattributemapMaxOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemattributemapMinOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemattributemapStddevOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemattributemapStddevPopOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemattributemapStddevSampOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemattributemapSumOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemattributemapVarPopOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemattributemapVarSampOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemattributemapVarianceOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemcategoryOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
  name?: OrderBy
  pokemon_v2_itemcategorynames_aggregate?: PokemonV2ItemcategorynameAggregateOrderBy
  pokemon_v2_itempocket?: PokemonV2ItempocketOrderBy
  pokemon_v2_items_aggregate?: PokemonV2ItemAggregateOrderBy
}
export type PokemonV2ItempocketOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_itemcategories_aggregate?: PokemonV2ItemcategoryAggregateOrderBy
  pokemon_v2_itempocketnames_aggregate?: PokemonV2ItempocketnameAggregateOrderBy
}
export type PokemonV2ItemcategoryAggregateOrderBy = {
  avg?: PokemonV2ItemcategoryAvgOrderBy
  count?: OrderBy
  max?: PokemonV2ItemcategoryMaxOrderBy
  min?: PokemonV2ItemcategoryMinOrderBy
  stddev?: PokemonV2ItemcategoryStddevOrderBy
  stddev_pop?: PokemonV2ItemcategoryStddevPopOrderBy
  stddev_samp?: PokemonV2ItemcategoryStddevSampOrderBy
  sum?: PokemonV2ItemcategorySumOrderBy
  var_pop?: PokemonV2ItemcategoryVarPopOrderBy
  var_samp?: PokemonV2ItemcategoryVarSampOrderBy
  variance?: PokemonV2ItemcategoryVarianceOrderBy
}
export type PokemonV2ItemcategoryAvgOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
}
export type PokemonV2ItemcategoryMaxOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2ItemcategoryMinOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2ItemcategoryStddevOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
}
export type PokemonV2ItemcategoryStddevPopOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
}
export type PokemonV2ItemcategoryStddevSampOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
}
export type PokemonV2ItemcategorySumOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
}
export type PokemonV2ItemcategoryVarPopOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
}
export type PokemonV2ItemcategoryVarSampOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
}
export type PokemonV2ItemcategoryVarianceOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
}
export type PokemonV2ItemAggregateOrderBy = {
  avg?: PokemonV2ItemAvgOrderBy
  count?: OrderBy
  max?: PokemonV2ItemMaxOrderBy
  min?: PokemonV2ItemMinOrderBy
  stddev?: PokemonV2ItemStddevOrderBy
  stddev_pop?: PokemonV2ItemStddevPopOrderBy
  stddev_samp?: PokemonV2ItemStddevSampOrderBy
  sum?: PokemonV2ItemSumOrderBy
  var_pop?: PokemonV2ItemVarPopOrderBy
  var_samp?: PokemonV2ItemVarSampOrderBy
  variance?: PokemonV2ItemVarianceOrderBy
}
export type PokemonV2ItemAvgOrderBy = {
  cost?: OrderBy
  fling_power?: OrderBy
  id?: OrderBy
  item_category_id?: OrderBy
  item_fling_effect_id?: OrderBy
}
export type PokemonV2ItemMaxOrderBy = {
  cost?: OrderBy
  fling_power?: OrderBy
  id?: OrderBy
  item_category_id?: OrderBy
  item_fling_effect_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2ItemMinOrderBy = {
  cost?: OrderBy
  fling_power?: OrderBy
  id?: OrderBy
  item_category_id?: OrderBy
  item_fling_effect_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2ItemStddevOrderBy = {
  cost?: OrderBy
  fling_power?: OrderBy
  id?: OrderBy
  item_category_id?: OrderBy
  item_fling_effect_id?: OrderBy
}
export type PokemonV2ItemStddevPopOrderBy = {
  cost?: OrderBy
  fling_power?: OrderBy
  id?: OrderBy
  item_category_id?: OrderBy
  item_fling_effect_id?: OrderBy
}
export type PokemonV2ItemStddevSampOrderBy = {
  cost?: OrderBy
  fling_power?: OrderBy
  id?: OrderBy
  item_category_id?: OrderBy
  item_fling_effect_id?: OrderBy
}
export type PokemonV2ItemSumOrderBy = {
  cost?: OrderBy
  fling_power?: OrderBy
  id?: OrderBy
  item_category_id?: OrderBy
  item_fling_effect_id?: OrderBy
}
export type PokemonV2ItemVarPopOrderBy = {
  cost?: OrderBy
  fling_power?: OrderBy
  id?: OrderBy
  item_category_id?: OrderBy
  item_fling_effect_id?: OrderBy
}
export type PokemonV2ItemVarSampOrderBy = {
  cost?: OrderBy
  fling_power?: OrderBy
  id?: OrderBy
  item_category_id?: OrderBy
  item_fling_effect_id?: OrderBy
}
export type PokemonV2ItemVarianceOrderBy = {
  cost?: OrderBy
  fling_power?: OrderBy
  id?: OrderBy
  item_category_id?: OrderBy
  item_fling_effect_id?: OrderBy
}
export type PokemonV2ItemflingeffectOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_itemflingeffecteffecttexts_aggregate?: PokemonV2ItemflingeffecteffecttextAggregateOrderBy
  pokemon_v2_items_aggregate?: PokemonV2ItemAggregateOrderBy
}
export type PokemonV2ItemspritesAggregateOrderBy = {
  avg?: PokemonV2ItemspritesAvgOrderBy
  count?: OrderBy
  max?: PokemonV2ItemspritesMaxOrderBy
  min?: PokemonV2ItemspritesMinOrderBy
  stddev?: PokemonV2ItemspritesStddevOrderBy
  stddev_pop?: PokemonV2ItemspritesStddevPopOrderBy
  stddev_samp?: PokemonV2ItemspritesStddevSampOrderBy
  sum?: PokemonV2ItemspritesSumOrderBy
  var_pop?: PokemonV2ItemspritesVarPopOrderBy
  var_samp?: PokemonV2ItemspritesVarSampOrderBy
  variance?: PokemonV2ItemspritesVarianceOrderBy
}
export type PokemonV2ItemspritesAvgOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemspritesMaxOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  sprites?: OrderBy
}
export type PokemonV2ItemspritesMinOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  sprites?: OrderBy
}
export type PokemonV2ItemspritesStddevOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemspritesStddevPopOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemspritesStddevSampOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemspritesSumOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemspritesVarPopOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemspritesVarSampOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2ItemspritesVarianceOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
}
export type PokemonV2GrowthrateOrderBy = {
  formula?: OrderBy
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_experiences_aggregate?: PokemonV2ExperienceAggregateOrderBy
  pokemon_v2_growthratedescriptions_aggregate?: PokemonV2GrowthratedescriptionAggregateOrderBy
  pokemon_v2_machines_aggregate?: PokemonV2MachineAggregateOrderBy
  pokemon_v2_pokemonspecies_aggregate?: PokemonV2PokemonspeciesAggregateOrderBy
}
export type PokemonV2ExperienceAggregateOrderBy = {
  avg?: PokemonV2ExperienceAvgOrderBy
  count?: OrderBy
  max?: PokemonV2ExperienceMaxOrderBy
  min?: PokemonV2ExperienceMinOrderBy
  stddev?: PokemonV2ExperienceStddevOrderBy
  stddev_pop?: PokemonV2ExperienceStddevPopOrderBy
  stddev_samp?: PokemonV2ExperienceStddevSampOrderBy
  sum?: PokemonV2ExperienceSumOrderBy
  var_pop?: PokemonV2ExperienceVarPopOrderBy
  var_samp?: PokemonV2ExperienceVarSampOrderBy
  variance?: PokemonV2ExperienceVarianceOrderBy
}
export type PokemonV2ExperienceAvgOrderBy = {
  experience?: OrderBy
  growth_rate_id?: OrderBy
  id?: OrderBy
  level?: OrderBy
}
export type PokemonV2ExperienceMaxOrderBy = {
  experience?: OrderBy
  growth_rate_id?: OrderBy
  id?: OrderBy
  level?: OrderBy
}
export type PokemonV2ExperienceMinOrderBy = {
  experience?: OrderBy
  growth_rate_id?: OrderBy
  id?: OrderBy
  level?: OrderBy
}
export type PokemonV2ExperienceStddevOrderBy = {
  experience?: OrderBy
  growth_rate_id?: OrderBy
  id?: OrderBy
  level?: OrderBy
}
export type PokemonV2ExperienceStddevPopOrderBy = {
  experience?: OrderBy
  growth_rate_id?: OrderBy
  id?: OrderBy
  level?: OrderBy
}
export type PokemonV2ExperienceStddevSampOrderBy = {
  experience?: OrderBy
  growth_rate_id?: OrderBy
  id?: OrderBy
  level?: OrderBy
}
export type PokemonV2ExperienceSumOrderBy = {
  experience?: OrderBy
  growth_rate_id?: OrderBy
  id?: OrderBy
  level?: OrderBy
}
export type PokemonV2ExperienceVarPopOrderBy = {
  experience?: OrderBy
  growth_rate_id?: OrderBy
  id?: OrderBy
  level?: OrderBy
}
export type PokemonV2ExperienceVarSampOrderBy = {
  experience?: OrderBy
  growth_rate_id?: OrderBy
  id?: OrderBy
  level?: OrderBy
}
export type PokemonV2ExperienceVarianceOrderBy = {
  experience?: OrderBy
  growth_rate_id?: OrderBy
  id?: OrderBy
  level?: OrderBy
}
export type PokemonV2PalparkAggregateOrderBy = {
  avg?: PokemonV2PalparkAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PalparkMaxOrderBy
  min?: PokemonV2PalparkMinOrderBy
  stddev?: PokemonV2PalparkStddevOrderBy
  stddev_pop?: PokemonV2PalparkStddevPopOrderBy
  stddev_samp?: PokemonV2PalparkStddevSampOrderBy
  sum?: PokemonV2PalparkSumOrderBy
  var_pop?: PokemonV2PalparkVarPopOrderBy
  var_samp?: PokemonV2PalparkVarSampOrderBy
  variance?: PokemonV2PalparkVarianceOrderBy
}
export type PokemonV2PalparkAvgOrderBy = {
  base_score?: OrderBy
  id?: OrderBy
  pal_park_area_id?: OrderBy
  pokemon_species_id?: OrderBy
  rate?: OrderBy
}
export type PokemonV2PalparkMaxOrderBy = {
  base_score?: OrderBy
  id?: OrderBy
  pal_park_area_id?: OrderBy
  pokemon_species_id?: OrderBy
  rate?: OrderBy
}
export type PokemonV2PalparkMinOrderBy = {
  base_score?: OrderBy
  id?: OrderBy
  pal_park_area_id?: OrderBy
  pokemon_species_id?: OrderBy
  rate?: OrderBy
}
export type PokemonV2PalparkStddevOrderBy = {
  base_score?: OrderBy
  id?: OrderBy
  pal_park_area_id?: OrderBy
  pokemon_species_id?: OrderBy
  rate?: OrderBy
}
export type PokemonV2PalparkStddevPopOrderBy = {
  base_score?: OrderBy
  id?: OrderBy
  pal_park_area_id?: OrderBy
  pokemon_species_id?: OrderBy
  rate?: OrderBy
}
export type PokemonV2PalparkStddevSampOrderBy = {
  base_score?: OrderBy
  id?: OrderBy
  pal_park_area_id?: OrderBy
  pokemon_species_id?: OrderBy
  rate?: OrderBy
}
export type PokemonV2PalparkSumOrderBy = {
  base_score?: OrderBy
  id?: OrderBy
  pal_park_area_id?: OrderBy
  pokemon_species_id?: OrderBy
  rate?: OrderBy
}
export type PokemonV2PalparkVarPopOrderBy = {
  base_score?: OrderBy
  id?: OrderBy
  pal_park_area_id?: OrderBy
  pokemon_species_id?: OrderBy
  rate?: OrderBy
}
export type PokemonV2PalparkVarSampOrderBy = {
  base_score?: OrderBy
  id?: OrderBy
  pal_park_area_id?: OrderBy
  pokemon_species_id?: OrderBy
  rate?: OrderBy
}
export type PokemonV2PalparkVarianceOrderBy = {
  base_score?: OrderBy
  id?: OrderBy
  pal_park_area_id?: OrderBy
  pokemon_species_id?: OrderBy
  rate?: OrderBy
}
export type PokemonV2PokemoncolorOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_pokemoncolornames_aggregate?: PokemonV2PokemoncolornameAggregateOrderBy
  pokemon_v2_pokemonspecies_aggregate?: PokemonV2PokemonspeciesAggregateOrderBy
}
export type PokemonV2PokemondexnumberAggregateOrderBy = {
  avg?: PokemonV2PokemondexnumberAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemondexnumberMaxOrderBy
  min?: PokemonV2PokemondexnumberMinOrderBy
  stddev?: PokemonV2PokemondexnumberStddevOrderBy
  stddev_pop?: PokemonV2PokemondexnumberStddevPopOrderBy
  stddev_samp?: PokemonV2PokemondexnumberStddevSampOrderBy
  sum?: PokemonV2PokemondexnumberSumOrderBy
  var_pop?: PokemonV2PokemondexnumberVarPopOrderBy
  var_samp?: PokemonV2PokemondexnumberVarSampOrderBy
  variance?: PokemonV2PokemondexnumberVarianceOrderBy
}
export type PokemonV2PokemondexnumberAvgOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  pokedex_number?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemondexnumberMaxOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  pokedex_number?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemondexnumberMinOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  pokedex_number?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemondexnumberStddevOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  pokedex_number?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemondexnumberStddevPopOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  pokedex_number?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemondexnumberStddevSampOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  pokedex_number?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemondexnumberSumOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  pokedex_number?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemondexnumberVarPopOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  pokedex_number?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemondexnumberVarSampOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  pokedex_number?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemondexnumberVarianceOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  pokedex_number?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonegggroupAggregateOrderBy = {
  avg?: PokemonV2PokemonegggroupAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonegggroupMaxOrderBy
  min?: PokemonV2PokemonegggroupMinOrderBy
  stddev?: PokemonV2PokemonegggroupStddevOrderBy
  stddev_pop?: PokemonV2PokemonegggroupStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonegggroupStddevSampOrderBy
  sum?: PokemonV2PokemonegggroupSumOrderBy
  var_pop?: PokemonV2PokemonegggroupVarPopOrderBy
  var_samp?: PokemonV2PokemonegggroupVarSampOrderBy
  variance?: PokemonV2PokemonegggroupVarianceOrderBy
}
export type PokemonV2PokemonegggroupAvgOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonegggroupMaxOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonegggroupMinOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonegggroupStddevOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonegggroupStddevPopOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonegggroupStddevSampOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonegggroupSumOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonegggroupVarPopOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonegggroupVarSampOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonegggroupVarianceOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  pokemon_species_id?: OrderBy
}
export type PokemonV2PokemonhabitatOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_pokemonhabitatnames_aggregate?: PokemonV2PokemonhabitatnameAggregateOrderBy
  pokemon_v2_pokemonspecies_aggregate?: PokemonV2PokemonspeciesAggregateOrderBy
}
export type PokemonV2PokemonAggregateOrderBy = {
  avg?: PokemonV2PokemonAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonMaxOrderBy
  min?: PokemonV2PokemonMinOrderBy
  stddev?: PokemonV2PokemonStddevOrderBy
  stddev_pop?: PokemonV2PokemonStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonStddevSampOrderBy
  sum?: PokemonV2PokemonSumOrderBy
  var_pop?: PokemonV2PokemonVarPopOrderBy
  var_samp?: PokemonV2PokemonVarSampOrderBy
  variance?: PokemonV2PokemonVarianceOrderBy
}
export type PokemonV2PokemonAvgOrderBy = {
  base_experience?: OrderBy
  height?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_species_id?: OrderBy
  weight?: OrderBy
}
export type PokemonV2PokemonMaxOrderBy = {
  base_experience?: OrderBy
  height?: OrderBy
  id?: OrderBy
  name?: OrderBy
  order?: OrderBy
  pokemon_species_id?: OrderBy
  weight?: OrderBy
}
export type PokemonV2PokemonMinOrderBy = {
  base_experience?: OrderBy
  height?: OrderBy
  id?: OrderBy
  name?: OrderBy
  order?: OrderBy
  pokemon_species_id?: OrderBy
  weight?: OrderBy
}
export type PokemonV2PokemonStddevOrderBy = {
  base_experience?: OrderBy
  height?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_species_id?: OrderBy
  weight?: OrderBy
}
export type PokemonV2PokemonStddevPopOrderBy = {
  base_experience?: OrderBy
  height?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_species_id?: OrderBy
  weight?: OrderBy
}
export type PokemonV2PokemonStddevSampOrderBy = {
  base_experience?: OrderBy
  height?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_species_id?: OrderBy
  weight?: OrderBy
}
export type PokemonV2PokemonSumOrderBy = {
  base_experience?: OrderBy
  height?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_species_id?: OrderBy
  weight?: OrderBy
}
export type PokemonV2PokemonVarPopOrderBy = {
  base_experience?: OrderBy
  height?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_species_id?: OrderBy
  weight?: OrderBy
}
export type PokemonV2PokemonVarSampOrderBy = {
  base_experience?: OrderBy
  height?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_species_id?: OrderBy
  weight?: OrderBy
}
export type PokemonV2PokemonVarianceOrderBy = {
  base_experience?: OrderBy
  height?: OrderBy
  id?: OrderBy
  order?: OrderBy
  pokemon_species_id?: OrderBy
  weight?: OrderBy
}
export type PokemonV2PokemonshapeOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_pokemonshapenames_aggregate?: PokemonV2PokemonshapenameAggregateOrderBy
  pokemon_v2_pokemonspecies_aggregate?: PokemonV2PokemonspeciesAggregateOrderBy
}
export type PokemonV2PokemonspritesAggregateOrderBy = {
  avg?: PokemonV2PokemonspritesAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonspritesMaxOrderBy
  min?: PokemonV2PokemonspritesMinOrderBy
  stddev?: PokemonV2PokemonspritesStddevOrderBy
  stddev_pop?: PokemonV2PokemonspritesStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonspritesStddevSampOrderBy
  sum?: PokemonV2PokemonspritesSumOrderBy
  var_pop?: PokemonV2PokemonspritesVarPopOrderBy
  var_samp?: PokemonV2PokemonspritesVarSampOrderBy
  variance?: PokemonV2PokemonspritesVarianceOrderBy
}
export type PokemonV2PokemonspritesAvgOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
}
export type PokemonV2PokemonspritesMaxOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
  sprites?: OrderBy
}
export type PokemonV2PokemonspritesMinOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
  sprites?: OrderBy
}
export type PokemonV2PokemonspritesStddevOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
}
export type PokemonV2PokemonspritesStddevPopOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
}
export type PokemonV2PokemonspritesStddevSampOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
}
export type PokemonV2PokemonspritesSumOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
}
export type PokemonV2PokemonspritesVarPopOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
}
export type PokemonV2PokemonspritesVarSampOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
}
export type PokemonV2PokemonspritesVarianceOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
}
export type PokemonV2PokemonstatAggregateOrderBy = {
  avg?: PokemonV2PokemonstatAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonstatMaxOrderBy
  min?: PokemonV2PokemonstatMinOrderBy
  stddev?: PokemonV2PokemonstatStddevOrderBy
  stddev_pop?: PokemonV2PokemonstatStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonstatStddevSampOrderBy
  sum?: PokemonV2PokemonstatSumOrderBy
  var_pop?: PokemonV2PokemonstatVarPopOrderBy
  var_samp?: PokemonV2PokemonstatVarSampOrderBy
  variance?: PokemonV2PokemonstatVarianceOrderBy
}
export type PokemonV2PokemonstatAvgOrderBy = {
  base_stat?: OrderBy
  effort?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2PokemonstatMaxOrderBy = {
  base_stat?: OrderBy
  effort?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2PokemonstatMinOrderBy = {
  base_stat?: OrderBy
  effort?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2PokemonstatStddevOrderBy = {
  base_stat?: OrderBy
  effort?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2PokemonstatStddevPopOrderBy = {
  base_stat?: OrderBy
  effort?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2PokemonstatStddevSampOrderBy = {
  base_stat?: OrderBy
  effort?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2PokemonstatSumOrderBy = {
  base_stat?: OrderBy
  effort?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2PokemonstatVarPopOrderBy = {
  base_stat?: OrderBy
  effort?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2PokemonstatVarSampOrderBy = {
  base_stat?: OrderBy
  effort?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2PokemonstatVarianceOrderBy = {
  base_stat?: OrderBy
  effort?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2PokemontypeAggregateOrderBy = {
  avg?: PokemonV2PokemontypeAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemontypeMaxOrderBy
  min?: PokemonV2PokemontypeMinOrderBy
  stddev?: PokemonV2PokemontypeStddevOrderBy
  stddev_pop?: PokemonV2PokemontypeStddevPopOrderBy
  stddev_samp?: PokemonV2PokemontypeStddevSampOrderBy
  sum?: PokemonV2PokemontypeSumOrderBy
  var_pop?: PokemonV2PokemontypeVarPopOrderBy
  var_samp?: PokemonV2PokemontypeVarSampOrderBy
  variance?: PokemonV2PokemontypeVarianceOrderBy
}
export type PokemonV2PokemontypeAvgOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypeMaxOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypeMinOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypeStddevOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypeStddevPopOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypeStddevSampOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypeSumOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypeVarPopOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypeVarSampOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypeVarianceOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2EncounterconditionvaluemapOrderBy = {
  encounter_condition_value_id?: OrderBy
  encounter_id?: OrderBy
  id?: OrderBy
  pokemon_v2_encounter?: PokemonV2EncounterOrderBy
  pokemon_v2_encounterconditionvalue?: PokemonV2EncounterconditionvalueOrderBy
}
export type PokemonV2EncounterconditionvalueOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
  is_default?: OrderBy
  name?: OrderBy
  pokemon_v2_encountercondition?: PokemonV2EncounterconditionOrderBy
  pokemon_v2_encounterconditionvaluemaps_aggregate?: PokemonV2EncounterconditionvaluemapAggregateOrderBy
  pokemon_v2_encounterconditionvaluenames_aggregate?: PokemonV2EncounterconditionvaluenameAggregateOrderBy
}
export type PokemonV2EncounterconditionOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_encounterconditionnames_aggregate?: PokemonV2EncounterconditionnameAggregateOrderBy
  pokemon_v2_encounterconditionvalues_aggregate?: PokemonV2EncounterconditionvalueAggregateOrderBy
}
export type PokemonV2EncounterconditionvalueAggregateOrderBy = {
  avg?: PokemonV2EncounterconditionvalueAvgOrderBy
  count?: OrderBy
  max?: PokemonV2EncounterconditionvalueMaxOrderBy
  min?: PokemonV2EncounterconditionvalueMinOrderBy
  stddev?: PokemonV2EncounterconditionvalueStddevOrderBy
  stddev_pop?: PokemonV2EncounterconditionvalueStddevPopOrderBy
  stddev_samp?: PokemonV2EncounterconditionvalueStddevSampOrderBy
  sum?: PokemonV2EncounterconditionvalueSumOrderBy
  var_pop?: PokemonV2EncounterconditionvalueVarPopOrderBy
  var_samp?: PokemonV2EncounterconditionvalueVarSampOrderBy
  variance?: PokemonV2EncounterconditionvalueVarianceOrderBy
}
export type PokemonV2EncounterconditionvalueAvgOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EncounterconditionvalueMaxOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
  name?: OrderBy
}
export type PokemonV2EncounterconditionvalueMinOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
  name?: OrderBy
}
export type PokemonV2EncounterconditionvalueStddevOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EncounterconditionvalueStddevPopOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EncounterconditionvalueStddevSampOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EncounterconditionvalueSumOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EncounterconditionvalueVarPopOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EncounterconditionvalueVarSampOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EncounterconditionvalueVarianceOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2EncounterconditionnameOrderBy = {
  encounter_condition_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_v2_encountercondition?: PokemonV2EncounterconditionOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2EncounterconditionvaluenameOrderBy = {
  encounter_condition_value_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_v2_encounterconditionvalue?: PokemonV2EncounterconditionvalueOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2PokemonabilityOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  is_hidden?: OrderBy
  pokemon_id?: OrderBy
  pokemon_v2_ability?: PokemonV2AbilityOrderBy
  pokemon_v2_pokemon?: PokemonV2PokemonOrderBy
  slot?: OrderBy
}
export type PokemonV2PokemonformOrderBy = {
  form_name?: OrderBy
  form_order?: OrderBy
  id?: OrderBy
  is_battle_only?: OrderBy
  is_default?: OrderBy
  is_mega?: OrderBy
  name?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  pokemon_v2_pokemon?: PokemonV2PokemonOrderBy
  pokemon_v2_pokemonformgenerations_aggregate?: PokemonV2PokemonformgenerationAggregateOrderBy
  pokemon_v2_pokemonformnames_aggregate?: PokemonV2PokemonformnameAggregateOrderBy
  pokemon_v2_pokemonformsprites_aggregate?: PokemonV2PokemonformspritesAggregateOrderBy
  pokemon_v2_pokemonformtypes_aggregate?: PokemonV2PokemonformtypeAggregateOrderBy
  pokemon_v2_versiongroup?: PokemonV2VersiongroupOrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonformspritesAggregateOrderBy = {
  avg?: PokemonV2PokemonformspritesAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonformspritesMaxOrderBy
  min?: PokemonV2PokemonformspritesMinOrderBy
  stddev?: PokemonV2PokemonformspritesStddevOrderBy
  stddev_pop?: PokemonV2PokemonformspritesStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonformspritesStddevSampOrderBy
  sum?: PokemonV2PokemonformspritesSumOrderBy
  var_pop?: PokemonV2PokemonformspritesVarPopOrderBy
  var_samp?: PokemonV2PokemonformspritesVarSampOrderBy
  variance?: PokemonV2PokemonformspritesVarianceOrderBy
}
export type PokemonV2PokemonformspritesAvgOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformspritesMaxOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
  sprites?: OrderBy
}
export type PokemonV2PokemonformspritesMinOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
  sprites?: OrderBy
}
export type PokemonV2PokemonformspritesStddevOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformspritesStddevPopOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformspritesStddevSampOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformspritesSumOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformspritesVarPopOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformspritesVarSampOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformspritesVarianceOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
}
export type PokemonV2PokemonformtypeAggregateOrderBy = {
  avg?: PokemonV2PokemonformtypeAvgOrderBy
  count?: OrderBy
  max?: PokemonV2PokemonformtypeMaxOrderBy
  min?: PokemonV2PokemonformtypeMinOrderBy
  stddev?: PokemonV2PokemonformtypeStddevOrderBy
  stddev_pop?: PokemonV2PokemonformtypeStddevPopOrderBy
  stddev_samp?: PokemonV2PokemonformtypeStddevSampOrderBy
  sum?: PokemonV2PokemonformtypeSumOrderBy
  var_pop?: PokemonV2PokemonformtypeVarPopOrderBy
  var_samp?: PokemonV2PokemonformtypeVarSampOrderBy
  variance?: PokemonV2PokemonformtypeVarianceOrderBy
}
export type PokemonV2PokemonformtypeAvgOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemonformtypeMaxOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemonformtypeMinOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemonformtypeStddevOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemonformtypeStddevPopOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemonformtypeStddevSampOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemonformtypeSumOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemonformtypeVarPopOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemonformtypeVarSampOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemonformtypeVarianceOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemonformgenerationOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_form_id?: OrderBy
  pokemon_v2_generation?: PokemonV2GenerationOrderBy
  pokemon_v2_pokemonform?: PokemonV2PokemonformOrderBy
}
export type PokemonV2GenerationnameOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_v2_generation?: PokemonV2GenerationOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2ItemgameindexOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  pokemon_v2_generation?: PokemonV2GenerationOrderBy
  pokemon_v2_item?: PokemonV2ItemOrderBy
}
export type PokemonV2PokemonevolutionOrderBy = {
  evolution_item_id?: OrderBy
  evolution_trigger_id?: OrderBy
  evolved_species_id?: OrderBy
  gender_id?: OrderBy
  held_item_id?: OrderBy
  id?: OrderBy
  known_move_id?: OrderBy
  known_move_type_id?: OrderBy
  location_id?: OrderBy
  min_affection?: OrderBy
  min_beauty?: OrderBy
  min_happiness?: OrderBy
  min_level?: OrderBy
  needs_overworld_rain?: OrderBy
  party_species_id?: OrderBy
  party_type_id?: OrderBy
  pokemonV2ItemByHeldItemId?: PokemonV2ItemOrderBy
  pokemonV2PokemonspecyByPartySpeciesId?: PokemonV2PokemonspeciesOrderBy
  pokemonV2PokemonspecyByTradeSpeciesId?: PokemonV2PokemonspeciesOrderBy
  pokemonV2TypeByPartyTypeId?: PokemonV2TypeOrderBy
  pokemon_v2_evolutiontrigger?: PokemonV2EvolutiontriggerOrderBy
  pokemon_v2_gender?: PokemonV2GenderOrderBy
  pokemon_v2_item?: PokemonV2ItemOrderBy
  pokemon_v2_location?: PokemonV2LocationOrderBy
  pokemon_v2_move?: PokemonV2MoveOrderBy
  pokemon_v2_pokemonspecy?: PokemonV2PokemonspeciesOrderBy
  pokemon_v2_type?: PokemonV2TypeOrderBy
  relative_physical_stats?: OrderBy
  time_of_day?: OrderBy
  trade_species_id?: OrderBy
  turn_upside_down?: OrderBy
}
export type PokemonV2TypeOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
  name?: OrderBy
  pokemonV2PokemonevolutionsByPartyTypeId_aggregate?: PokemonV2PokemonevolutionAggregateOrderBy
  pokemonV2TypeefficaciesByTargetTypeId_aggregate?: PokemonV2TypeefficacyAggregateOrderBy
  pokemon_v2_berries_aggregate?: PokemonV2BerryAggregateOrderBy
  pokemon_v2_generation?: PokemonV2GenerationOrderBy
  pokemon_v2_movechanges_aggregate?: PokemonV2MovechangeAggregateOrderBy
  pokemon_v2_movedamageclass?: PokemonV2MovedamageclassOrderBy
  pokemon_v2_moves_aggregate?: PokemonV2MoveAggregateOrderBy
  pokemon_v2_pokemonevolutions_aggregate?: PokemonV2PokemonevolutionAggregateOrderBy
  pokemon_v2_pokemonformtypes_aggregate?: PokemonV2PokemonformtypeAggregateOrderBy
  pokemon_v2_pokemontypepasts_aggregate?: PokemonV2PokemontypepastAggregateOrderBy
  pokemon_v2_pokemontypes_aggregate?: PokemonV2PokemontypeAggregateOrderBy
  pokemon_v2_typeefficacies_aggregate?: PokemonV2TypeefficacyAggregateOrderBy
  pokemon_v2_typegameindices_aggregate?: PokemonV2TypegameindexAggregateOrderBy
  pokemon_v2_typenames_aggregate?: PokemonV2TypenameAggregateOrderBy
}
export type PokemonV2TypeefficacyAggregateOrderBy = {
  avg?: PokemonV2TypeefficacyAvgOrderBy
  count?: OrderBy
  max?: PokemonV2TypeefficacyMaxOrderBy
  min?: PokemonV2TypeefficacyMinOrderBy
  stddev?: PokemonV2TypeefficacyStddevOrderBy
  stddev_pop?: PokemonV2TypeefficacyStddevPopOrderBy
  stddev_samp?: PokemonV2TypeefficacyStddevSampOrderBy
  sum?: PokemonV2TypeefficacySumOrderBy
  var_pop?: PokemonV2TypeefficacyVarPopOrderBy
  var_samp?: PokemonV2TypeefficacyVarSampOrderBy
  variance?: PokemonV2TypeefficacyVarianceOrderBy
}
export type PokemonV2TypeefficacyAvgOrderBy = {
  damage_factor?: OrderBy
  damage_type_id?: OrderBy
  id?: OrderBy
  target_type_id?: OrderBy
}
export type PokemonV2TypeefficacyMaxOrderBy = {
  damage_factor?: OrderBy
  damage_type_id?: OrderBy
  id?: OrderBy
  target_type_id?: OrderBy
}
export type PokemonV2TypeefficacyMinOrderBy = {
  damage_factor?: OrderBy
  damage_type_id?: OrderBy
  id?: OrderBy
  target_type_id?: OrderBy
}
export type PokemonV2TypeefficacyStddevOrderBy = {
  damage_factor?: OrderBy
  damage_type_id?: OrderBy
  id?: OrderBy
  target_type_id?: OrderBy
}
export type PokemonV2TypeefficacyStddevPopOrderBy = {
  damage_factor?: OrderBy
  damage_type_id?: OrderBy
  id?: OrderBy
  target_type_id?: OrderBy
}
export type PokemonV2TypeefficacyStddevSampOrderBy = {
  damage_factor?: OrderBy
  damage_type_id?: OrderBy
  id?: OrderBy
  target_type_id?: OrderBy
}
export type PokemonV2TypeefficacySumOrderBy = {
  damage_factor?: OrderBy
  damage_type_id?: OrderBy
  id?: OrderBy
  target_type_id?: OrderBy
}
export type PokemonV2TypeefficacyVarPopOrderBy = {
  damage_factor?: OrderBy
  damage_type_id?: OrderBy
  id?: OrderBy
  target_type_id?: OrderBy
}
export type PokemonV2TypeefficacyVarSampOrderBy = {
  damage_factor?: OrderBy
  damage_type_id?: OrderBy
  id?: OrderBy
  target_type_id?: OrderBy
}
export type PokemonV2TypeefficacyVarianceOrderBy = {
  damage_factor?: OrderBy
  damage_type_id?: OrderBy
  id?: OrderBy
  target_type_id?: OrderBy
}
export type PokemonV2MovedamageclassOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_movedamageclassdescriptions_aggregate?: PokemonV2MovedamageclassdescriptionAggregateOrderBy
  pokemon_v2_movedamageclassnames_aggregate?: PokemonV2MovedamageclassnameAggregateOrderBy
  pokemon_v2_moves_aggregate?: PokemonV2MoveAggregateOrderBy
  pokemon_v2_stats_aggregate?: PokemonV2StatAggregateOrderBy
  pokemon_v2_types_aggregate?: PokemonV2TypeAggregateOrderBy
}
export type PokemonV2StatAggregateOrderBy = {
  avg?: PokemonV2StatAvgOrderBy
  count?: OrderBy
  max?: PokemonV2StatMaxOrderBy
  min?: PokemonV2StatMinOrderBy
  stddev?: PokemonV2StatStddevOrderBy
  stddev_pop?: PokemonV2StatStddevPopOrderBy
  stddev_samp?: PokemonV2StatStddevSampOrderBy
  sum?: PokemonV2StatSumOrderBy
  var_pop?: PokemonV2StatVarPopOrderBy
  var_samp?: PokemonV2StatVarSampOrderBy
  variance?: PokemonV2StatVarianceOrderBy
}
export type PokemonV2StatAvgOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2StatMaxOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2StatMinOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2StatStddevOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2StatStddevPopOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2StatStddevSampOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2StatSumOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2StatVarPopOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2StatVarSampOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2StatVarianceOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
}
export type PokemonV2EvolutiontriggerOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_evolutiontriggernames_aggregate?: PokemonV2EvolutiontriggernameAggregateOrderBy
  pokemon_v2_pokemonevolutions_aggregate?: PokemonV2PokemonevolutionAggregateOrderBy
}
export type PokemonV2GenderOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_pokemonevolutions_aggregate?: PokemonV2PokemonevolutionAggregateOrderBy
}
export type PokemonV2MoveOrderBy = {
  accuracy?: OrderBy
  contest_effect_id?: OrderBy
  contest_type_id?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  move_damage_class_id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_target_id?: OrderBy
  name?: OrderBy
  pokemonV2ContestcombosBySecondMoveId_aggregate?: PokemonV2ContestcomboAggregateOrderBy
  pokemonV2SupercontestcombosBySecondMoveId_aggregate?: PokemonV2SupercontestcomboAggregateOrderBy
  pokemon_v2_contestcombos_aggregate?: PokemonV2ContestcomboAggregateOrderBy
  pokemon_v2_contesteffect?: PokemonV2ContesteffectOrderBy
  pokemon_v2_contesttype?: PokemonV2ContesttypeOrderBy
  pokemon_v2_generation?: PokemonV2GenerationOrderBy
  pokemon_v2_machines_aggregate?: PokemonV2MachineAggregateOrderBy
  pokemon_v2_moveattributemaps_aggregate?: PokemonV2MoveattributemapAggregateOrderBy
  pokemon_v2_movechanges_aggregate?: PokemonV2MovechangeAggregateOrderBy
  pokemon_v2_movedamageclass?: PokemonV2MovedamageclassOrderBy
  pokemon_v2_moveeffect?: PokemonV2MoveeffectOrderBy
  pokemon_v2_moveflavortexts_aggregate?: PokemonV2MoveflavortextAggregateOrderBy
  pokemon_v2_movemeta_aggregate?: PokemonV2MovemetaAggregateOrderBy
  pokemon_v2_movemetastatchanges_aggregate?: PokemonV2MovemetastatchangeAggregateOrderBy
  pokemon_v2_movenames_aggregate?: PokemonV2MovenameAggregateOrderBy
  pokemon_v2_movetarget?: PokemonV2MovetargetOrderBy
  pokemon_v2_pokemonevolutions_aggregate?: PokemonV2PokemonevolutionAggregateOrderBy
  pokemon_v2_pokemonmoves_aggregate?: PokemonV2PokemonmoveAggregateOrderBy
  pokemon_v2_supercontestcombos_aggregate?: PokemonV2SupercontestcomboAggregateOrderBy
  pokemon_v2_supercontesteffect?: PokemonV2SupercontesteffectOrderBy
  pokemon_v2_type?: PokemonV2TypeOrderBy
  power?: OrderBy
  pp?: OrderBy
  priority?: OrderBy
  super_contest_effect_id?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2ContestcomboAggregateOrderBy = {
  avg?: PokemonV2ContestcomboAvgOrderBy
  count?: OrderBy
  max?: PokemonV2ContestcomboMaxOrderBy
  min?: PokemonV2ContestcomboMinOrderBy
  stddev?: PokemonV2ContestcomboStddevOrderBy
  stddev_pop?: PokemonV2ContestcomboStddevPopOrderBy
  stddev_samp?: PokemonV2ContestcomboStddevSampOrderBy
  sum?: PokemonV2ContestcomboSumOrderBy
  var_pop?: PokemonV2ContestcomboVarPopOrderBy
  var_samp?: PokemonV2ContestcomboVarSampOrderBy
  variance?: PokemonV2ContestcomboVarianceOrderBy
}
export type PokemonV2ContestcomboAvgOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2ContestcomboMaxOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2ContestcomboMinOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2ContestcomboStddevOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2ContestcomboStddevPopOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2ContestcomboStddevSampOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2ContestcomboSumOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2ContestcomboVarPopOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2ContestcomboVarSampOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2ContestcomboVarianceOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2SupercontestcomboAggregateOrderBy = {
  avg?: PokemonV2SupercontestcomboAvgOrderBy
  count?: OrderBy
  max?: PokemonV2SupercontestcomboMaxOrderBy
  min?: PokemonV2SupercontestcomboMinOrderBy
  stddev?: PokemonV2SupercontestcomboStddevOrderBy
  stddev_pop?: PokemonV2SupercontestcomboStddevPopOrderBy
  stddev_samp?: PokemonV2SupercontestcomboStddevSampOrderBy
  sum?: PokemonV2SupercontestcomboSumOrderBy
  var_pop?: PokemonV2SupercontestcomboVarPopOrderBy
  var_samp?: PokemonV2SupercontestcomboVarSampOrderBy
  variance?: PokemonV2SupercontestcomboVarianceOrderBy
}
export type PokemonV2SupercontestcomboAvgOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2SupercontestcomboMaxOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2SupercontestcomboMinOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2SupercontestcomboStddevOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2SupercontestcomboStddevPopOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2SupercontestcomboStddevSampOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2SupercontestcomboSumOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2SupercontestcomboVarPopOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2SupercontestcomboVarSampOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2SupercontestcomboVarianceOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  second_move_id?: OrderBy
}
export type PokemonV2ContesteffectOrderBy = {
  appeal?: OrderBy
  id?: OrderBy
  jam?: OrderBy
  pokemon_v2_contesteffecteffecttexts_aggregate?: PokemonV2ContesteffecteffecttextAggregateOrderBy
  pokemon_v2_contesteffectflavortexts_aggregate?: PokemonV2ContesteffectflavortextAggregateOrderBy
  pokemon_v2_moves_aggregate?: PokemonV2MoveAggregateOrderBy
}
export type PokemonV2ContesttypeOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_berryflavors_aggregate?: PokemonV2BerryflavorAggregateOrderBy
  pokemon_v2_contesttypenames_aggregate?: PokemonV2ContesttypenameAggregateOrderBy
  pokemon_v2_moves_aggregate?: PokemonV2MoveAggregateOrderBy
}
export type PokemonV2BerryflavorAggregateOrderBy = {
  avg?: PokemonV2BerryflavorAvgOrderBy
  count?: OrderBy
  max?: PokemonV2BerryflavorMaxOrderBy
  min?: PokemonV2BerryflavorMinOrderBy
  stddev?: PokemonV2BerryflavorStddevOrderBy
  stddev_pop?: PokemonV2BerryflavorStddevPopOrderBy
  stddev_samp?: PokemonV2BerryflavorStddevSampOrderBy
  sum?: PokemonV2BerryflavorSumOrderBy
  var_pop?: PokemonV2BerryflavorVarPopOrderBy
  var_samp?: PokemonV2BerryflavorVarSampOrderBy
  variance?: PokemonV2BerryflavorVarianceOrderBy
}
export type PokemonV2BerryflavorAvgOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2BerryflavorMaxOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
  name?: OrderBy
}
export type PokemonV2BerryflavorMinOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
  name?: OrderBy
}
export type PokemonV2BerryflavorStddevOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2BerryflavorStddevPopOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2BerryflavorStddevSampOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2BerryflavorSumOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2BerryflavorVarPopOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2BerryflavorVarSampOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2BerryflavorVarianceOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
}
export type PokemonV2MoveattributemapAggregateOrderBy = {
  avg?: PokemonV2MoveattributemapAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MoveattributemapMaxOrderBy
  min?: PokemonV2MoveattributemapMinOrderBy
  stddev?: PokemonV2MoveattributemapStddevOrderBy
  stddev_pop?: PokemonV2MoveattributemapStddevPopOrderBy
  stddev_samp?: PokemonV2MoveattributemapStddevSampOrderBy
  sum?: PokemonV2MoveattributemapSumOrderBy
  var_pop?: PokemonV2MoveattributemapVarPopOrderBy
  var_samp?: PokemonV2MoveattributemapVarSampOrderBy
  variance?: PokemonV2MoveattributemapVarianceOrderBy
}
export type PokemonV2MoveattributemapAvgOrderBy = {
  id?: OrderBy
  move_attribute_id?: OrderBy
  move_id?: OrderBy
}
export type PokemonV2MoveattributemapMaxOrderBy = {
  id?: OrderBy
  move_attribute_id?: OrderBy
  move_id?: OrderBy
}
export type PokemonV2MoveattributemapMinOrderBy = {
  id?: OrderBy
  move_attribute_id?: OrderBy
  move_id?: OrderBy
}
export type PokemonV2MoveattributemapStddevOrderBy = {
  id?: OrderBy
  move_attribute_id?: OrderBy
  move_id?: OrderBy
}
export type PokemonV2MoveattributemapStddevPopOrderBy = {
  id?: OrderBy
  move_attribute_id?: OrderBy
  move_id?: OrderBy
}
export type PokemonV2MoveattributemapStddevSampOrderBy = {
  id?: OrderBy
  move_attribute_id?: OrderBy
  move_id?: OrderBy
}
export type PokemonV2MoveattributemapSumOrderBy = {
  id?: OrderBy
  move_attribute_id?: OrderBy
  move_id?: OrderBy
}
export type PokemonV2MoveattributemapVarPopOrderBy = {
  id?: OrderBy
  move_attribute_id?: OrderBy
  move_id?: OrderBy
}
export type PokemonV2MoveattributemapVarSampOrderBy = {
  id?: OrderBy
  move_attribute_id?: OrderBy
  move_id?: OrderBy
}
export type PokemonV2MoveattributemapVarianceOrderBy = {
  id?: OrderBy
  move_attribute_id?: OrderBy
  move_id?: OrderBy
}
export type PokemonV2MoveeffectOrderBy = {
  id?: OrderBy
  pokemon_v2_movechanges_aggregate?: PokemonV2MovechangeAggregateOrderBy
  pokemon_v2_moveeffectchanges_aggregate?: PokemonV2MoveeffectchangeAggregateOrderBy
  pokemon_v2_moveeffecteffecttexts_aggregate?: PokemonV2MoveeffecteffecttextAggregateOrderBy
  pokemon_v2_moves_aggregate?: PokemonV2MoveAggregateOrderBy
}
export type PokemonV2MovemetaAggregateOrderBy = {
  avg?: PokemonV2MovemetaAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MovemetaMaxOrderBy
  min?: PokemonV2MovemetaMinOrderBy
  stddev?: PokemonV2MovemetaStddevOrderBy
  stddev_pop?: PokemonV2MovemetaStddevPopOrderBy
  stddev_samp?: PokemonV2MovemetaStddevSampOrderBy
  sum?: PokemonV2MovemetaSumOrderBy
  var_pop?: PokemonV2MovemetaVarPopOrderBy
  var_samp?: PokemonV2MovemetaVarSampOrderBy
  variance?: PokemonV2MovemetaVarianceOrderBy
}
export type PokemonV2MovemetaAvgOrderBy = {
  ailment_chance?: OrderBy
  crit_rate?: OrderBy
  drain?: OrderBy
  flinch_chance?: OrderBy
  healing?: OrderBy
  id?: OrderBy
  max_hits?: OrderBy
  max_turns?: OrderBy
  min_hits?: OrderBy
  min_turns?: OrderBy
  move_id?: OrderBy
  move_meta_ailment_id?: OrderBy
  move_meta_category_id?: OrderBy
  stat_chance?: OrderBy
}
export type PokemonV2MovemetaMaxOrderBy = {
  ailment_chance?: OrderBy
  crit_rate?: OrderBy
  drain?: OrderBy
  flinch_chance?: OrderBy
  healing?: OrderBy
  id?: OrderBy
  max_hits?: OrderBy
  max_turns?: OrderBy
  min_hits?: OrderBy
  min_turns?: OrderBy
  move_id?: OrderBy
  move_meta_ailment_id?: OrderBy
  move_meta_category_id?: OrderBy
  stat_chance?: OrderBy
}
export type PokemonV2MovemetaMinOrderBy = {
  ailment_chance?: OrderBy
  crit_rate?: OrderBy
  drain?: OrderBy
  flinch_chance?: OrderBy
  healing?: OrderBy
  id?: OrderBy
  max_hits?: OrderBy
  max_turns?: OrderBy
  min_hits?: OrderBy
  min_turns?: OrderBy
  move_id?: OrderBy
  move_meta_ailment_id?: OrderBy
  move_meta_category_id?: OrderBy
  stat_chance?: OrderBy
}
export type PokemonV2MovemetaStddevOrderBy = {
  ailment_chance?: OrderBy
  crit_rate?: OrderBy
  drain?: OrderBy
  flinch_chance?: OrderBy
  healing?: OrderBy
  id?: OrderBy
  max_hits?: OrderBy
  max_turns?: OrderBy
  min_hits?: OrderBy
  min_turns?: OrderBy
  move_id?: OrderBy
  move_meta_ailment_id?: OrderBy
  move_meta_category_id?: OrderBy
  stat_chance?: OrderBy
}
export type PokemonV2MovemetaStddevPopOrderBy = {
  ailment_chance?: OrderBy
  crit_rate?: OrderBy
  drain?: OrderBy
  flinch_chance?: OrderBy
  healing?: OrderBy
  id?: OrderBy
  max_hits?: OrderBy
  max_turns?: OrderBy
  min_hits?: OrderBy
  min_turns?: OrderBy
  move_id?: OrderBy
  move_meta_ailment_id?: OrderBy
  move_meta_category_id?: OrderBy
  stat_chance?: OrderBy
}
export type PokemonV2MovemetaStddevSampOrderBy = {
  ailment_chance?: OrderBy
  crit_rate?: OrderBy
  drain?: OrderBy
  flinch_chance?: OrderBy
  healing?: OrderBy
  id?: OrderBy
  max_hits?: OrderBy
  max_turns?: OrderBy
  min_hits?: OrderBy
  min_turns?: OrderBy
  move_id?: OrderBy
  move_meta_ailment_id?: OrderBy
  move_meta_category_id?: OrderBy
  stat_chance?: OrderBy
}
export type PokemonV2MovemetaSumOrderBy = {
  ailment_chance?: OrderBy
  crit_rate?: OrderBy
  drain?: OrderBy
  flinch_chance?: OrderBy
  healing?: OrderBy
  id?: OrderBy
  max_hits?: OrderBy
  max_turns?: OrderBy
  min_hits?: OrderBy
  min_turns?: OrderBy
  move_id?: OrderBy
  move_meta_ailment_id?: OrderBy
  move_meta_category_id?: OrderBy
  stat_chance?: OrderBy
}
export type PokemonV2MovemetaVarPopOrderBy = {
  ailment_chance?: OrderBy
  crit_rate?: OrderBy
  drain?: OrderBy
  flinch_chance?: OrderBy
  healing?: OrderBy
  id?: OrderBy
  max_hits?: OrderBy
  max_turns?: OrderBy
  min_hits?: OrderBy
  min_turns?: OrderBy
  move_id?: OrderBy
  move_meta_ailment_id?: OrderBy
  move_meta_category_id?: OrderBy
  stat_chance?: OrderBy
}
export type PokemonV2MovemetaVarSampOrderBy = {
  ailment_chance?: OrderBy
  crit_rate?: OrderBy
  drain?: OrderBy
  flinch_chance?: OrderBy
  healing?: OrderBy
  id?: OrderBy
  max_hits?: OrderBy
  max_turns?: OrderBy
  min_hits?: OrderBy
  min_turns?: OrderBy
  move_id?: OrderBy
  move_meta_ailment_id?: OrderBy
  move_meta_category_id?: OrderBy
  stat_chance?: OrderBy
}
export type PokemonV2MovemetaVarianceOrderBy = {
  ailment_chance?: OrderBy
  crit_rate?: OrderBy
  drain?: OrderBy
  flinch_chance?: OrderBy
  healing?: OrderBy
  id?: OrderBy
  max_hits?: OrderBy
  max_turns?: OrderBy
  min_hits?: OrderBy
  min_turns?: OrderBy
  move_id?: OrderBy
  move_meta_ailment_id?: OrderBy
  move_meta_category_id?: OrderBy
  stat_chance?: OrderBy
}
export type PokemonV2MovemetastatchangeAggregateOrderBy = {
  avg?: PokemonV2MovemetastatchangeAvgOrderBy
  count?: OrderBy
  max?: PokemonV2MovemetastatchangeMaxOrderBy
  min?: PokemonV2MovemetastatchangeMinOrderBy
  stddev?: PokemonV2MovemetastatchangeStddevOrderBy
  stddev_pop?: PokemonV2MovemetastatchangeStddevPopOrderBy
  stddev_samp?: PokemonV2MovemetastatchangeStddevSampOrderBy
  sum?: PokemonV2MovemetastatchangeSumOrderBy
  var_pop?: PokemonV2MovemetastatchangeVarPopOrderBy
  var_samp?: PokemonV2MovemetastatchangeVarSampOrderBy
  variance?: PokemonV2MovemetastatchangeVarianceOrderBy
}
export type PokemonV2MovemetastatchangeAvgOrderBy = {
  change?: OrderBy
  id?: OrderBy
  move_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2MovemetastatchangeMaxOrderBy = {
  change?: OrderBy
  id?: OrderBy
  move_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2MovemetastatchangeMinOrderBy = {
  change?: OrderBy
  id?: OrderBy
  move_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2MovemetastatchangeStddevOrderBy = {
  change?: OrderBy
  id?: OrderBy
  move_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2MovemetastatchangeStddevPopOrderBy = {
  change?: OrderBy
  id?: OrderBy
  move_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2MovemetastatchangeStddevSampOrderBy = {
  change?: OrderBy
  id?: OrderBy
  move_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2MovemetastatchangeSumOrderBy = {
  change?: OrderBy
  id?: OrderBy
  move_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2MovemetastatchangeVarPopOrderBy = {
  change?: OrderBy
  id?: OrderBy
  move_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2MovemetastatchangeVarSampOrderBy = {
  change?: OrderBy
  id?: OrderBy
  move_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2MovemetastatchangeVarianceOrderBy = {
  change?: OrderBy
  id?: OrderBy
  move_id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2MovetargetOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_moves_aggregate?: PokemonV2MoveAggregateOrderBy
  pokemon_v2_movetargetdescriptions_aggregate?: PokemonV2MovetargetdescriptionAggregateOrderBy
  pokemon_v2_movetargetnames_aggregate?: PokemonV2MovetargetnameAggregateOrderBy
}
export type PokemonV2SupercontesteffectOrderBy = {
  appeal?: OrderBy
  id?: OrderBy
  pokemon_v2_moves_aggregate?: PokemonV2MoveAggregateOrderBy
  pokemon_v2_supercontesteffectflavortexts_aggregate?: PokemonV2SupercontesteffectflavortextAggregateOrderBy
}
export type PokemonV2ExperienceOrderBy = {
  experience?: OrderBy
  growth_rate_id?: OrderBy
  id?: OrderBy
  level?: OrderBy
  pokemon_v2_growthrate?: PokemonV2GrowthrateOrderBy
}
export type PokemonV2GrowthratedescriptionOrderBy = {
  description?: OrderBy
  growth_rate_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  pokemon_v2_growthrate?: PokemonV2GrowthrateOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2MachineOrderBy = {
  growth_rate_id?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  machine_number?: OrderBy
  move_id?: OrderBy
  pokemon_v2_growthrate?: PokemonV2GrowthrateOrderBy
  pokemon_v2_item?: PokemonV2ItemOrderBy
  pokemon_v2_move?: PokemonV2MoveOrderBy
  pokemon_v2_versiongroup?: PokemonV2VersiongroupOrderBy
  version_group_id?: OrderBy
}
export type PokemonV2ContestcomboOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  pokemonV2MoveBySecondMoveId?: PokemonV2MoveOrderBy
  pokemon_v2_move?: PokemonV2MoveOrderBy
  second_move_id?: OrderBy
}
export type PokemonV2SupercontestcomboOrderBy = {
  first_move_id?: OrderBy
  id?: OrderBy
  pokemonV2MoveBySecondMoveId?: PokemonV2MoveOrderBy
  pokemon_v2_move?: PokemonV2MoveOrderBy
  second_move_id?: OrderBy
}
export type PokemonV2ContesteffecteffecttextOrderBy = {
  contest_effect_id?: OrderBy
  effect?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  pokemon_v2_contesteffect?: PokemonV2ContesteffectOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2ContesteffectflavortextOrderBy = {
  contest_effect_id?: OrderBy
  flavor_text?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  pokemon_v2_contesteffect?: PokemonV2ContesteffectOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2BerryflavorOrderBy = {
  contest_type_id?: OrderBy
  id?: OrderBy
  name?: OrderBy
  pokemonV2NaturesByLikesFlavorId_aggregate?: PokemonV2NatureAggregateOrderBy
  pokemon_v2_berryflavormaps_aggregate?: PokemonV2BerryflavormapAggregateOrderBy
  pokemon_v2_berryflavornames_aggregate?: PokemonV2BerryflavornameAggregateOrderBy
  pokemon_v2_contesttype?: PokemonV2ContesttypeOrderBy
  pokemon_v2_natures_aggregate?: PokemonV2NatureAggregateOrderBy
}
export type PokemonV2NatureAggregateOrderBy = {
  avg?: PokemonV2NatureAvgOrderBy
  count?: OrderBy
  max?: PokemonV2NatureMaxOrderBy
  min?: PokemonV2NatureMinOrderBy
  stddev?: PokemonV2NatureStddevOrderBy
  stddev_pop?: PokemonV2NatureStddevPopOrderBy
  stddev_samp?: PokemonV2NatureStddevSampOrderBy
  sum?: PokemonV2NatureSumOrderBy
  var_pop?: PokemonV2NatureVarPopOrderBy
  var_samp?: PokemonV2NatureVarSampOrderBy
  variance?: PokemonV2NatureVarianceOrderBy
}
export type PokemonV2NatureAvgOrderBy = {
  decreased_stat_id?: OrderBy
  game_index?: OrderBy
  hates_flavor_id?: OrderBy
  id?: OrderBy
  increased_stat_id?: OrderBy
  likes_flavor_id?: OrderBy
}
export type PokemonV2NatureMaxOrderBy = {
  decreased_stat_id?: OrderBy
  game_index?: OrderBy
  hates_flavor_id?: OrderBy
  id?: OrderBy
  increased_stat_id?: OrderBy
  likes_flavor_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2NatureMinOrderBy = {
  decreased_stat_id?: OrderBy
  game_index?: OrderBy
  hates_flavor_id?: OrderBy
  id?: OrderBy
  increased_stat_id?: OrderBy
  likes_flavor_id?: OrderBy
  name?: OrderBy
}
export type PokemonV2NatureStddevOrderBy = {
  decreased_stat_id?: OrderBy
  game_index?: OrderBy
  hates_flavor_id?: OrderBy
  id?: OrderBy
  increased_stat_id?: OrderBy
  likes_flavor_id?: OrderBy
}
export type PokemonV2NatureStddevPopOrderBy = {
  decreased_stat_id?: OrderBy
  game_index?: OrderBy
  hates_flavor_id?: OrderBy
  id?: OrderBy
  increased_stat_id?: OrderBy
  likes_flavor_id?: OrderBy
}
export type PokemonV2NatureStddevSampOrderBy = {
  decreased_stat_id?: OrderBy
  game_index?: OrderBy
  hates_flavor_id?: OrderBy
  id?: OrderBy
  increased_stat_id?: OrderBy
  likes_flavor_id?: OrderBy
}
export type PokemonV2NatureSumOrderBy = {
  decreased_stat_id?: OrderBy
  game_index?: OrderBy
  hates_flavor_id?: OrderBy
  id?: OrderBy
  increased_stat_id?: OrderBy
  likes_flavor_id?: OrderBy
}
export type PokemonV2NatureVarPopOrderBy = {
  decreased_stat_id?: OrderBy
  game_index?: OrderBy
  hates_flavor_id?: OrderBy
  id?: OrderBy
  increased_stat_id?: OrderBy
  likes_flavor_id?: OrderBy
}
export type PokemonV2NatureVarSampOrderBy = {
  decreased_stat_id?: OrderBy
  game_index?: OrderBy
  hates_flavor_id?: OrderBy
  id?: OrderBy
  increased_stat_id?: OrderBy
  likes_flavor_id?: OrderBy
}
export type PokemonV2NatureVarianceOrderBy = {
  decreased_stat_id?: OrderBy
  game_index?: OrderBy
  hates_flavor_id?: OrderBy
  id?: OrderBy
  increased_stat_id?: OrderBy
  likes_flavor_id?: OrderBy
}
export type PokemonV2BerryflavormapAggregateOrderBy = {
  avg?: PokemonV2BerryflavormapAvgOrderBy
  count?: OrderBy
  max?: PokemonV2BerryflavormapMaxOrderBy
  min?: PokemonV2BerryflavormapMinOrderBy
  stddev?: PokemonV2BerryflavormapStddevOrderBy
  stddev_pop?: PokemonV2BerryflavormapStddevPopOrderBy
  stddev_samp?: PokemonV2BerryflavormapStddevSampOrderBy
  sum?: PokemonV2BerryflavormapSumOrderBy
  var_pop?: PokemonV2BerryflavormapVarPopOrderBy
  var_samp?: PokemonV2BerryflavormapVarSampOrderBy
  variance?: PokemonV2BerryflavormapVarianceOrderBy
}
export type PokemonV2BerryflavormapAvgOrderBy = {
  berry_flavor_id?: OrderBy
  berry_id?: OrderBy
  id?: OrderBy
  potency?: OrderBy
}
export type PokemonV2BerryflavormapMaxOrderBy = {
  berry_flavor_id?: OrderBy
  berry_id?: OrderBy
  id?: OrderBy
  potency?: OrderBy
}
export type PokemonV2BerryflavormapMinOrderBy = {
  berry_flavor_id?: OrderBy
  berry_id?: OrderBy
  id?: OrderBy
  potency?: OrderBy
}
export type PokemonV2BerryflavormapStddevOrderBy = {
  berry_flavor_id?: OrderBy
  berry_id?: OrderBy
  id?: OrderBy
  potency?: OrderBy
}
export type PokemonV2BerryflavormapStddevPopOrderBy = {
  berry_flavor_id?: OrderBy
  berry_id?: OrderBy
  id?: OrderBy
  potency?: OrderBy
}
export type PokemonV2BerryflavormapStddevSampOrderBy = {
  berry_flavor_id?: OrderBy
  berry_id?: OrderBy
  id?: OrderBy
  potency?: OrderBy
}
export type PokemonV2BerryflavormapSumOrderBy = {
  berry_flavor_id?: OrderBy
  berry_id?: OrderBy
  id?: OrderBy
  potency?: OrderBy
}
export type PokemonV2BerryflavormapVarPopOrderBy = {
  berry_flavor_id?: OrderBy
  berry_id?: OrderBy
  id?: OrderBy
  potency?: OrderBy
}
export type PokemonV2BerryflavormapVarSampOrderBy = {
  berry_flavor_id?: OrderBy
  berry_id?: OrderBy
  id?: OrderBy
  potency?: OrderBy
}
export type PokemonV2BerryflavormapVarianceOrderBy = {
  berry_flavor_id?: OrderBy
  berry_id?: OrderBy
  id?: OrderBy
  potency?: OrderBy
}
export type PokemonV2NatureOrderBy = {
  decreased_stat_id?: OrderBy
  game_index?: OrderBy
  hates_flavor_id?: OrderBy
  id?: OrderBy
  increased_stat_id?: OrderBy
  likes_flavor_id?: OrderBy
  name?: OrderBy
  pokemonV2BerryflavorByLikesFlavorId?: PokemonV2BerryflavorOrderBy
  pokemonV2StatByIncreasedStatId?: PokemonV2StatOrderBy
  pokemon_v2_berryflavor?: PokemonV2BerryflavorOrderBy
  pokemon_v2_naturebattlestylepreferences_aggregate?: PokemonV2NaturebattlestylepreferenceAggregateOrderBy
  pokemon_v2_naturenames_aggregate?: PokemonV2NaturenameAggregateOrderBy
  pokemon_v2_naturepokeathlonstats_aggregate?: PokemonV2NaturepokeathlonstatAggregateOrderBy
  pokemon_v2_stat?: PokemonV2StatOrderBy
}
export type PokemonV2StatOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  is_battle_only?: OrderBy
  move_damage_class_id?: OrderBy
  name?: OrderBy
  pokemonV2NaturesByIncreasedStatId_aggregate?: PokemonV2NatureAggregateOrderBy
  pokemon_v2_characteristics_aggregate?: PokemonV2CharacteristicAggregateOrderBy
  pokemon_v2_movedamageclass?: PokemonV2MovedamageclassOrderBy
  pokemon_v2_movemetastatchanges_aggregate?: PokemonV2MovemetastatchangeAggregateOrderBy
  pokemon_v2_natures_aggregate?: PokemonV2NatureAggregateOrderBy
  pokemon_v2_pokemonstats_aggregate?: PokemonV2PokemonstatAggregateOrderBy
  pokemon_v2_statnames_aggregate?: PokemonV2StatnameAggregateOrderBy
}
export type PokemonV2CharacteristicAggregateOrderBy = {
  avg?: PokemonV2CharacteristicAvgOrderBy
  count?: OrderBy
  max?: PokemonV2CharacteristicMaxOrderBy
  min?: PokemonV2CharacteristicMinOrderBy
  stddev?: PokemonV2CharacteristicStddevOrderBy
  stddev_pop?: PokemonV2CharacteristicStddevPopOrderBy
  stddev_samp?: PokemonV2CharacteristicStddevSampOrderBy
  sum?: PokemonV2CharacteristicSumOrderBy
  var_pop?: PokemonV2CharacteristicVarPopOrderBy
  var_samp?: PokemonV2CharacteristicVarSampOrderBy
  variance?: PokemonV2CharacteristicVarianceOrderBy
}
export type PokemonV2CharacteristicAvgOrderBy = {
  gene_mod_5?: OrderBy
  id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2CharacteristicMaxOrderBy = {
  gene_mod_5?: OrderBy
  id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2CharacteristicMinOrderBy = {
  gene_mod_5?: OrderBy
  id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2CharacteristicStddevOrderBy = {
  gene_mod_5?: OrderBy
  id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2CharacteristicStddevPopOrderBy = {
  gene_mod_5?: OrderBy
  id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2CharacteristicStddevSampOrderBy = {
  gene_mod_5?: OrderBy
  id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2CharacteristicSumOrderBy = {
  gene_mod_5?: OrderBy
  id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2CharacteristicVarPopOrderBy = {
  gene_mod_5?: OrderBy
  id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2CharacteristicVarSampOrderBy = {
  gene_mod_5?: OrderBy
  id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2CharacteristicVarianceOrderBy = {
  gene_mod_5?: OrderBy
  id?: OrderBy
  stat_id?: OrderBy
}
export type PokemonV2NaturebattlestylepreferenceAggregateOrderBy = {
  avg?: PokemonV2NaturebattlestylepreferenceAvgOrderBy
  count?: OrderBy
  max?: PokemonV2NaturebattlestylepreferenceMaxOrderBy
  min?: PokemonV2NaturebattlestylepreferenceMinOrderBy
  stddev?: PokemonV2NaturebattlestylepreferenceStddevOrderBy
  stddev_pop?: PokemonV2NaturebattlestylepreferenceStddevPopOrderBy
  stddev_samp?: PokemonV2NaturebattlestylepreferenceStddevSampOrderBy
  sum?: PokemonV2NaturebattlestylepreferenceSumOrderBy
  var_pop?: PokemonV2NaturebattlestylepreferenceVarPopOrderBy
  var_samp?: PokemonV2NaturebattlestylepreferenceVarSampOrderBy
  variance?: PokemonV2NaturebattlestylepreferenceVarianceOrderBy
}
export type PokemonV2NaturebattlestylepreferenceAvgOrderBy = {
  high_hp_preference?: OrderBy
  id?: OrderBy
  low_hp_preference?: OrderBy
  move_battle_style_id?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturebattlestylepreferenceMaxOrderBy = {
  high_hp_preference?: OrderBy
  id?: OrderBy
  low_hp_preference?: OrderBy
  move_battle_style_id?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturebattlestylepreferenceMinOrderBy = {
  high_hp_preference?: OrderBy
  id?: OrderBy
  low_hp_preference?: OrderBy
  move_battle_style_id?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturebattlestylepreferenceStddevOrderBy = {
  high_hp_preference?: OrderBy
  id?: OrderBy
  low_hp_preference?: OrderBy
  move_battle_style_id?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturebattlestylepreferenceStddevPopOrderBy = {
  high_hp_preference?: OrderBy
  id?: OrderBy
  low_hp_preference?: OrderBy
  move_battle_style_id?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturebattlestylepreferenceStddevSampOrderBy = {
  high_hp_preference?: OrderBy
  id?: OrderBy
  low_hp_preference?: OrderBy
  move_battle_style_id?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturebattlestylepreferenceSumOrderBy = {
  high_hp_preference?: OrderBy
  id?: OrderBy
  low_hp_preference?: OrderBy
  move_battle_style_id?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturebattlestylepreferenceVarPopOrderBy = {
  high_hp_preference?: OrderBy
  id?: OrderBy
  low_hp_preference?: OrderBy
  move_battle_style_id?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturebattlestylepreferenceVarSampOrderBy = {
  high_hp_preference?: OrderBy
  id?: OrderBy
  low_hp_preference?: OrderBy
  move_battle_style_id?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturebattlestylepreferenceVarianceOrderBy = {
  high_hp_preference?: OrderBy
  id?: OrderBy
  low_hp_preference?: OrderBy
  move_battle_style_id?: OrderBy
  nature_id?: OrderBy
}
export type PokemonV2NaturepokeathlonstatAggregateOrderBy = {
  avg?: PokemonV2NaturepokeathlonstatAvgOrderBy
  count?: OrderBy
  max?: PokemonV2NaturepokeathlonstatMaxOrderBy
  min?: PokemonV2NaturepokeathlonstatMinOrderBy
  stddev?: PokemonV2NaturepokeathlonstatStddevOrderBy
  stddev_pop?: PokemonV2NaturepokeathlonstatStddevPopOrderBy
  stddev_samp?: PokemonV2NaturepokeathlonstatStddevSampOrderBy
  sum?: PokemonV2NaturepokeathlonstatSumOrderBy
  var_pop?: PokemonV2NaturepokeathlonstatVarPopOrderBy
  var_samp?: PokemonV2NaturepokeathlonstatVarSampOrderBy
  variance?: PokemonV2NaturepokeathlonstatVarianceOrderBy
}
export type PokemonV2NaturepokeathlonstatAvgOrderBy = {
  id?: OrderBy
  max_change?: OrderBy
  nature_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2NaturepokeathlonstatMaxOrderBy = {
  id?: OrderBy
  max_change?: OrderBy
  nature_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2NaturepokeathlonstatMinOrderBy = {
  id?: OrderBy
  max_change?: OrderBy
  nature_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2NaturepokeathlonstatStddevOrderBy = {
  id?: OrderBy
  max_change?: OrderBy
  nature_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2NaturepokeathlonstatStddevPopOrderBy = {
  id?: OrderBy
  max_change?: OrderBy
  nature_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2NaturepokeathlonstatStddevSampOrderBy = {
  id?: OrderBy
  max_change?: OrderBy
  nature_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2NaturepokeathlonstatSumOrderBy = {
  id?: OrderBy
  max_change?: OrderBy
  nature_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2NaturepokeathlonstatVarPopOrderBy = {
  id?: OrderBy
  max_change?: OrderBy
  nature_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2NaturepokeathlonstatVarSampOrderBy = {
  id?: OrderBy
  max_change?: OrderBy
  nature_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2NaturepokeathlonstatVarianceOrderBy = {
  id?: OrderBy
  max_change?: OrderBy
  nature_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
}
export type PokemonV2CharacteristicOrderBy = {
  gene_mod_5?: OrderBy
  id?: OrderBy
  pokemon_v2_characteristicdescriptions_aggregate?: PokemonV2CharacteristicdescriptionAggregateOrderBy
  pokemon_v2_stat?: PokemonV2StatOrderBy
  stat_id?: OrderBy
}
export type PokemonV2CharacteristicdescriptionOrderBy = {
  characteristic_id?: OrderBy
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  pokemon_v2_characteristic?: PokemonV2CharacteristicOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2MovedamageclassdescriptionOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_movedamageclass?: PokemonV2MovedamageclassOrderBy
}
export type PokemonV2MovedamageclassnameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_damage_class_id?: OrderBy
  name?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_movedamageclass?: PokemonV2MovedamageclassOrderBy
}
export type PokemonV2TypeefficacyOrderBy = {
  damage_factor?: OrderBy
  damage_type_id?: OrderBy
  id?: OrderBy
  pokemonV2TypeByTargetTypeId?: PokemonV2TypeOrderBy
  pokemon_v2_type?: PokemonV2TypeOrderBy
  target_type_id?: OrderBy
}
export type PokemonV2BerryOrderBy = {
  berry_firmness_id?: OrderBy
  growth_time?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  max_harvest?: OrderBy
  name?: OrderBy
  natural_gift_power?: OrderBy
  natural_gift_type_id?: OrderBy
  pokemon_v2_berryfirmness?: PokemonV2BerryfirmnessOrderBy
  pokemon_v2_berryflavormaps_aggregate?: PokemonV2BerryflavormapAggregateOrderBy
  pokemon_v2_item?: PokemonV2ItemOrderBy
  pokemon_v2_type?: PokemonV2TypeOrderBy
  size?: OrderBy
  smoothness?: OrderBy
  soil_dryness?: OrderBy
}
export type PokemonV2BerryfirmnessOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_berries_aggregate?: PokemonV2BerryAggregateOrderBy
  pokemon_v2_berryfirmnessnames_aggregate?: PokemonV2BerryfirmnessnameAggregateOrderBy
}
export type PokemonV2BerryfirmnessnameOrderBy = {
  berry_firmness_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_v2_berryfirmness?: PokemonV2BerryfirmnessOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2BerryflavormapOrderBy = {
  berry_flavor_id?: OrderBy
  berry_id?: OrderBy
  id?: OrderBy
  pokemon_v2_berry?: PokemonV2BerryOrderBy
  pokemon_v2_berryflavor?: PokemonV2BerryflavorOrderBy
  potency?: OrderBy
}
export type PokemonV2MovechangeOrderBy = {
  accuracy?: OrderBy
  id?: OrderBy
  move_effect_chance?: OrderBy
  move_effect_id?: OrderBy
  move_id?: OrderBy
  pokemon_v2_move?: PokemonV2MoveOrderBy
  pokemon_v2_moveeffect?: PokemonV2MoveeffectOrderBy
  pokemon_v2_type?: PokemonV2TypeOrderBy
  pokemon_v2_versiongroup?: PokemonV2VersiongroupOrderBy
  power?: OrderBy
  pp?: OrderBy
  type_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveeffectchangeOrderBy = {
  id?: OrderBy
  move_effect_id?: OrderBy
  pokemon_v2_moveeffect?: PokemonV2MoveeffectOrderBy
  pokemon_v2_moveeffectchangeeffecttexts_aggregate?: PokemonV2MoveeffectchangeeffecttextAggregateOrderBy
  pokemon_v2_versiongroup?: PokemonV2VersiongroupOrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MoveeffectchangeeffecttextOrderBy = {
  effect?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_effect_change_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_moveeffectchange?: PokemonV2MoveeffectchangeOrderBy
}
export type PokemonV2MoveeffecteffecttextOrderBy = {
  effect?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_effect_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_moveeffect?: PokemonV2MoveeffectOrderBy
  short_effect?: OrderBy
}
export type PokemonV2PokemonformtypeOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
  pokemon_v2_pokemonform?: PokemonV2PokemonformOrderBy
  pokemon_v2_type?: PokemonV2TypeOrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypepastOrderBy = {
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  pokemon_v2_generation?: PokemonV2GenerationOrderBy
  pokemon_v2_pokemon?: PokemonV2PokemonOrderBy
  pokemon_v2_type?: PokemonV2TypeOrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2PokemontypeOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
  pokemon_v2_pokemon?: PokemonV2PokemonOrderBy
  pokemon_v2_type?: PokemonV2TypeOrderBy
  slot?: OrderBy
  type_id?: OrderBy
}
export type PokemonV2TypegameindexOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  pokemon_v2_generation?: PokemonV2GenerationOrderBy
  pokemon_v2_type?: PokemonV2TypeOrderBy
  type_id?: OrderBy
}
export type PokemonV2TypenameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_type?: PokemonV2TypeOrderBy
  type_id?: OrderBy
}
export type PokemonV2MovemetastatchangeOrderBy = {
  change?: OrderBy
  id?: OrderBy
  move_id?: OrderBy
  pokemon_v2_move?: PokemonV2MoveOrderBy
  pokemon_v2_stat?: PokemonV2StatOrderBy
  stat_id?: OrderBy
}
export type PokemonV2PokemonstatOrderBy = {
  base_stat?: OrderBy
  effort?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  pokemon_v2_pokemon?: PokemonV2PokemonOrderBy
  pokemon_v2_stat?: PokemonV2StatOrderBy
  stat_id?: OrderBy
}
export type PokemonV2StatnameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_stat?: PokemonV2StatOrderBy
  stat_id?: OrderBy
}
export type PokemonV2NaturebattlestylepreferenceOrderBy = {
  high_hp_preference?: OrderBy
  id?: OrderBy
  low_hp_preference?: OrderBy
  move_battle_style_id?: OrderBy
  nature_id?: OrderBy
  pokemon_v2_movebattlestyle?: PokemonV2MovebattlestyleOrderBy
  pokemon_v2_nature?: PokemonV2NatureOrderBy
}
export type PokemonV2MovebattlestyleOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_movebattlestylenames_aggregate?: PokemonV2MovebattlestylenameAggregateOrderBy
  pokemon_v2_naturebattlestylepreferences_aggregate?: PokemonV2NaturebattlestylepreferenceAggregateOrderBy
}
export type PokemonV2MovebattlestylenameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_battle_style_id?: OrderBy
  name?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_movebattlestyle?: PokemonV2MovebattlestyleOrderBy
}
export type PokemonV2NaturenameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  nature_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_nature?: PokemonV2NatureOrderBy
}
export type PokemonV2NaturepokeathlonstatOrderBy = {
  id?: OrderBy
  max_change?: OrderBy
  nature_id?: OrderBy
  pokeathlon_stat_id?: OrderBy
  pokemon_v2_nature?: PokemonV2NatureOrderBy
  pokemon_v2_pokeathlonstat?: PokemonV2PokeathlonstatOrderBy
}
export type PokemonV2PokeathlonstatOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_naturepokeathlonstats_aggregate?: PokemonV2NaturepokeathlonstatAggregateOrderBy
  pokemon_v2_pokeathlonstatnames_aggregate?: PokemonV2PokeathlonstatnameAggregateOrderBy
}
export type PokemonV2PokeathlonstatnameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokeathlon_stat_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_pokeathlonstat?: PokemonV2PokeathlonstatOrderBy
}
export type PokemonV2BerryflavornameOrderBy = {
  berry_flavor_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_v2_berryflavor?: PokemonV2BerryflavorOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2ContesttypenameOrderBy = {
  color?: OrderBy
  contest_type_id?: OrderBy
  flavor?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_v2_contesttype?: PokemonV2ContesttypeOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2MoveattributemapOrderBy = {
  id?: OrderBy
  move_attribute_id?: OrderBy
  move_id?: OrderBy
  pokemon_v2_move?: PokemonV2MoveOrderBy
  pokemon_v2_moveattribute?: PokemonV2MoveattributeOrderBy
}
export type PokemonV2MoveattributeOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_moveattributedescriptions_aggregate?: PokemonV2MoveattributedescriptionAggregateOrderBy
  pokemon_v2_moveattributemaps_aggregate?: PokemonV2MoveattributemapAggregateOrderBy
  pokemon_v2_moveattributenames_aggregate?: PokemonV2MoveattributenameAggregateOrderBy
}
export type PokemonV2MoveattributedescriptionOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_moveattribute?: PokemonV2MoveattributeOrderBy
}
export type PokemonV2MoveattributenameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_attribute_id?: OrderBy
  name?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_moveattribute?: PokemonV2MoveattributeOrderBy
}
export type PokemonV2MoveflavortextOrderBy = {
  flavor_text?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_move?: PokemonV2MoveOrderBy
  pokemon_v2_versiongroup?: PokemonV2VersiongroupOrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MovemetaOrderBy = {
  ailment_chance?: OrderBy
  crit_rate?: OrderBy
  drain?: OrderBy
  flinch_chance?: OrderBy
  healing?: OrderBy
  id?: OrderBy
  max_hits?: OrderBy
  max_turns?: OrderBy
  min_hits?: OrderBy
  min_turns?: OrderBy
  move_id?: OrderBy
  move_meta_ailment_id?: OrderBy
  move_meta_category_id?: OrderBy
  pokemon_v2_move?: PokemonV2MoveOrderBy
  pokemon_v2_movemetaailment?: PokemonV2MovemetaailmentOrderBy
  pokemon_v2_movemetacategory?: PokemonV2MovemetacategoryOrderBy
  stat_chance?: OrderBy
}
export type PokemonV2MovemetaailmentOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_movemeta_aggregate?: PokemonV2MovemetaAggregateOrderBy
  pokemon_v2_movemetaailmentnames_aggregate?: PokemonV2MovemetaailmentnameAggregateOrderBy
}
export type PokemonV2MovemetacategoryOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_movemeta_aggregate?: PokemonV2MovemetaAggregateOrderBy
  pokemon_v2_movemetacategorydescriptions_aggregate?: PokemonV2MovemetacategorydescriptionAggregateOrderBy
}
export type PokemonV2MovemetaailmentnameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_meta_ailment_id?: OrderBy
  name?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_movemetaailment?: PokemonV2MovemetaailmentOrderBy
}
export type PokemonV2MovemetacategorydescriptionOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_meta_category_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_movemetacategory?: PokemonV2MovemetacategoryOrderBy
}
export type PokemonV2MovenameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_id?: OrderBy
  name?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_move?: PokemonV2MoveOrderBy
}
export type PokemonV2MovetargetdescriptionOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_movetarget?: PokemonV2MovetargetOrderBy
}
export type PokemonV2MovetargetnameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_target_id?: OrderBy
  name?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_movetarget?: PokemonV2MovetargetOrderBy
}
export type PokemonV2PokemonmoveOrderBy = {
  id?: OrderBy
  level?: OrderBy
  move_id?: OrderBy
  move_learn_method_id?: OrderBy
  order?: OrderBy
  pokemon_id?: OrderBy
  pokemon_v2_move?: PokemonV2MoveOrderBy
  pokemon_v2_movelearnmethod?: PokemonV2MovelearnmethodOrderBy
  pokemon_v2_pokemon?: PokemonV2PokemonOrderBy
  pokemon_v2_versiongroup?: PokemonV2VersiongroupOrderBy
  version_group_id?: OrderBy
}
export type PokemonV2MovelearnmethodOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_movelearnmethoddescriptions_aggregate?: PokemonV2MovelearnmethoddescriptionAggregateOrderBy
  pokemon_v2_movelearnmethodnames_aggregate?: PokemonV2MovelearnmethodnameAggregateOrderBy
  pokemon_v2_pokemonmoves_aggregate?: PokemonV2PokemonmoveAggregateOrderBy
  pokemon_v2_versiongroupmovelearnmethods_aggregate?: PokemonV2VersiongroupmovelearnmethodAggregateOrderBy
}
export type PokemonV2MovelearnmethoddescriptionOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_movelearnmethod?: PokemonV2MovelearnmethodOrderBy
}
export type PokemonV2MovelearnmethodnameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  move_learn_method_id?: OrderBy
  name?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_movelearnmethod?: PokemonV2MovelearnmethodOrderBy
}
export type PokemonV2VersiongroupmovelearnmethodOrderBy = {
  id?: OrderBy
  move_learn_method_id?: OrderBy
  pokemon_v2_movelearnmethod?: PokemonV2MovelearnmethodOrderBy
  pokemon_v2_versiongroup?: PokemonV2VersiongroupOrderBy
  version_group_id?: OrderBy
}
export type PokemonV2SupercontesteffectflavortextOrderBy = {
  flavor_text?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_supercontesteffect?: PokemonV2SupercontesteffectOrderBy
  super_contest_effect_id?: OrderBy
}
export type PokemonV2PalparkOrderBy = {
  base_score?: OrderBy
  id?: OrderBy
  pal_park_area_id?: OrderBy
  pokemon_species_id?: OrderBy
  pokemon_v2_palparkarea?: PokemonV2PalparkareaOrderBy
  pokemon_v2_pokemonspecy?: PokemonV2PokemonspeciesOrderBy
  rate?: OrderBy
}
export type PokemonV2PalparkareaOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_palparkareanames_aggregate?: PokemonV2PalparkareanameAggregateOrderBy
  pokemon_v2_palparks_aggregate?: PokemonV2PalparkAggregateOrderBy
}
export type PokemonV2PalparkareanameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pal_park_area_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_palparkarea?: PokemonV2PalparkareaOrderBy
}
export type PokemonV2PokemoncolornameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_color_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_pokemoncolor?: PokemonV2PokemoncolorOrderBy
}
export type PokemonV2PokemondexnumberOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  pokedex_number?: OrderBy
  pokemon_species_id?: OrderBy
  pokemon_v2_pokedex?: PokemonV2PokedexOrderBy
  pokemon_v2_pokemonspecy?: PokemonV2PokemonspeciesOrderBy
}
export type PokemonV2PokedexOrderBy = {
  id?: OrderBy
  is_main_series?: OrderBy
  name?: OrderBy
  pokemon_v2_pokedexdescriptions_aggregate?: PokemonV2PokedexdescriptionAggregateOrderBy
  pokemon_v2_pokedexnames_aggregate?: PokemonV2PokedexnameAggregateOrderBy
  pokemon_v2_pokedexversiongroups_aggregate?: PokemonV2PokedexversiongroupAggregateOrderBy
  pokemon_v2_pokemondexnumbers_aggregate?: PokemonV2PokemondexnumberAggregateOrderBy
  pokemon_v2_region?: PokemonV2RegionOrderBy
  region_id?: OrderBy
}
export type PokemonV2PokedexdescriptionOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  pokedex_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_pokedex?: PokemonV2PokedexOrderBy
}
export type PokemonV2PokedexnameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokedex_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_pokedex?: PokemonV2PokedexOrderBy
}
export type PokemonV2PokedexversiongroupOrderBy = {
  id?: OrderBy
  pokedex_id?: OrderBy
  pokemon_v2_pokedex?: PokemonV2PokedexOrderBy
  pokemon_v2_versiongroup?: PokemonV2VersiongroupOrderBy
  version_group_id?: OrderBy
}
export type PokemonV2LocationgameindexOrderBy = {
  game_index?: OrderBy
  generation_id?: OrderBy
  id?: OrderBy
  location_id?: OrderBy
  pokemon_v2_generation?: PokemonV2GenerationOrderBy
  pokemon_v2_location?: PokemonV2LocationOrderBy
}
export type PokemonV2LocationnameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_id?: OrderBy
  name?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_location?: PokemonV2LocationOrderBy
}
export type PokemonV2RegionnameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_region?: PokemonV2RegionOrderBy
  region_id?: OrderBy
}
export type PokemonV2VersiongroupregionOrderBy = {
  id?: OrderBy
  pokemon_v2_region?: PokemonV2RegionOrderBy
  pokemon_v2_versiongroup?: PokemonV2VersiongroupOrderBy
  region_id?: OrderBy
  version_group_id?: OrderBy
}
export type PokemonV2PokemonegggroupOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  pokemon_species_id?: OrderBy
  pokemon_v2_egggroup?: PokemonV2EgggroupOrderBy
  pokemon_v2_pokemonspecy?: PokemonV2PokemonspeciesOrderBy
}
export type PokemonV2EgggroupOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_egggroupnames_aggregate?: PokemonV2EgggroupnameAggregateOrderBy
  pokemon_v2_pokemonegggroups_aggregate?: PokemonV2PokemonegggroupAggregateOrderBy
}
export type PokemonV2EgggroupnameOrderBy = {
  egg_group_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_v2_egggroup?: PokemonV2EgggroupOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2PokemonhabitatnameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_habitat_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_pokemonhabitat?: PokemonV2PokemonhabitatOrderBy
}
export type PokemonV2PokemonshapenameOrderBy = {
  awesome_name?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_shape_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_pokemonshape?: PokemonV2PokemonshapeOrderBy
}
export type PokemonV2PokemonspeciesdescriptionOrderBy = {
  description?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_pokemonspecy?: PokemonV2PokemonspeciesOrderBy
}
export type PokemonV2PokemonspeciesflavortextOrderBy = {
  flavor_text?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  pokemon_species_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_pokemonspecy?: PokemonV2PokemonspeciesOrderBy
  pokemon_v2_version?: PokemonV2VersionOrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemongameindexOrderBy = {
  game_index?: OrderBy
  id?: OrderBy
  pokemon_id?: OrderBy
  pokemon_v2_pokemon?: PokemonV2PokemonOrderBy
  pokemon_v2_version?: PokemonV2VersionOrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonitemOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  pokemon_id?: OrderBy
  pokemon_v2_item?: PokemonV2ItemOrderBy
  pokemon_v2_pokemon?: PokemonV2PokemonOrderBy
  pokemon_v2_version?: PokemonV2VersionOrderBy
  rarity?: OrderBy
  version_id?: OrderBy
}
export type PokemonV2VersionnameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_version?: PokemonV2VersionOrderBy
  version_id?: OrderBy
}
export type PokemonV2PokemonspeciesnameOrderBy = {
  genus?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_species_id?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_pokemonspecy?: PokemonV2PokemonspeciesOrderBy
}
export type PokemonV2EvolutiontriggernameOrderBy = {
  evolution_trigger_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_v2_evolutiontrigger?: PokemonV2EvolutiontriggerOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2ItemattributemapOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  item_id?: OrderBy
  pokemon_v2_item?: PokemonV2ItemOrderBy
  pokemon_v2_itemattribute?: PokemonV2ItemattributeOrderBy
}
export type PokemonV2ItemattributeOrderBy = {
  id?: OrderBy
  name?: OrderBy
  pokemon_v2_itemattributedescriptions_aggregate?: PokemonV2ItemattributedescriptionAggregateOrderBy
  pokemon_v2_itemattributemaps_aggregate?: PokemonV2ItemattributemapAggregateOrderBy
  pokemon_v2_itemattributenames_aggregate?: PokemonV2ItemattributenameAggregateOrderBy
}
export type PokemonV2ItemattributedescriptionOrderBy = {
  description?: OrderBy
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
  pokemon_v2_itemattribute?: PokemonV2ItemattributeOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2ItemattributenameOrderBy = {
  id?: OrderBy
  item_attribute_id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_v2_itemattribute?: PokemonV2ItemattributeOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2ItemcategorynameOrderBy = {
  id?: OrderBy
  item_category_id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_v2_itemcategory?: PokemonV2ItemcategoryOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2ItempocketnameOrderBy = {
  id?: OrderBy
  item_pocket_id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_v2_itempocket?: PokemonV2ItempocketOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2ItemeffecttextOrderBy = {
  effect?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
  pokemon_v2_item?: PokemonV2ItemOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  short_effect?: OrderBy
}
export type PokemonV2ItemflavortextOrderBy = {
  flavor_text?: OrderBy
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
  pokemon_v2_item?: PokemonV2ItemOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_versiongroup?: PokemonV2VersiongroupOrderBy
  version_group_id?: OrderBy
}
export type PokemonV2ItemflingeffecteffecttextOrderBy = {
  effect?: OrderBy
  id?: OrderBy
  item_fling_effect_id?: OrderBy
  language_id?: OrderBy
  pokemon_v2_itemflingeffect?: PokemonV2ItemflingeffectOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2ItemnameOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_v2_item?: PokemonV2ItemOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
export type PokemonV2ItemspritesOrderBy = {
  id?: OrderBy
  item_id?: OrderBy
  pokemon_v2_item?: PokemonV2ItemOrderBy
  sprites?: OrderBy
}
export type PokemonV2PokemonformnameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_form_id?: OrderBy
  pokemon_name?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_pokemonform?: PokemonV2PokemonformOrderBy
}
export type PokemonV2PokemonformspritesOrderBy = {
  id?: OrderBy
  pokemon_form_id?: OrderBy
  pokemon_v2_pokemonform?: PokemonV2PokemonformOrderBy
  sprites?: OrderBy
}
export type PokemonV2PokemonspritesOrderBy = {
  id?: OrderBy
  pokemon_id?: OrderBy
  pokemon_v2_pokemon?: PokemonV2PokemonOrderBy
  sprites?: OrderBy
}
export type PokemonV2LocationareanameOrderBy = {
  id?: OrderBy
  language_id?: OrderBy
  location_area_id?: OrderBy
  name?: OrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
  pokemon_v2_locationarea?: PokemonV2LocationareaOrderBy
}
export type PokemonV2AbilitynameOrderBy = {
  ability_id?: OrderBy
  id?: OrderBy
  language_id?: OrderBy
  name?: OrderBy
  pokemon_v2_ability?: PokemonV2AbilityOrderBy
  pokemon_v2_language?: PokemonV2LanguageOrderBy
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  pokemonV2Pokemon: ObservableMap<string, PokemonV2PokemonModelType>
}


/**
* Enums for the names of base graphql actions
*/



/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['query_root', () => QueryRootModel], ['pokemon_v2_pokemon', () => PokemonV2PokemonModel], ['pokemon_v2_pokemonspecies', () => PokemonV2PokemonspeciesModel], ['pokemon_v2_type', () => PokemonV2TypeModel], ['pokemon_v2_pokemontype', () => PokemonV2PokemontypeModel], ['pokemon_v2_pokemoncolor', () => PokemonV2PokemoncolorModel], ['pokemon_v2_pokemoncolorname', () => PokemonV2PokemoncolornameModel], ['pokemon_v2_pokemonspeciesflavortext', () => PokemonV2PokemonspeciesflavortextModel], ['pokemon_v2_pokemonspeciesname', () => PokemonV2PokemonspeciesnameModel], ['subscription_root', () => SubscriptionRootModel]], ['pokemon_v2_pokemon'], "js"))
  .props({
    pokemonV2Pokemon: types.optional(types.map(types.late((): any => PokemonV2PokemonModel)), {})
  })
  .actions(self => ({
    // fetch data from the table: "pokemon_v2_pokemon"
    queryPokemon_v2_pokemon(variables: { distinctOn?: PokemonV2PokemonSelectColumn[], limit?: number, offset?: number, orderBy?: PokemonV2PokemonOrderBy[], where?: PokemonV2PokemonBoolExp }, resultSelector: string | ((qb: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector) = pokemonV2PokemonModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ pokemon_v2_pokemon: PokemonV2PokemonModelType[]}>(`query pokemon_v2_pokemon($distinctOn: [pokemon_v2_pokemon_select_column!], $limit: Int, $offset: Int, $orderBy: [pokemon_v2_pokemon_order_by!], $where: pokemon_v2_pokemon_bool_exp) { pokemon_v2_pokemon(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemonModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "pokemon_v2_pokemon" using primary key columns
    queryPokemon_v2_pokemon_by_pk(variables: { id: number }, resultSelector: string | ((qb: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector) = pokemonV2PokemonModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ pokemon_v2_pokemon_by_pk: PokemonV2PokemonModelType}>(`query pokemon_v2_pokemon_by_pk($id: Int!) { pokemon_v2_pokemon_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemonModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "pokemon_v2_pokemoncolor"
    queryPokemon_v2_pokemoncolor(variables: { distinctOn?: PokemonV2PokemoncolorSelectColumn[], limit?: number, offset?: number, orderBy?: PokemonV2PokemoncolorOrderBy[], where?: PokemonV2PokemoncolorBoolExp }, resultSelector: string | ((qb: PokemonV2PokemoncolorModelSelector) => PokemonV2PokemoncolorModelSelector) = pokemonV2PokemoncolorModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ pokemon_v2_pokemoncolor: PokemonV2PokemoncolorModelType[]}>(`query pokemon_v2_pokemoncolor($distinctOn: [pokemon_v2_pokemoncolor_select_column!], $limit: Int, $offset: Int, $orderBy: [pokemon_v2_pokemoncolor_order_by!], $where: pokemon_v2_pokemoncolor_bool_exp) { pokemon_v2_pokemoncolor(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemoncolorModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "pokemon_v2_pokemoncolor" using primary key columns
    queryPokemon_v2_pokemoncolor_by_pk(variables: { id: number }, resultSelector: string | ((qb: PokemonV2PokemoncolorModelSelector) => PokemonV2PokemoncolorModelSelector) = pokemonV2PokemoncolorModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ pokemon_v2_pokemoncolor_by_pk: PokemonV2PokemoncolorModelType}>(`query pokemon_v2_pokemoncolor_by_pk($id: Int!) { pokemon_v2_pokemoncolor_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemoncolorModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "pokemon_v2_pokemoncolorname"
    queryPokemon_v2_pokemoncolorname(variables: { distinctOn?: PokemonV2PokemoncolornameSelectColumn[], limit?: number, offset?: number, orderBy?: PokemonV2PokemoncolornameOrderBy[], where?: PokemonV2PokemoncolornameBoolExp }, resultSelector: string | ((qb: PokemonV2PokemoncolornameModelSelector) => PokemonV2PokemoncolornameModelSelector) = pokemonV2PokemoncolornameModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ pokemon_v2_pokemoncolorname: PokemonV2PokemoncolornameModelType[]}>(`query pokemon_v2_pokemoncolorname($distinctOn: [pokemon_v2_pokemoncolorname_select_column!], $limit: Int, $offset: Int, $orderBy: [pokemon_v2_pokemoncolorname_order_by!], $where: pokemon_v2_pokemoncolorname_bool_exp) { pokemon_v2_pokemoncolorname(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemoncolornameModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "pokemon_v2_pokemoncolorname" using primary key columns
    queryPokemon_v2_pokemoncolorname_by_pk(variables: { id: number }, resultSelector: string | ((qb: PokemonV2PokemoncolornameModelSelector) => PokemonV2PokemoncolornameModelSelector) = pokemonV2PokemoncolornameModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ pokemon_v2_pokemoncolorname_by_pk: PokemonV2PokemoncolornameModelType}>(`query pokemon_v2_pokemoncolorname_by_pk($id: Int!) { pokemon_v2_pokemoncolorname_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemoncolornameModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // An array relationship
    queryPokemon_v2_pokemonspecies(variables: { distinctOn?: PokemonV2PokemonspeciesSelectColumn[], limit?: number, offset?: number, orderBy?: PokemonV2PokemonspeciesOrderBy[], where?: PokemonV2PokemonspeciesBoolExp }, resultSelector: string | ((qb: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector) = pokemonV2PokemonspeciesModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ pokemon_v2_pokemonspecies: PokemonV2PokemonspeciesModelType[]}>(`query pokemon_v2_pokemonspecies($distinctOn: [pokemon_v2_pokemonspecies_select_column!], $limit: Int, $offset: Int, $orderBy: [pokemon_v2_pokemonspecies_order_by!], $where: pokemon_v2_pokemonspecies_bool_exp) { pokemon_v2_pokemonspecies(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemonspeciesModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "pokemon_v2_pokemonspecies" using primary key columns
    queryPokemon_v2_pokemonspecies_by_pk(variables: { id: number }, resultSelector: string | ((qb: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector) = pokemonV2PokemonspeciesModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ pokemon_v2_pokemonspecies_by_pk: PokemonV2PokemonspeciesModelType}>(`query pokemon_v2_pokemonspecies_by_pk($id: Int!) { pokemon_v2_pokemonspecies_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemonspeciesModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "pokemon_v2_pokemonspeciesflavortext"
    queryPokemon_v2_pokemonspeciesflavortext(variables: { distinctOn?: PokemonV2PokemonspeciesflavortextSelectColumn[], limit?: number, offset?: number, orderBy?: PokemonV2PokemonspeciesflavortextOrderBy[], where?: PokemonV2PokemonspeciesflavortextBoolExp }, resultSelector: string | ((qb: PokemonV2PokemonspeciesflavortextModelSelector) => PokemonV2PokemonspeciesflavortextModelSelector) = pokemonV2PokemonspeciesflavortextModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ pokemon_v2_pokemonspeciesflavortext: PokemonV2PokemonspeciesflavortextModelType[]}>(`query pokemon_v2_pokemonspeciesflavortext($distinctOn: [pokemon_v2_pokemonspeciesflavortext_select_column!], $limit: Int, $offset: Int, $orderBy: [pokemon_v2_pokemonspeciesflavortext_order_by!], $where: pokemon_v2_pokemonspeciesflavortext_bool_exp) { pokemon_v2_pokemonspeciesflavortext(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemonspeciesflavortextModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "pokemon_v2_pokemonspeciesflavortext" using primary key columns
    queryPokemon_v2_pokemonspeciesflavortext_by_pk(variables: { id: number }, resultSelector: string | ((qb: PokemonV2PokemonspeciesflavortextModelSelector) => PokemonV2PokemonspeciesflavortextModelSelector) = pokemonV2PokemonspeciesflavortextModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ pokemon_v2_pokemonspeciesflavortext_by_pk: PokemonV2PokemonspeciesflavortextModelType}>(`query pokemon_v2_pokemonspeciesflavortext_by_pk($id: Int!) { pokemon_v2_pokemonspeciesflavortext_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemonspeciesflavortextModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "pokemon_v2_pokemonspeciesname"
    queryPokemon_v2_pokemonspeciesname(variables: { distinctOn?: PokemonV2PokemonspeciesnameSelectColumn[], limit?: number, offset?: number, orderBy?: PokemonV2PokemonspeciesnameOrderBy[], where?: PokemonV2PokemonspeciesnameBoolExp }, resultSelector: string | ((qb: PokemonV2PokemonspeciesnameModelSelector) => PokemonV2PokemonspeciesnameModelSelector) = pokemonV2PokemonspeciesnameModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ pokemon_v2_pokemonspeciesname: PokemonV2PokemonspeciesnameModelType[]}>(`query pokemon_v2_pokemonspeciesname($distinctOn: [pokemon_v2_pokemonspeciesname_select_column!], $limit: Int, $offset: Int, $orderBy: [pokemon_v2_pokemonspeciesname_order_by!], $where: pokemon_v2_pokemonspeciesname_bool_exp) { pokemon_v2_pokemonspeciesname(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemonspeciesnameModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "pokemon_v2_pokemonspeciesname" using primary key columns
    queryPokemon_v2_pokemonspeciesname_by_pk(variables: { id: number }, resultSelector: string | ((qb: PokemonV2PokemonspeciesnameModelSelector) => PokemonV2PokemonspeciesnameModelSelector) = pokemonV2PokemonspeciesnameModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ pokemon_v2_pokemonspeciesname_by_pk: PokemonV2PokemonspeciesnameModelType}>(`query pokemon_v2_pokemonspeciesname_by_pk($id: Int!) { pokemon_v2_pokemonspeciesname_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemonspeciesnameModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "pokemon_v2_pokemontype"
    queryPokemon_v2_pokemontype(variables: { distinctOn?: PokemonV2PokemontypeSelectColumn[], limit?: number, offset?: number, orderBy?: PokemonV2PokemontypeOrderBy[], where?: PokemonV2PokemontypeBoolExp }, resultSelector: string | ((qb: PokemonV2PokemontypeModelSelector) => PokemonV2PokemontypeModelSelector) = pokemonV2PokemontypeModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ pokemon_v2_pokemontype: PokemonV2PokemontypeModelType[]}>(`query pokemon_v2_pokemontype($distinctOn: [pokemon_v2_pokemontype_select_column!], $limit: Int, $offset: Int, $orderBy: [pokemon_v2_pokemontype_order_by!], $where: pokemon_v2_pokemontype_bool_exp) { pokemon_v2_pokemontype(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemontypeModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "pokemon_v2_pokemontype" using primary key columns
    queryPokemon_v2_pokemontype_by_pk(variables: { id: number }, resultSelector: string | ((qb: PokemonV2PokemontypeModelSelector) => PokemonV2PokemontypeModelSelector) = pokemonV2PokemontypeModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ pokemon_v2_pokemontype_by_pk: PokemonV2PokemontypeModelType}>(`query pokemon_v2_pokemontype_by_pk($id: Int!) { pokemon_v2_pokemontype_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemontypeModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "pokemon_v2_type"
    queryPokemon_v2_type(variables: { distinctOn?: PokemonV2TypeSelectColumn[], limit?: number, offset?: number, orderBy?: PokemonV2TypeOrderBy[], where?: PokemonV2TypeBoolExp }, resultSelector: string | ((qb: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector) = pokemonV2TypeModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ pokemon_v2_type: PokemonV2TypeModelType[]}>(`query pokemon_v2_type($distinctOn: [pokemon_v2_type_select_column!], $limit: Int, $offset: Int, $orderBy: [pokemon_v2_type_order_by!], $where: pokemon_v2_type_bool_exp) { pokemon_v2_type(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2TypeModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "pokemon_v2_type" using primary key columns
    queryPokemon_v2_type_by_pk(variables: { id: number }, resultSelector: string | ((qb: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector) = pokemonV2TypeModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ pokemon_v2_type_by_pk: PokemonV2TypeModelType}>(`query pokemon_v2_type_by_pk($id: Int!) { pokemon_v2_type_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2TypeModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "pokemon_v2_pokemon"
    subscribePokemon_v2_pokemon(variables: { distinctOn?: PokemonV2PokemonSelectColumn[], limit?: number, offset?: number, orderBy?: PokemonV2PokemonOrderBy[], where?: PokemonV2PokemonBoolExp }, resultSelector: string | ((qb: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector) = pokemonV2PokemonModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ pokemon_v2_pokemon: PokemonV2PokemonModelType[]}>(`subscription pokemon_v2_pokemon($distinctOn: [pokemon_v2_pokemon_select_column!], $limit: Int, $offset: Int, $orderBy: [pokemon_v2_pokemon_order_by!], $where: pokemon_v2_pokemon_bool_exp) { pokemon_v2_pokemon(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemonModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "pokemon_v2_pokemon" using primary key columns
    subscribePokemon_v2_pokemon_by_pk(variables: { id: number }, resultSelector: string | ((qb: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector) = pokemonV2PokemonModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ pokemon_v2_pokemon_by_pk: PokemonV2PokemonModelType}>(`subscription pokemon_v2_pokemon_by_pk($id: Int!) { pokemon_v2_pokemon_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemonModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "pokemon_v2_pokemoncolor"
    subscribePokemon_v2_pokemoncolor(variables: { distinctOn?: PokemonV2PokemoncolorSelectColumn[], limit?: number, offset?: number, orderBy?: PokemonV2PokemoncolorOrderBy[], where?: PokemonV2PokemoncolorBoolExp }, resultSelector: string | ((qb: PokemonV2PokemoncolorModelSelector) => PokemonV2PokemoncolorModelSelector) = pokemonV2PokemoncolorModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ pokemon_v2_pokemoncolor: PokemonV2PokemoncolorModelType[]}>(`subscription pokemon_v2_pokemoncolor($distinctOn: [pokemon_v2_pokemoncolor_select_column!], $limit: Int, $offset: Int, $orderBy: [pokemon_v2_pokemoncolor_order_by!], $where: pokemon_v2_pokemoncolor_bool_exp) { pokemon_v2_pokemoncolor(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemoncolorModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "pokemon_v2_pokemoncolor" using primary key columns
    subscribePokemon_v2_pokemoncolor_by_pk(variables: { id: number }, resultSelector: string | ((qb: PokemonV2PokemoncolorModelSelector) => PokemonV2PokemoncolorModelSelector) = pokemonV2PokemoncolorModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ pokemon_v2_pokemoncolor_by_pk: PokemonV2PokemoncolorModelType}>(`subscription pokemon_v2_pokemoncolor_by_pk($id: Int!) { pokemon_v2_pokemoncolor_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemoncolorModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "pokemon_v2_pokemoncolorname"
    subscribePokemon_v2_pokemoncolorname(variables: { distinctOn?: PokemonV2PokemoncolornameSelectColumn[], limit?: number, offset?: number, orderBy?: PokemonV2PokemoncolornameOrderBy[], where?: PokemonV2PokemoncolornameBoolExp }, resultSelector: string | ((qb: PokemonV2PokemoncolornameModelSelector) => PokemonV2PokemoncolornameModelSelector) = pokemonV2PokemoncolornameModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ pokemon_v2_pokemoncolorname: PokemonV2PokemoncolornameModelType[]}>(`subscription pokemon_v2_pokemoncolorname($distinctOn: [pokemon_v2_pokemoncolorname_select_column!], $limit: Int, $offset: Int, $orderBy: [pokemon_v2_pokemoncolorname_order_by!], $where: pokemon_v2_pokemoncolorname_bool_exp) { pokemon_v2_pokemoncolorname(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemoncolornameModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "pokemon_v2_pokemoncolorname" using primary key columns
    subscribePokemon_v2_pokemoncolorname_by_pk(variables: { id: number }, resultSelector: string | ((qb: PokemonV2PokemoncolornameModelSelector) => PokemonV2PokemoncolornameModelSelector) = pokemonV2PokemoncolornameModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ pokemon_v2_pokemoncolorname_by_pk: PokemonV2PokemoncolornameModelType}>(`subscription pokemon_v2_pokemoncolorname_by_pk($id: Int!) { pokemon_v2_pokemoncolorname_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemoncolornameModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // An array relationship
    subscribePokemon_v2_pokemonspecies(variables: { distinctOn?: PokemonV2PokemonspeciesSelectColumn[], limit?: number, offset?: number, orderBy?: PokemonV2PokemonspeciesOrderBy[], where?: PokemonV2PokemonspeciesBoolExp }, resultSelector: string | ((qb: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector) = pokemonV2PokemonspeciesModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ pokemon_v2_pokemonspecies: PokemonV2PokemonspeciesModelType[]}>(`subscription pokemon_v2_pokemonspecies($distinctOn: [pokemon_v2_pokemonspecies_select_column!], $limit: Int, $offset: Int, $orderBy: [pokemon_v2_pokemonspecies_order_by!], $where: pokemon_v2_pokemonspecies_bool_exp) { pokemon_v2_pokemonspecies(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemonspeciesModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "pokemon_v2_pokemonspecies" using primary key columns
    subscribePokemon_v2_pokemonspecies_by_pk(variables: { id: number }, resultSelector: string | ((qb: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector) = pokemonV2PokemonspeciesModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ pokemon_v2_pokemonspecies_by_pk: PokemonV2PokemonspeciesModelType}>(`subscription pokemon_v2_pokemonspecies_by_pk($id: Int!) { pokemon_v2_pokemonspecies_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemonspeciesModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "pokemon_v2_pokemonspeciesflavortext"
    subscribePokemon_v2_pokemonspeciesflavortext(variables: { distinctOn?: PokemonV2PokemonspeciesflavortextSelectColumn[], limit?: number, offset?: number, orderBy?: PokemonV2PokemonspeciesflavortextOrderBy[], where?: PokemonV2PokemonspeciesflavortextBoolExp }, resultSelector: string | ((qb: PokemonV2PokemonspeciesflavortextModelSelector) => PokemonV2PokemonspeciesflavortextModelSelector) = pokemonV2PokemonspeciesflavortextModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ pokemon_v2_pokemonspeciesflavortext: PokemonV2PokemonspeciesflavortextModelType[]}>(`subscription pokemon_v2_pokemonspeciesflavortext($distinctOn: [pokemon_v2_pokemonspeciesflavortext_select_column!], $limit: Int, $offset: Int, $orderBy: [pokemon_v2_pokemonspeciesflavortext_order_by!], $where: pokemon_v2_pokemonspeciesflavortext_bool_exp) { pokemon_v2_pokemonspeciesflavortext(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemonspeciesflavortextModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "pokemon_v2_pokemonspeciesflavortext" using primary key columns
    subscribePokemon_v2_pokemonspeciesflavortext_by_pk(variables: { id: number }, resultSelector: string | ((qb: PokemonV2PokemonspeciesflavortextModelSelector) => PokemonV2PokemonspeciesflavortextModelSelector) = pokemonV2PokemonspeciesflavortextModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ pokemon_v2_pokemonspeciesflavortext_by_pk: PokemonV2PokemonspeciesflavortextModelType}>(`subscription pokemon_v2_pokemonspeciesflavortext_by_pk($id: Int!) { pokemon_v2_pokemonspeciesflavortext_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemonspeciesflavortextModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "pokemon_v2_pokemonspeciesname"
    subscribePokemon_v2_pokemonspeciesname(variables: { distinctOn?: PokemonV2PokemonspeciesnameSelectColumn[], limit?: number, offset?: number, orderBy?: PokemonV2PokemonspeciesnameOrderBy[], where?: PokemonV2PokemonspeciesnameBoolExp }, resultSelector: string | ((qb: PokemonV2PokemonspeciesnameModelSelector) => PokemonV2PokemonspeciesnameModelSelector) = pokemonV2PokemonspeciesnameModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ pokemon_v2_pokemonspeciesname: PokemonV2PokemonspeciesnameModelType[]}>(`subscription pokemon_v2_pokemonspeciesname($distinctOn: [pokemon_v2_pokemonspeciesname_select_column!], $limit: Int, $offset: Int, $orderBy: [pokemon_v2_pokemonspeciesname_order_by!], $where: pokemon_v2_pokemonspeciesname_bool_exp) { pokemon_v2_pokemonspeciesname(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemonspeciesnameModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "pokemon_v2_pokemonspeciesname" using primary key columns
    subscribePokemon_v2_pokemonspeciesname_by_pk(variables: { id: number }, resultSelector: string | ((qb: PokemonV2PokemonspeciesnameModelSelector) => PokemonV2PokemonspeciesnameModelSelector) = pokemonV2PokemonspeciesnameModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ pokemon_v2_pokemonspeciesname_by_pk: PokemonV2PokemonspeciesnameModelType}>(`subscription pokemon_v2_pokemonspeciesname_by_pk($id: Int!) { pokemon_v2_pokemonspeciesname_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemonspeciesnameModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "pokemon_v2_pokemontype"
    subscribePokemon_v2_pokemontype(variables: { distinctOn?: PokemonV2PokemontypeSelectColumn[], limit?: number, offset?: number, orderBy?: PokemonV2PokemontypeOrderBy[], where?: PokemonV2PokemontypeBoolExp }, resultSelector: string | ((qb: PokemonV2PokemontypeModelSelector) => PokemonV2PokemontypeModelSelector) = pokemonV2PokemontypeModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ pokemon_v2_pokemontype: PokemonV2PokemontypeModelType[]}>(`subscription pokemon_v2_pokemontype($distinctOn: [pokemon_v2_pokemontype_select_column!], $limit: Int, $offset: Int, $orderBy: [pokemon_v2_pokemontype_order_by!], $where: pokemon_v2_pokemontype_bool_exp) { pokemon_v2_pokemontype(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemontypeModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "pokemon_v2_pokemontype" using primary key columns
    subscribePokemon_v2_pokemontype_by_pk(variables: { id: number }, resultSelector: string | ((qb: PokemonV2PokemontypeModelSelector) => PokemonV2PokemontypeModelSelector) = pokemonV2PokemontypeModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ pokemon_v2_pokemontype_by_pk: PokemonV2PokemontypeModelType}>(`subscription pokemon_v2_pokemontype_by_pk($id: Int!) { pokemon_v2_pokemontype_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2PokemontypeModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "pokemon_v2_type"
    subscribePokemon_v2_type(variables: { distinctOn?: PokemonV2TypeSelectColumn[], limit?: number, offset?: number, orderBy?: PokemonV2TypeOrderBy[], where?: PokemonV2TypeBoolExp }, resultSelector: string | ((qb: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector) = pokemonV2TypeModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ pokemon_v2_type: PokemonV2TypeModelType[]}>(`subscription pokemon_v2_type($distinctOn: [pokemon_v2_type_select_column!], $limit: Int, $offset: Int, $orderBy: [pokemon_v2_type_order_by!], $where: pokemon_v2_type_bool_exp) { pokemon_v2_type(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2TypeModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "pokemon_v2_type" using primary key columns
    subscribePokemon_v2_type_by_pk(variables: { id: number }, resultSelector: string | ((qb: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector) = pokemonV2TypeModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ pokemon_v2_type_by_pk: PokemonV2TypeModelType}>(`subscription pokemon_v2_type_by_pk($id: Int!) { pokemon_v2_type_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PokemonV2TypeModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
  })))
