import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributedescriptionMaxFieldsModelBase } from "./PokemonV2ItemattributedescriptionMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributedescriptionMaxFieldsModel */
export interface PokemonV2ItemattributedescriptionMaxFieldsModelType extends Instance<typeof PokemonV2ItemattributedescriptionMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributedescriptionMaxFieldsModel */
export { selectFromPokemonV2ItemattributedescriptionMaxFields, pokemonV2ItemattributedescriptionMaxFieldsModelPrimitives, PokemonV2ItemattributedescriptionMaxFieldsModelSelector } from "./PokemonV2ItemattributedescriptionMaxFieldsModel.base"

/**
 * PokemonV2ItemattributedescriptionMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ItemattributedescriptionMaxFieldsModel = PokemonV2ItemattributedescriptionMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
