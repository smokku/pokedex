import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontestcomboVarianceFieldsModelBase } from "./PokemonV2SupercontestcomboVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontestcomboVarianceFieldsModel */
export interface PokemonV2SupercontestcomboVarianceFieldsModelType extends Instance<typeof PokemonV2SupercontestcomboVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontestcomboVarianceFieldsModel */
export { selectFromPokemonV2SupercontestcomboVarianceFields, pokemonV2SupercontestcomboVarianceFieldsModelPrimitives, PokemonV2SupercontestcomboVarianceFieldsModelSelector } from "./PokemonV2SupercontestcomboVarianceFieldsModel.base"

/**
 * PokemonV2SupercontestcomboVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2SupercontestcomboVarianceFieldsModel = PokemonV2SupercontestcomboVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
