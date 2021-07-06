/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EgggroupStddevSampFieldsBase
 * auto generated base class for the model PokemonV2EgggroupStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EgggroupStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2EgggroupStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_egggroup_stddev_samp_fields"), "pokemon_v2_egggroup_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EgggroupStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EgggroupStddevSampFields() {
  return new PokemonV2EgggroupStddevSampFieldsModelSelector()
}

export const pokemonV2EgggroupStddevSampFieldsModelPrimitives = selectFromPokemonV2EgggroupStddevSampFields()
