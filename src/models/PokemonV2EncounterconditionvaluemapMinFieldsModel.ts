import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluemapMinFieldsModelBase } from "./PokemonV2EncounterconditionvaluemapMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluemapMinFieldsModel */
export interface PokemonV2EncounterconditionvaluemapMinFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluemapMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluemapMinFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluemapMinFields, pokemonV2EncounterconditionvaluemapMinFieldsModelPrimitives, PokemonV2EncounterconditionvaluemapMinFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapMinFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluemapMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2EncounterconditionvaluemapMinFieldsModel = PokemonV2EncounterconditionvaluemapMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
