import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodVarSampFieldsModelBase } from "./PokemonV2MovelearnmethodVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodVarSampFieldsModel */
export interface PokemonV2MovelearnmethodVarSampFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodVarSampFieldsModel */
export { selectFromPokemonV2MovelearnmethodVarSampFields, pokemonV2MovelearnmethodVarSampFieldsModelPrimitives, PokemonV2MovelearnmethodVarSampFieldsModelSelector } from "./PokemonV2MovelearnmethodVarSampFieldsModel.base"

/**
 * PokemonV2MovelearnmethodVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovelearnmethodVarSampFieldsModel = PokemonV2MovelearnmethodVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
