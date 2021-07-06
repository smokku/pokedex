/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EgggroupStddevFieldsBase
 * auto generated base class for the model PokemonV2EgggroupStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2EgggroupStddevFieldsModelBase = ModelBase
  .named('PokemonV2EgggroupStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_egggroup_stddev_fields"), "pokemon_v2_egggroup_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EgggroupStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EgggroupStddevFields() {
  return new PokemonV2EgggroupStddevFieldsModelSelector()
}

export const pokemonV2EgggroupStddevFieldsModelPrimitives = selectFromPokemonV2EgggroupStddevFields()
