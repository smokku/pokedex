import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicdescriptionVarSampFieldsModelBase } from "./PokemonV2CharacteristicdescriptionVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicdescriptionVarSampFieldsModel */
export interface PokemonV2CharacteristicdescriptionVarSampFieldsModelType extends Instance<typeof PokemonV2CharacteristicdescriptionVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicdescriptionVarSampFieldsModel */
export { selectFromPokemonV2CharacteristicdescriptionVarSampFields, pokemonV2CharacteristicdescriptionVarSampFieldsModelPrimitives, PokemonV2CharacteristicdescriptionVarSampFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionVarSampFieldsModel.base"

/**
 * PokemonV2CharacteristicdescriptionVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2CharacteristicdescriptionVarSampFieldsModel = PokemonV2CharacteristicdescriptionVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
