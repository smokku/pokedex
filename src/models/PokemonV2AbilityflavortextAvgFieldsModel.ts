import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityflavortextAvgFieldsModelBase } from "./PokemonV2AbilityflavortextAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityflavortextAvgFieldsModel */
export interface PokemonV2AbilityflavortextAvgFieldsModelType extends Instance<typeof PokemonV2AbilityflavortextAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityflavortextAvgFieldsModel */
export { selectFromPokemonV2AbilityflavortextAvgFields, pokemonV2AbilityflavortextAvgFieldsModelPrimitives, PokemonV2AbilityflavortextAvgFieldsModelSelector } from "./PokemonV2AbilityflavortextAvgFieldsModel.base"

/**
 * PokemonV2AbilityflavortextAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2AbilityflavortextAvgFieldsModel = PokemonV2AbilityflavortextAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
