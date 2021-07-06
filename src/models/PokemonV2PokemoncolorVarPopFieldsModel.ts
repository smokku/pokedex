import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolorVarPopFieldsModelBase } from "./PokemonV2PokemoncolorVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolorVarPopFieldsModel */
export interface PokemonV2PokemoncolorVarPopFieldsModelType extends Instance<typeof PokemonV2PokemoncolorVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolorVarPopFieldsModel */
export { selectFromPokemonV2PokemoncolorVarPopFields, pokemonV2PokemoncolorVarPopFieldsModelPrimitives, PokemonV2PokemoncolorVarPopFieldsModelSelector } from "./PokemonV2PokemoncolorVarPopFieldsModel.base"

/**
 * PokemonV2PokemoncolorVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemoncolorVarPopFieldsModel = PokemonV2PokemoncolorVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
