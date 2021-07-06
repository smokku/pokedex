import { Instance } from "mobx-state-tree"
import { PokemonV2MovechangeSumFieldsModelBase } from "./PokemonV2MovechangeSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovechangeSumFieldsModel */
export interface PokemonV2MovechangeSumFieldsModelType extends Instance<typeof PokemonV2MovechangeSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovechangeSumFieldsModel */
export { selectFromPokemonV2MovechangeSumFields, pokemonV2MovechangeSumFieldsModelPrimitives, PokemonV2MovechangeSumFieldsModelSelector } from "./PokemonV2MovechangeSumFieldsModel.base"

/**
 * PokemonV2MovechangeSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovechangeSumFieldsModel = PokemonV2MovechangeSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
