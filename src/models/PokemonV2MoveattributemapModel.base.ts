/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveModel, PokemonV2MoveModelType } from "./PokemonV2MoveModel"
import { PokemonV2MoveModelSelector } from "./PokemonV2MoveModel.base"
import { PokemonV2MoveattributeModel, PokemonV2MoveattributeModelType } from "./PokemonV2MoveattributeModel"
import { PokemonV2MoveattributeModelSelector } from "./PokemonV2MoveattributeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributemapBase
 * auto generated base class for the model PokemonV2MoveattributemapModel.
 *
 * columns and relationships of "pokemon_v2_moveattributemap"
 */
export const PokemonV2MoveattributemapModelBase = ModelBase
  .named('PokemonV2Moveattributemap')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributemap"), "pokemon_v2_moveattributemap"),
    id: types.union(types.undefined, types.integer),
    move_attribute_id: types.union(types.undefined, types.null, types.integer),
    move_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_move: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveModel)),
    /** An object relationship */
    pokemon_v2_moveattribute: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributeModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributemapModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get move_attribute_id() { return this.__attr(`move_attribute_id`) }
  get move_id() { return this.__attr(`move_id`) }
  pokemon_v2_move(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemon_v2_move`, PokemonV2MoveModelSelector, builder) }
  pokemon_v2_moveattribute(builder?: string | PokemonV2MoveattributeModelSelector | ((selector: PokemonV2MoveattributeModelSelector) => PokemonV2MoveattributeModelSelector)) { return this.__child(`pokemon_v2_moveattribute`, PokemonV2MoveattributeModelSelector, builder) }
}
export function selectFromPokemonV2Moveattributemap() {
  return new PokemonV2MoveattributemapModelSelector()
}

export const pokemonV2MoveattributemapModelPrimitives = selectFromPokemonV2Moveattributemap().move_attribute_id.move_id
