import { Instance } from "mobx-state-tree"
import { PokemonV2NaturebattlestylepreferenceMaxFieldsModelBase } from "./PokemonV2NaturebattlestylepreferenceMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturebattlestylepreferenceMaxFieldsModel */
export interface PokemonV2NaturebattlestylepreferenceMaxFieldsModelType extends Instance<typeof PokemonV2NaturebattlestylepreferenceMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturebattlestylepreferenceMaxFieldsModel */
export { selectFromPokemonV2NaturebattlestylepreferenceMaxFields, pokemonV2NaturebattlestylepreferenceMaxFieldsModelPrimitives, PokemonV2NaturebattlestylepreferenceMaxFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceMaxFieldsModel.base"

/**
 * PokemonV2NaturebattlestylepreferenceMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2NaturebattlestylepreferenceMaxFieldsModel = PokemonV2NaturebattlestylepreferenceMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
