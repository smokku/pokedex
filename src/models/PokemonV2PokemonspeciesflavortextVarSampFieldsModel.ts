import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesflavortextVarSampFieldsModelBase } from "./PokemonV2PokemonspeciesflavortextVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesflavortextVarSampFieldsModel */
export interface PokemonV2PokemonspeciesflavortextVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesflavortextVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesflavortextVarSampFieldsModel */
export { selectFromPokemonV2PokemonspeciesflavortextVarSampFields, pokemonV2PokemonspeciesflavortextVarSampFieldsModelPrimitives, PokemonV2PokemonspeciesflavortextVarSampFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextVarSampFieldsModel.base"

/**
 * PokemonV2PokemonspeciesflavortextVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonspeciesflavortextVarSampFieldsModel = PokemonV2PokemonspeciesflavortextVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
