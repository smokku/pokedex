/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonModel, PokemonV2PokemonModelType } from "./PokemonV2PokemonModel"
import { PokemonV2PokemonModelSelector } from "./PokemonV2PokemonModel.base"
import { PokemonV2TypeModel, PokemonV2TypeModelType } from "./PokemonV2TypeModel"
import { PokemonV2TypeModelSelector } from "./PokemonV2TypeModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  pokemon_v2_pokemon: PokemonV2PokemonModelType;
}

/**
 * PokemonV2PokemontypeBase
 * auto generated base class for the model PokemonV2PokemontypeModel.
 *
 * columns and relationships of "pokemon_v2_pokemontype"
 */
export const PokemonV2PokemontypeModelBase = withTypedRefs<Refs>()(ModelBase
  .named('PokemonV2Pokemontype')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemontype"), "pokemon_v2_pokemontype"),
    id: types.union(types.undefined, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_pokemon: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PokemonV2PokemonModel))),
    /** An object relationship */
    pokemon_v2_type: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeModel)),
    slot: types.union(types.undefined, types.integer),
    type_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PokemonV2PokemontypeModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get slot() { return this.__attr(`slot`) }
  get type_id() { return this.__attr(`type_id`) }
  pokemon_v2_pokemon(builder?: string | PokemonV2PokemonModelSelector | ((selector: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector)) { return this.__child(`pokemon_v2_pokemon`, PokemonV2PokemonModelSelector, builder) }
  pokemon_v2_type(builder?: string | PokemonV2TypeModelSelector | ((selector: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector)) { return this.__child(`pokemon_v2_type`, PokemonV2TypeModelSelector, builder) }
}
export function selectFromPokemonV2Pokemontype() {
  return new PokemonV2PokemontypeModelSelector()
}

export const pokemonV2PokemontypeModelPrimitives = selectFromPokemonV2Pokemontype().pokemon_id.slot.type_id
