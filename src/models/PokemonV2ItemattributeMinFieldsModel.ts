import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributeMinFieldsModelBase } from "./PokemonV2ItemattributeMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributeMinFieldsModel */
export interface PokemonV2ItemattributeMinFieldsModelType extends Instance<typeof PokemonV2ItemattributeMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributeMinFieldsModel */
export { selectFromPokemonV2ItemattributeMinFields, pokemonV2ItemattributeMinFieldsModelPrimitives, PokemonV2ItemattributeMinFieldsModelSelector } from "./PokemonV2ItemattributeMinFieldsModel.base"

/**
 * PokemonV2ItemattributeMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ItemattributeMinFieldsModel = PokemonV2ItemattributeMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
