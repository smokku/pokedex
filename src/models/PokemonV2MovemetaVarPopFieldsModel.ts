import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaVarPopFieldsModelBase } from "./PokemonV2MovemetaVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaVarPopFieldsModel */
export interface PokemonV2MovemetaVarPopFieldsModelType extends Instance<typeof PokemonV2MovemetaVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaVarPopFieldsModel */
export { selectFromPokemonV2MovemetaVarPopFields, pokemonV2MovemetaVarPopFieldsModelPrimitives, PokemonV2MovemetaVarPopFieldsModelSelector } from "./PokemonV2MovemetaVarPopFieldsModel.base"

/**
 * PokemonV2MovemetaVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovemetaVarPopFieldsModel = PokemonV2MovemetaVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
