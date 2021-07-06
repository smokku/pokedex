import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributemapMinFieldsModelBase } from "./PokemonV2ItemattributemapMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributemapMinFieldsModel */
export interface PokemonV2ItemattributemapMinFieldsModelType extends Instance<typeof PokemonV2ItemattributemapMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributemapMinFieldsModel */
export { selectFromPokemonV2ItemattributemapMinFields, pokemonV2ItemattributemapMinFieldsModelPrimitives, PokemonV2ItemattributemapMinFieldsModelSelector } from "./PokemonV2ItemattributemapMinFieldsModel.base"

/**
 * PokemonV2ItemattributemapMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ItemattributemapMinFieldsModel = PokemonV2ItemattributemapMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
