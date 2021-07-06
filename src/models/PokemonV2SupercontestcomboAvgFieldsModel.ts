import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontestcomboAvgFieldsModelBase } from "./PokemonV2SupercontestcomboAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontestcomboAvgFieldsModel */
export interface PokemonV2SupercontestcomboAvgFieldsModelType extends Instance<typeof PokemonV2SupercontestcomboAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontestcomboAvgFieldsModel */
export { selectFromPokemonV2SupercontestcomboAvgFields, pokemonV2SupercontestcomboAvgFieldsModelPrimitives, PokemonV2SupercontestcomboAvgFieldsModelSelector } from "./PokemonV2SupercontestcomboAvgFieldsModel.base"

/**
 * PokemonV2SupercontestcomboAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2SupercontestcomboAvgFieldsModel = PokemonV2SupercontestcomboAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
