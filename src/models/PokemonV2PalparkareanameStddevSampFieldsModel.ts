import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareanameStddevSampFieldsModelBase } from "./PokemonV2PalparkareanameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareanameStddevSampFieldsModel */
export interface PokemonV2PalparkareanameStddevSampFieldsModelType extends Instance<typeof PokemonV2PalparkareanameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareanameStddevSampFieldsModel */
export { selectFromPokemonV2PalparkareanameStddevSampFields, pokemonV2PalparkareanameStddevSampFieldsModelPrimitives, PokemonV2PalparkareanameStddevSampFieldsModelSelector } from "./PokemonV2PalparkareanameStddevSampFieldsModel.base"

/**
 * PokemonV2PalparkareanameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PalparkareanameStddevSampFieldsModel = PokemonV2PalparkareanameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
