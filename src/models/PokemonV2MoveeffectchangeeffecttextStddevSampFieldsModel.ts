import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModelBase } from "./PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModel */
export interface PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModel */
export { selectFromPokemonV2MoveeffectchangeeffecttextStddevSampFields, pokemonV2MoveeffectchangeeffecttextStddevSampFieldsModelPrimitives, PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModel = PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
