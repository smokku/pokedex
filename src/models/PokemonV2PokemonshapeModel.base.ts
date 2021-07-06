/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonshapenameAggregateModel, PokemonV2PokemonshapenameAggregateModelType } from "./PokemonV2PokemonshapenameAggregateModel"
import { PokemonV2PokemonshapenameAggregateModelSelector } from "./PokemonV2PokemonshapenameAggregateModel.base"
import { PokemonV2PokemonshapenameModel, PokemonV2PokemonshapenameModelType } from "./PokemonV2PokemonshapenameModel"
import { PokemonV2PokemonshapenameModelSelector } from "./PokemonV2PokemonshapenameModel.base"
import { PokemonV2PokemonspeciesAggregateModel, PokemonV2PokemonspeciesAggregateModelType } from "./PokemonV2PokemonspeciesAggregateModel"
import { PokemonV2PokemonspeciesAggregateModelSelector } from "./PokemonV2PokemonspeciesAggregateModel.base"
import { PokemonV2PokemonspeciesModel, PokemonV2PokemonspeciesModelType } from "./PokemonV2PokemonspeciesModel"
import { PokemonV2PokemonspeciesModelSelector } from "./PokemonV2PokemonspeciesModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonshapeBase
 * auto generated base class for the model PokemonV2PokemonshapeModel.
 *
 * columns and relationships of "pokemon_v2_pokemonshape"
 */
export const PokemonV2PokemonshapeModelBase = ModelBase
  .named('PokemonV2Pokemonshape')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonshape"), "pokemon_v2_pokemonshape"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_pokemonshapenames: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonshapenameModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonshapenames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonshapenameAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonspecies: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonspecies_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonspeciesAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonshapeModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_pokemonshapenames(builder?: string | PokemonV2PokemonshapenameModelSelector | ((selector: PokemonV2PokemonshapenameModelSelector) => PokemonV2PokemonshapenameModelSelector)) { return this.__child(`pokemon_v2_pokemonshapenames`, PokemonV2PokemonshapenameModelSelector, builder) }
  pokemon_v2_pokemonshapenames_aggregate(builder?: string | PokemonV2PokemonshapenameAggregateModelSelector | ((selector: PokemonV2PokemonshapenameAggregateModelSelector) => PokemonV2PokemonshapenameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonshapenames_aggregate`, PokemonV2PokemonshapenameAggregateModelSelector, builder) }
  pokemon_v2_pokemonspecies(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies`, PokemonV2PokemonspeciesModelSelector, builder) }
  pokemon_v2_pokemonspecies_aggregate(builder?: string | PokemonV2PokemonspeciesAggregateModelSelector | ((selector: PokemonV2PokemonspeciesAggregateModelSelector) => PokemonV2PokemonspeciesAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies_aggregate`, PokemonV2PokemonspeciesAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonshape() {
  return new PokemonV2PokemonshapeModelSelector()
}

export const pokemonV2PokemonshapeModelPrimitives = selectFromPokemonV2Pokemonshape().name
