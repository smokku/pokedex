/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffectStddevFieldsBase
 * auto generated base class for the model PokemonV2ItemflingeffectStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemflingeffectStddevFieldsModelBase = ModelBase
  .named('PokemonV2ItemflingeffectStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffect_stddev_fields"), "pokemon_v2_itemflingeffect_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffectStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ItemflingeffectStddevFields() {
  return new PokemonV2ItemflingeffectStddevFieldsModelSelector()
}

export const pokemonV2ItemflingeffectStddevFieldsModelPrimitives = selectFromPokemonV2ItemflingeffectStddevFields()
