import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontestcomboSumFieldsModelBase } from "./PokemonV2SupercontestcomboSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontestcomboSumFieldsModel */
export interface PokemonV2SupercontestcomboSumFieldsModelType extends Instance<typeof PokemonV2SupercontestcomboSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontestcomboSumFieldsModel */
export { selectFromPokemonV2SupercontestcomboSumFields, pokemonV2SupercontestcomboSumFieldsModelPrimitives, PokemonV2SupercontestcomboSumFieldsModelSelector } from "./PokemonV2SupercontestcomboSumFieldsModel.base"

/**
 * PokemonV2SupercontestcomboSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2SupercontestcomboSumFieldsModel = PokemonV2SupercontestcomboSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
