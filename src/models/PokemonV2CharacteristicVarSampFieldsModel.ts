import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicVarSampFieldsModelBase } from "./PokemonV2CharacteristicVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicVarSampFieldsModel */
export interface PokemonV2CharacteristicVarSampFieldsModelType extends Instance<typeof PokemonV2CharacteristicVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicVarSampFieldsModel */
export { selectFromPokemonV2CharacteristicVarSampFields, pokemonV2CharacteristicVarSampFieldsModelPrimitives, PokemonV2CharacteristicVarSampFieldsModelSelector } from "./PokemonV2CharacteristicVarSampFieldsModel.base"

/**
 * PokemonV2CharacteristicVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2CharacteristicVarSampFieldsModel = PokemonV2CharacteristicVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
