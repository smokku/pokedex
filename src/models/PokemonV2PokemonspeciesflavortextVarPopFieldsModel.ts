import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesflavortextVarPopFieldsModelBase } from "./PokemonV2PokemonspeciesflavortextVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesflavortextVarPopFieldsModel */
export interface PokemonV2PokemonspeciesflavortextVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesflavortextVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesflavortextVarPopFieldsModel */
export { selectFromPokemonV2PokemonspeciesflavortextVarPopFields, pokemonV2PokemonspeciesflavortextVarPopFieldsModelPrimitives, PokemonV2PokemonspeciesflavortextVarPopFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextVarPopFieldsModel.base"

/**
 * PokemonV2PokemonspeciesflavortextVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonspeciesflavortextVarPopFieldsModel = PokemonV2PokemonspeciesflavortextVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
