import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodVarPopFieldsModelBase } from "./PokemonV2EncountermethodVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodVarPopFieldsModel */
export interface PokemonV2EncountermethodVarPopFieldsModelType extends Instance<typeof PokemonV2EncountermethodVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodVarPopFieldsModel */
export { selectFromPokemonV2EncountermethodVarPopFields, pokemonV2EncountermethodVarPopFieldsModelPrimitives, PokemonV2EncountermethodVarPopFieldsModelSelector } from "./PokemonV2EncountermethodVarPopFieldsModel.base"

/**
 * PokemonV2EncountermethodVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EncountermethodVarPopFieldsModel = PokemonV2EncountermethodVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
