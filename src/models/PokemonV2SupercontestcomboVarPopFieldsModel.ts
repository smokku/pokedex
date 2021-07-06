import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontestcomboVarPopFieldsModelBase } from "./PokemonV2SupercontestcomboVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontestcomboVarPopFieldsModel */
export interface PokemonV2SupercontestcomboVarPopFieldsModelType extends Instance<typeof PokemonV2SupercontestcomboVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontestcomboVarPopFieldsModel */
export { selectFromPokemonV2SupercontestcomboVarPopFields, pokemonV2SupercontestcomboVarPopFieldsModelPrimitives, PokemonV2SupercontestcomboVarPopFieldsModelSelector } from "./PokemonV2SupercontestcomboVarPopFieldsModel.base"

/**
 * PokemonV2SupercontestcomboVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2SupercontestcomboVarPopFieldsModel = PokemonV2SupercontestcomboVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
