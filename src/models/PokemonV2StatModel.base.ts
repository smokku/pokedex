/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2CharacteristicAggregateModel, PokemonV2CharacteristicAggregateModelType } from "./PokemonV2CharacteristicAggregateModel"
import { PokemonV2CharacteristicAggregateModelSelector } from "./PokemonV2CharacteristicAggregateModel.base"
import { PokemonV2CharacteristicModel, PokemonV2CharacteristicModelType } from "./PokemonV2CharacteristicModel"
import { PokemonV2CharacteristicModelSelector } from "./PokemonV2CharacteristicModel.base"
import { PokemonV2MovedamageclassModel, PokemonV2MovedamageclassModelType } from "./PokemonV2MovedamageclassModel"
import { PokemonV2MovedamageclassModelSelector } from "./PokemonV2MovedamageclassModel.base"
import { PokemonV2MovemetastatchangeAggregateModel, PokemonV2MovemetastatchangeAggregateModelType } from "./PokemonV2MovemetastatchangeAggregateModel"
import { PokemonV2MovemetastatchangeAggregateModelSelector } from "./PokemonV2MovemetastatchangeAggregateModel.base"
import { PokemonV2MovemetastatchangeModel, PokemonV2MovemetastatchangeModelType } from "./PokemonV2MovemetastatchangeModel"
import { PokemonV2MovemetastatchangeModelSelector } from "./PokemonV2MovemetastatchangeModel.base"
import { PokemonV2NatureAggregateModel, PokemonV2NatureAggregateModelType } from "./PokemonV2NatureAggregateModel"
import { PokemonV2NatureAggregateModelSelector } from "./PokemonV2NatureAggregateModel.base"
import { PokemonV2NatureModel, PokemonV2NatureModelType } from "./PokemonV2NatureModel"
import { PokemonV2NatureModelSelector } from "./PokemonV2NatureModel.base"
import { PokemonV2PokemonstatAggregateModel, PokemonV2PokemonstatAggregateModelType } from "./PokemonV2PokemonstatAggregateModel"
import { PokemonV2PokemonstatAggregateModelSelector } from "./PokemonV2PokemonstatAggregateModel.base"
import { PokemonV2PokemonstatModel, PokemonV2PokemonstatModelType } from "./PokemonV2PokemonstatModel"
import { PokemonV2PokemonstatModelSelector } from "./PokemonV2PokemonstatModel.base"
import { PokemonV2StatnameAggregateModel, PokemonV2StatnameAggregateModelType } from "./PokemonV2StatnameAggregateModel"
import { PokemonV2StatnameAggregateModelSelector } from "./PokemonV2StatnameAggregateModel.base"
import { PokemonV2StatnameModel, PokemonV2StatnameModelType } from "./PokemonV2StatnameModel"
import { PokemonV2StatnameModelSelector } from "./PokemonV2StatnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2StatBase
 * auto generated base class for the model PokemonV2StatModel.
 *
 * columns and relationships of "pokemon_v2_stat"
 */
