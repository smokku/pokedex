/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EgggroupModel, PokemonV2EgggroupModelType } from "./PokemonV2EgggroupModel"
import { PokemonV2EgggroupModelSelector } from "./PokemonV2EgggroupModel.base"
import { PokemonV2PokemonspeciesModel, PokemonV2PokemonspeciesModelType } from "./PokemonV2PokemonspeciesModel"
import { PokemonV2PokemonspeciesModelSelector } from "./PokemonV2PokemonspeciesModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonegggroupBase
 * auto generated base class for the model PokemonV2PokemonegggroupModel.
 *
 * columns and relationships of "pokemon_v2_pokemonegggroup"
 */
export const PokemonV2PokemonegggroupModelBase = ModelBase
  .named('PokemonV2Pokemonegggroup')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonegggroup"), "pokemon_v2_pokemonegggroup"),
    egg_group_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    pokemon_species_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_egggroup: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupModel)),
    /** An object relationship */
    pokemon_v2_pokemonspecy: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonegggroupModelSelector extends QueryBuilder {
  get egg_group_id() { return this.__attr(`egg_group_id`) }
  get id() { return this.__attr(`id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
  pokemon_v2_egggroup(builder?: string | PokemonV2EgggroupModelSelector | ((selector: PokemonV2EgggroupModelSelector) => PokemonV2EgggroupModelSelector)) { return this.__child(`pokemon_v2_egggroup`, PokemonV2EgggroupModelSelector, builder) }
  pokemon_v2_pokemonspecy(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecy`, PokemonV2PokemonspeciesModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonegggroup() {
  return new PokemonV2PokemonegggroupModelSelector()
}

export const pokemonV2PokemonegggroupModelPrimitives = selectFromPokemonV2Pokemonegggroup().egg_group_id.pokemon_species_id
