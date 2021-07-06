/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2CharacteristicdescriptionAggregateModel, PokemonV2CharacteristicdescriptionAggregateModelType } from "./PokemonV2CharacteristicdescriptionAggregateModel"
import { PokemonV2CharacteristicdescriptionAggregateModelSelector } from "./PokemonV2CharacteristicdescriptionAggregateModel.base"
import { PokemonV2CharacteristicdescriptionModel, PokemonV2CharacteristicdescriptionModelType } from "./PokemonV2CharacteristicdescriptionModel"
import { PokemonV2CharacteristicdescriptionModelSelector } from "./PokemonV2CharacteristicdescriptionModel.base"
import { PokemonV2StatModel, PokemonV2StatModelType } from "./PokemonV2StatModel"
import { PokemonV2StatModelSelector } from "./PokemonV2StatModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2CharacteristicBase
 * auto generated base class for the model PokemonV2CharacteristicModel.
 *
 * columns and relationships of "pokemon_v2_characteristic"
 */
export const PokemonV2CharacteristicModelBase = ModelBase
  .named('PokemonV2Characteristic')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_characteristic"), "pokemon_v2_characteristic"),
    gene_mod_5: types.union(types.undefined, types.integer),
    id: types.union(types.undefined, types.integer),
    /** An array relationship */
    pokemon_v2_characteristicdescriptions: types.union(types.undefined, types.array(types.late((): any => PokemonV2CharacteristicdescriptionModel))),
    /** An aggregate relationship */
    pokemon_v2_characteristicdescriptions_aggregate: types.union(types.undefined, types.late((): any => PokemonV2CharacteristicdescriptionAggregateModel)),
    /** An object relationship */
    pokemon_v2_stat: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatModel)),
    stat_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2CharacteristicModelSelector extends QueryBuilder {
  get gene_mod_5() { return this.__attr(`gene_mod_5`) }
  get id() { return this.__attr(`id`) }
  get stat_id() { return this.__attr(`stat_id`) }
  pokemon_v2_characteristicdescriptions(builder?: string | PokemonV2CharacteristicdescriptionModelSelector | ((selector: PokemonV2CharacteristicdescriptionModelSelector) => PokemonV2CharacteristicdescriptionModelSelector)) { return this.__child(`pokemon_v2_characteristicdescriptions`, PokemonV2CharacteristicdescriptionModelSelector, builder) }
  pokemon_v2_characteristicdescriptions_aggregate(builder?: string | PokemonV2CharacteristicdescriptionAggregateModelSelector | ((selector: PokemonV2CharacteristicdescriptionAggregateModelSelector) => PokemonV2CharacteristicdescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_characteristicdescriptions_aggregate`, PokemonV2CharacteristicdescriptionAggregateModelSelector, builder) }
  pokemon_v2_stat(builder?: string | PokemonV2StatModelSelector | ((selector: PokemonV2StatModelSelector) => PokemonV2StatModelSelector)) { return this.__child(`pokemon_v2_stat`, PokemonV2StatModelSelector, builder) }
}
export function selectFromPokemonV2Characteristic() {
  return new PokemonV2CharacteristicModelSelector()
}

export const pokemonV2CharacteristicModelPrimitives = selectFromPokemonV2Characteristic().gene_mod_5.stat_id
