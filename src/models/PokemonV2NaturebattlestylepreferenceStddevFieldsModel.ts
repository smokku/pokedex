import { Instance } from "mobx-state-tree"
import { PokemonV2NaturebattlestylepreferenceStddevFieldsModelBase } from "./PokemonV2NaturebattlestylepreferenceStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturebattlestylepreferenceStddevFieldsModel */
export interface PokemonV2NaturebattlestylepreferenceStddevFieldsModelType extends Instance<typeof PokemonV2NaturebattlestylepreferenceStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturebattlestylepreferenceStddevFieldsModel */
export { selectFromPokemonV2NaturebattlestylepreferenceStddevFields, pokemonV2NaturebattlestylepreferenceStddevFieldsModelPrimitives, PokemonV2NaturebattlestylepreferenceStddevFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceStddevFieldsModel.base"

/**
 * PokemonV2NaturebattlestylepreferenceStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2NaturebattlestylepreferenceStddevFieldsModel = PokemonV2NaturebattlestylepreferenceStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
