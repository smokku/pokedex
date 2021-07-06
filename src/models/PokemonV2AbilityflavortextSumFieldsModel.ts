import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityflavortextSumFieldsModelBase } from "./PokemonV2AbilityflavortextSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityflavortextSumFieldsModel */
export interface PokemonV2AbilityflavortextSumFieldsModelType extends Instance<typeof PokemonV2AbilityflavortextSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityflavortextSumFieldsModel */
export { selectFromPokemonV2AbilityflavortextSumFields, pokemonV2AbilityflavortextSumFieldsModelPrimitives, PokemonV2AbilityflavortextSumFieldsModelSelector } from "./PokemonV2AbilityflavortextSumFieldsModel.base"

/**
 * PokemonV2AbilityflavortextSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2AbilityflavortextSumFieldsModel = PokemonV2AbilityflavortextSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
