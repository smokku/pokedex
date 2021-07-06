import { Instance } from "mobx-state-tree"
import { PokemonV2NaturebattlestylepreferenceStddevSampFieldsModelBase } from "./PokemonV2NaturebattlestylepreferenceStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturebattlestylepreferenceStddevSampFieldsModel */
export interface PokemonV2NaturebattlestylepreferenceStddevSampFieldsModelType extends Instance<typeof PokemonV2NaturebattlestylepreferenceStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturebattlestylepreferenceStddevSampFieldsModel */
export { selectFromPokemonV2NaturebattlestylepreferenceStddevSampFields, pokemonV2NaturebattlestylepreferenceStddevSampFieldsModelPrimitives, PokemonV2NaturebattlestylepreferenceStddevSampFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceStddevSampFieldsModel.base"

/**
 * PokemonV2NaturebattlestylepreferenceStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2NaturebattlestylepreferenceStddevSampFieldsModel = PokemonV2NaturebattlestylepreferenceStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
