import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributedescriptionAggregateFieldsModelBase } from "./PokemonV2ItemattributedescriptionAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributedescriptionAggregateFieldsModel */
export interface PokemonV2ItemattributedescriptionAggregateFieldsModelType extends Instance<typeof PokemonV2ItemattributedescriptionAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributedescriptionAggregateFieldsModel */
export { selectFromPokemonV2ItemattributedescriptionAggregateFields, pokemonV2ItemattributedescriptionAggregateFieldsModelPrimitives, PokemonV2ItemattributedescriptionAggregateFieldsModelSelector } from "./PokemonV2ItemattributedescriptionAggregateFieldsModel.base"

/**
 * PokemonV2ItemattributedescriptionAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_itemattributedescription"
 */
export const PokemonV2ItemattributedescriptionAggregateFieldsModel = PokemonV2ItemattributedescriptionAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
