import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionMinFieldsModelBase } from "./PokemonV2EncounterconditionMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionMinFieldsModel */
export interface PokemonV2EncounterconditionMinFieldsModelType extends Instance<typeof PokemonV2EncounterconditionMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionMinFieldsModel */
export { selectFromPokemonV2EncounterconditionMinFields, pokemonV2EncounterconditionMinFieldsModelPrimitives, PokemonV2EncounterconditionMinFieldsModelSelector } from "./PokemonV2EncounterconditionMinFieldsModel.base"

/**
 * PokemonV2EncounterconditionMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2EncounterconditionMinFieldsModel = PokemonV2EncounterconditionMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
