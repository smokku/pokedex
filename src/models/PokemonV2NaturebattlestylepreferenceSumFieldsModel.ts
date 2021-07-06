import { Instance } from "mobx-state-tree"
import { PokemonV2NaturebattlestylepreferenceSumFieldsModelBase } from "./PokemonV2NaturebattlestylepreferenceSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturebattlestylepreferenceSumFieldsModel */
export interface PokemonV2NaturebattlestylepreferenceSumFieldsModelType extends Instance<typeof PokemonV2NaturebattlestylepreferenceSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturebattlestylepreferenceSumFieldsModel */
export { selectFromPokemonV2NaturebattlestylepreferenceSumFields, pokemonV2NaturebattlestylepreferenceSumFieldsModelPrimitives, PokemonV2NaturebattlestylepreferenceSumFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceSumFieldsModel.base"

/**
 * PokemonV2NaturebattlestylepreferenceSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2NaturebattlestylepreferenceSumFieldsModel = PokemonV2NaturebattlestylepreferenceSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
