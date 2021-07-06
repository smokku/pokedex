import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodVarPopFieldsModelBase } from "./PokemonV2MovelearnmethodVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodVarPopFieldsModel */
export interface PokemonV2MovelearnmethodVarPopFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodVarPopFieldsModel */
export { selectFromPokemonV2MovelearnmethodVarPopFields, pokemonV2MovelearnmethodVarPopFieldsModelPrimitives, PokemonV2MovelearnmethodVarPopFieldsModelSelector } from "./PokemonV2MovelearnmethodVarPopFieldsModel.base"

/**
 * PokemonV2MovelearnmethodVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovelearnmethodVarPopFieldsModel = PokemonV2MovelearnmethodVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