export const PokemonV2StatModelBase = ModelBase
  .named('PokemonV2Stat')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_stat"), "pokemon_v2_stat"),
    game_index: types.union(types.undefined, types.integer),
    id: types.union(types.undefined, types.integer),
    is_battle_only: types.union(types.undefined, types.boolean),
    move_damage_class_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemonV2NaturesByIncreasedStatId: types.union(types.undefined, types.array(types.late((): any => PokemonV2NatureModel))),
    /** An aggregate relationship */
    pokemonV2NaturesByIncreasedStatId_aggregate: types.union(types.undefined, types.late((): any => PokemonV2NatureAggregateModel)),
    /** An array relationship */
    pokemon_v2_characteristics: types.union(types.undefined, types.array(types.late((): any => PokemonV2CharacteristicModel))),
    /** An aggregate relationship */
    pokemon_v2_characteristics_aggregate: types.union(types.undefined, types.late((): any => PokemonV2CharacteristicAggregateModel)),
    /** An object relationship */
    pokemon_v2_movedamageclass: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassModel)),
    /** An array relationship */
    pokemon_v2_movemetastatchanges: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovemetastatchangeModel))),
    /** An aggregate relationship */
    pokemon_v2_movemetastatchanges_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovemetastatchangeAggregateModel)),
    /** An array relationship */
    pokemon_v2_natures: types.union(types.undefined, types.array(types.late((): any => PokemonV2NatureModel))),
    /** An aggregate relationship */
    pokemon_v2_natures_aggregate: types.union(types.undefined, types.late((): any => PokemonV2NatureAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonstats: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonstatModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonstats_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonstatAggregateModel)),
    /** An array relationship */
    pokemon_v2_statnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2StatnameModel))),
    /** An aggregate relationship */
    pokemon_v2_statnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2StatnameAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2StatModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get id() { return this.__attr(`id`) }
  get is_battle_only() { return this.__attr(`is_battle_only`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
  get name() { return this.__attr(`name`) }
  pokemonV2NaturesByIncreasedStatId(builder?: string | PokemonV2NatureModelSelector | ((selector: PokemonV2NatureModelSelector) => PokemonV2NatureModelSelector)) { return this.__child(`pokemonV2NaturesByIncreasedStatId`, PokemonV2NatureModelSelector, builder) }
  pokemonV2NaturesByIncreasedStatId_aggregate(builder?: string | PokemonV2NatureAggregateModelSelector | ((selector: PokemonV2NatureAggregateModelSelector) => PokemonV2NatureAggregateModelSelector)) { return this.__child(`pokemonV2NaturesByIncreasedStatId_aggregate`, PokemonV2NatureAggregateModelSelector, builder) }
  pokemon_v2_characteristics(builder?: string | PokemonV2CharacteristicModelSelector | ((selector: PokemonV2CharacteristicModelSelector) => PokemonV2CharacteristicModelSelector)) { return this.__child(`pokemon_v2_characteristics`, PokemonV2CharacteristicModelSelector, builder) }
  pokemon_v2_characteristics_aggregate(builder?: string | PokemonV2CharacteristicAggregateModelSelector | ((selector: PokemonV2CharacteristicAggregateModelSelector) => PokemonV2CharacteristicAggregateModelSelector)) { return this.__child(`pokemon_v2_characteristics_aggregate`, PokemonV2CharacteristicAggregateModelSelector, builder) }
  pokemon_v2_movedamageclass(builder?: string | PokemonV2MovedamageclassModelSelector | ((selector: PokemonV2MovedamageclassModelSelector) => PokemonV2MovedamageclassModelSelector)) { return this.__child(`pokemon_v2_movedamageclass`, PokemonV2MovedamageclassModelSelector, builder) }
  pokemon_v2_movemetastatchanges(builder?: string | PokemonV2MovemetastatchangeModelSelector | ((selector: PokemonV2MovemetastatchangeModelSelector) => PokemonV2MovemetastatchangeModelSelector)) { return this.__child(`pokemon_v2_movemetastatchanges`, PokemonV2MovemetastatchangeModelSelector, builder) }
  pokemon_v2_movemetastatchanges_aggregate(builder?: string | PokemonV2MovemetastatchangeAggregateModelSelector | ((selector: PokemonV2MovemetastatchangeAggregateModelSelector) => PokemonV2MovemetastatchangeAggregateModelSelector)) { return this.__child(`pokemon_v2_movemetastatchanges_aggregate`, PokemonV2MovemetastatchangeAggregateModelSelector, builder) }
  pokemon_v2_natures(builder?: string | PokemonV2NatureModelSelector | ((selector: PokemonV2NatureModelSelector) => PokemonV2NatureModelSelector)) { return this.__child(`pokemon_v2_natures`, PokemonV2NatureModelSelector, builder) }
  pokemon_v2_natures_aggregate(builder?: string | PokemonV2NatureAggregateModelSelector | ((selector: PokemonV2NatureAggregateModelSelector) => PokemonV2NatureAggregateModelSelector)) { return this.__child(`pokemon_v2_natures_aggregate`, PokemonV2NatureAggregateModelSelector, builder) }
  pokemon_v2_pokemonstats(builder?: string | PokemonV2PokemonstatModelSelector | ((selector: PokemonV2PokemonstatModelSelector) => PokemonV2PokemonstatModelSelector)) { return this.__child(`pokemon_v2_pokemonstats`, PokemonV2PokemonstatModelSelector, builder) }
  pokemon_v2_pokemonstats_aggregate(builder?: string | PokemonV2PokemonstatAggregateModelSelector | ((selector: PokemonV2PokemonstatAggregateModelSelector) => PokemonV2PokemonstatAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonstats_aggregate`, PokemonV2PokemonstatAggregateModelSelector, builder) }
  pokemon_v2_statnames(builder?: string | PokemonV2StatnameModelSelector | ((selector: PokemonV2StatnameModelSelector) => PokemonV2StatnameModelSelector)) { return this.__child(`pokemon_v2_statnames`, PokemonV2StatnameModelSelector, builder) }
  pokemon_v2_statnames_aggregate(builder?: string | PokemonV2StatnameAggregateModelSelector | ((selector: PokemonV2StatnameAggregateModelSelector) => PokemonV2StatnameAggregateModelSelector)) { return this.__child(`pokemon_v2_statnames_aggregate`, PokemonV2StatnameAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Stat() {
  return new PokemonV2StatModelSelector()
}

export const pokemonV2StatModelPrimitives = selectFromPokemonV2Stat().game_index.is_battle_only.move_damage_class_id.name
