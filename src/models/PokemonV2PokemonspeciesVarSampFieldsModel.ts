import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesVarSampFieldsModelBase } from "./PokemonV2PokemonspeciesVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesVarSampFieldsModel */
export interface PokemonV2PokemonspeciesVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesVarSampFieldsModel */
export { selectFromPokemonV2PokemonspeciesVarSampFields, pokemonV2PokemonspeciesVarSampFieldsModelPrimitives, PokemonV2PokemonspeciesVarSampFieldsModelSelector } from "./PokemonV2PokemonspeciesVarSampFieldsModel.base"

/**
 * PokemonV2PokemonspeciesVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonspeciesVarSampFieldsModel = PokemonV2PokemonspeciesVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
