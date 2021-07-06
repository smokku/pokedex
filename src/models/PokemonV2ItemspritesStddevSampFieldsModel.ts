import { Instance } from "mobx-state-tree"
import { PokemonV2ItemspritesStddevSampFieldsModelBase } from "./PokemonV2ItemspritesStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemspritesStddevSampFieldsModel */
export interface PokemonV2ItemspritesStddevSampFieldsModelType extends Instance<typeof PokemonV2ItemspritesStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemspritesStddevSampFieldsModel */
export { selectFromPokemonV2ItemspritesStddevSampFields, pokemonV2ItemspritesStddevSampFieldsModelPrimitives, PokemonV2ItemspritesStddevSampFieldsModelSelector } from "./PokemonV2ItemspritesStddevSampFieldsModel.base"

/**
 * PokemonV2ItemspritesStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemspritesStddevSampFieldsModel = PokemonV2ItemspritesStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
